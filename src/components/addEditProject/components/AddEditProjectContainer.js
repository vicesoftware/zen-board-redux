import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import currentProject from "../../currentProject";
import projectList from "../../projectList";
import users from "../../users";
import AddEditProject from "./AddEditProject";

class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      project: {},
      errors: undefined,
      members: undefined
    };

    this.updateProjectState = this.updateProjectState.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  componentDidMount() {
    this.updateState();
    this.getData();
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;

    if (newId !== oldId) {
      this.getData();
    } else if (prevPropsEmpty(prevProps) && currentPropsNotEmpty(this.props)) {
      this.updateState();
    }

    function prevPropsEmpty(props) {
      return !props.project || !props.project.name;
    }

    function currentPropsNotEmpty(props) {
      return props.project && props.project.name;
    }
  }

  getData() {
    this.props.actions.getProjects({
      userId: this.props.userProfile.id
      });
    this.props.actions.getUsers();
  }

  updateState() {
    this.setState({project: Object.assign({}, this.props.project)});

  }

  updateProjectState(event) {
    let project = this.state.project;

    // Handle member list changed event
    if (!event.target) {
      const members = this.props.users
        .filter(user => event.includes(user.id));
      if (members) {
        return this.setState({
          project: Object.assign(
            {}, project, {members: members})
        });
      }
    }

    const field = event.target.name;

    project[field] = event.target.value;

    return this.setState({project: project});
  }

  saveProject(e) {
    e.preventDefault();

    const project = Object.assign(
      {},
      this.state.project,
      {createdBy: this.props.userProfile.id}
      );

    this.props.actions.saveProject(project)
      .then(() => this.context.router.push("/"));
  }

  render() {
    const {project, errors} = this.state;
    const {users, isBusy} = this.props;

    return (
      <AddEditProject
        project={project}
        errors={errors}
        users={users}
        isBusy={isBusy}
        onChange={this.updateProjectState}
        onSave={this.saveProject} />
    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isBusy: PropTypes.bool,
  params: PropTypes.object,
  userProfile: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    project: projectList.selectors.getById(state, ownProps.params.id),
    users: state.users,
    isBusy: state.busySpinner.count > 0,
    userProfile: state.userProfile
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign(
    {}, currentProject.actions, projectList.actions, users.actions);

  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ManageProjectPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
