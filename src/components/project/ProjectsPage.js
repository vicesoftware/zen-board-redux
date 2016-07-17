import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projectActions";
import ProjectList from './ProjectList';
import Page from "../common/Page";

class ProjectsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

  componentWillMount() {
    this.props.actions.loadProjects();
  }

	render() {
		const {projects, isBusy} = this.props;

		return (
			<Page title="Projects" isBusy={isBusy}>
				<ProjectList projects={projects} />
			</Page>
		);
	}
}

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
