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

    props.actions.loadUsers();
  }

  render() {
    const {project, errors} = this.state;
    const {users, isBusy    } = this.props;

    return (
      <Page title="Manage Project" isBusy={isBusy}>
        <ProjectForm
          project={project}
          errors={errors}
          users={users}/>
      </Page>
    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
