import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projectActions";

class ProjectsPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		props.actions.loadProjects();
	}

	toProjectRow(project) {
		return <div key={project.id}>{project.name}</div>;
	}

	render() {
		return (<div>
				<h1>Projects</h1>
				{this.props.projects.length > 1 && this.props.projects.map(this.toProjectRow)}
				{!this.props.projects.length && <h4>Loading...</h4>}
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
		projects: state.projects
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(projectActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);