import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projectActions";
import ProjectList from './ProjectList';

class ProjectsPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		props.actions.loadProjects();
	}

	render() {
		const {projects, isBusy} = this.props;

		return (
			<div>
				<h1>Projects</h1>
				<ProjectList projects={projects} isBusy={isBusy}/>
			</div>
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