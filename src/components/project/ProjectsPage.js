import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projectActions";
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

  render() {
    const {projects, isBusy} = this.props;

    return (
      <Page title="Projects" isBusy={isBusy}>
        <div className="row">
          <div className="col-lg-10">
            <ProjectList projects={projects}/>
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
