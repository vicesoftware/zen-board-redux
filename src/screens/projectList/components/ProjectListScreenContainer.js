import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import * as selectors from "../selectors";
import ProjectPageLayout from "./ProjectPageLayout";


class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addProject = this.addProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    this.props.actions.getProjects({
      userId: this.props.userProfile.id
    });
  }

  addProject(e) {
    e.preventDefault();
    this.context.router.push("projects/add");
  }

  deleteProject(projectId) {
    this.props.actions.deleteProject(projectId);
  }

  getProjectRows(projectList) {
    if (!projectList || projectList.length === 0) {
      return [];
    }

    return chunkArray(projectList, 3);

    function chunkArray(array, chunk) {
      let i, j;
      const tempArray = [];

      for (i = 0, j = array.length; i < j; i += chunk) {
        tempArray.push(array.slice(i, i + chunk));
      }

      return tempArray;
    }
  }

  render() {
    const {isBusy} = this.props;
    const projectRows = this.getProjectRows(this.props.projectList);

    return (
      <ProjectPageLayout
        isBusy={isBusy}
        projectRows={projectRows}
        onDeleteProject={this.deleteProject}
        onAddProject={this.addProject}
      />
    );
  }
}

ProjectsPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

ProjectsPage.propTypes = {
  isBusy: PropTypes.bool,
  actions: PropTypes.object.isRequired,
  projectList: PropTypes.array.isRequired,
  userProfile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    projectList: selectors.getByUserId(
      state,
      state.userProfile.id
    ),
    isBusy: state.busySpinner.count > 0,
    userProfile: state.userProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
