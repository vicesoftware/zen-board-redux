import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../project/reducer";
import * as userActions from "../users/usersReducer";
import ProjectForm from "./ProjectForm";
import Page from "../common/Page";

class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      project: Object.assign({}, props.project),
      errors: undefined,
      members: undefined
    };

    this.updateProjectState = this.updateProjectState.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  componentWillMount() {
    this.props.actions.getUsers();

    if (this.props.params.id) {
      this.props.actions.getProject(this.props.params.id);
    }
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
              {}, project, {members: members})});
      }
    }

    const field = event.target.name;

    project[field] = event.target.value;

    return this.setState({project: project});
  }

  saveProject(e) {
    e.preventDefault();
    this.props.actions.saveProject(this.state.project)
      .then(() => this.context.router.push("/"));
  }

  render() {
    const {project, errors} = this.state;
    const {users, isBusy} = this.props;

    return (
      <Page isBusy={isBusy}>
        <h4 className="text-muted">Add Project</h4>
        <div className="card card-block">
          <ProjectForm
            project={project}
            errors={errors}
            users={users}
            onChange={this.updateProjectState}
            onSave={this.saveProject}
          />
        </div>
      </Page>
    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isBusy: PropTypes.bool,
  params: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let project = {name: ""};

  if (ownProps.params.id) {
    project = state.projects.filter(p => p.id === ownProps.params.id)[0];
  }

  return {
    project: project,
    users: state.users,
    isBusy: state.busyCount > 0
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, projectActions, userActions);
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ManageProjectPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
