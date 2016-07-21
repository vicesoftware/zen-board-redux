import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "./projectActions";
import * as userActions from "../user/userActions";
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
    this.props.actions.loadUsers();
  }

  updateProjectState(event) {
    const field = event.target.name;
    let project = this.state.project;
    project[field] = event.target.value;
    return this.setState({project: project});
  }

  saveProject() {
    this.props.actions.saveProject(this.state.project);
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
  let project = {title: ""};
  const users = state.users.map(
    user => ({
      text: user.firstName + " " + user.lastName,
      value: user.id
    }));

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
