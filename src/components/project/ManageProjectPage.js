import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "./projects";
import * as userActions from "../user/users";
import ProjectForm from "./ProjectForm";
import Page from "../common/Page";

class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      project: Object.assign({}, props.project),
      errors: undefined
    };

    this.updateProjectState = this.updateProjectState.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  componentWillMount() {
    this.props.actions.getUsers();

    if (this.props.params.id) {
      this.props.actions.getProjects({id: this.props.params.id});
    }
  }

  updateProjectState(event) {
    const field = event.target.name;
    let project = this.state.project;

    if(field === "members") {
      project[field] = [{username: event.target.value}];
    } else {
      project[field] = event.target.value;
    }
    return this.setState({project: project});
  }

  saveProject(e) {
    e.preventDefault();
    this.props.actions.saveProject(this.state.project)
      .then(() => this.context.router.push("projects"));
  }

  render() {
    const {project, errors} = this.state;
    const {users, isBusy    } = this.props;

    return (
      <Page title="Manage Project" isBusy={isBusy}>
        <ProjectForm
          project={project}
          errors={errors}
          users={users}
          onChange={this.updateProjectState}
          onSave={this.saveProject}
        />
      </Page>
    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isBusy: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  const users = state.users.map(
    user => ({
      text: user.firstName + " " + user.lastName,
      value: user.username
    }));

  let project = { name: ""};

  if (ownProps.params.id) {
    project = state.projects.filter(p => p.id === ownProps.params.id)[0];
  }

  return {
    project: project,
    users: users,
    isBusy: state.numberOfAjaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, projectActions, userActions);
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ManageProjectPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
