import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projects";
import ProjectList from './ProjectList';
import Page from "../common/Page";

class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addProject = this.addProject.bind(this);
  }

  componentWillMount() {
    this.props.actions.getProjects();
  }

  addProject(e) {
    e.preventDefault();
    this.context.router.push("projects/add");
  }

  getProjectRows(projects) {
    return chunkArray(projects, 3);

    function chunkArray(array, chunk) {
      let i,j;
      const tempArray = [];

      for (i=0,j=array.length; i<j; i+=chunk) {
        tempArray.push(array.slice(i,i+chunk));
      }

      return tempArray;
    }
  }

  render() {
    const {isBusy} = this.props;
    const projectRows = this.getProjectRows(this.props.projects);

    return (
      <Page isBusy={isBusy}>
        <div className="row">
          <div className="col-lg-10">
            <ProjectList projectRows={projectRows}/>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-primary" onClick={this.addProject}>Add</button>
          </div>
        </div>
      </Page>
    );
  }
}

ProjectsPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

ProjectsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    isBusy: state.numberOfAjaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
