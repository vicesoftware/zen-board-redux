import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import project from "../../project";
import projectList from "../../projectList";
import users from "../../users";
import AddEditProject from "./AddEditProject";
import _ from "lodash";

class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      project: {},
      errors: undefined,
      members: undefined
    };

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

  saveProject(formData) {
    formData.members = formData.members
      .split(",")
      .map(member => this.props.users
        .find(user => user.id === member));

    if (!_.isEmpty(this.state.project)) {
      formData.id = this.state.project.id;
    }

    const project = Object.assign(
      {},
      formData,
      {createdBy: this.props.userProfile.id}
      );

    this.props.actions.saveProject(project)
      .then(() => this.context.router.push("/"));
  }

  mapProjectToFormData(project) {
    return {
      name: project.name,
      members: project.members.map(member => member.id).join(",")
    };
  }

  render() {
    const {project, errors} = this.state;
    const {users, isBusy} = this.props;
    let initialValues = {};

    if (!_.isEmpty(project)) {
      initialValues = this.mapProjectToFormData(project);
    }

    return (
      <AddEditProject
        initialValues={initialValues}
        errors={errors}
        users={users}
        isBusy={isBusy}
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
    {}, project.actions, projectList.actions, users.actions);

  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ManageProjectPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
