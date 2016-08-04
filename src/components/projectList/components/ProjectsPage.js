import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import ProjectPageLayout from "./ProjectPageLayout";


class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addProject = this.addProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentWillMount() {
    if (this.props.projectList.length === 0) {
      this.props.actions.getProjects();
    }
  }

  addProject(e) {
    e.preventDefault();
    this.context.router.push("projects/add");
  }

  deleteProject(projectId) {
    this.props.actions.deleteProject(projectId);
  }

  getProjectRows(projectList) {
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
    const {isBusy, actions} = this.props;
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
  projectList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projectList: state.projectList,
    isBusy: state.busyCount > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
