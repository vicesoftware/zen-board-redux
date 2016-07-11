import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from "./projectActions";

function getDefaultProject() {
	return {
		project: { title: "" }
	};
}

class ProjectsPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.onProjectChanged = this.onProjectChanged.bind(this);
		this.onClickSave = this.onClickSave.bind(this);

		this.state = getDefaultProject();
	}

	onProjectChanged(event) {
		const project = this.state.project;
		project.title = event.target.value;
		this.setState({project: project});
	}

	onClickSave() {
		this.props.actions.createProject(this.state.project);
		this.setState(getDefaultProject());
	}

	toProjectRow(project) {
		return <div key={project.id}>{project.title}</div>;
	}

	render() {
		return (<div>
				<h1>Projects</h1>
				{this.props.projects.map(this.toProjectRow)}
				<h3>Add Project</h3>
				<input
					type="text"
					onChange={this.onProjectChanged}
					value={this.state.project.title} />
				<input className="btn btn-primary"
					type="submit"
					value="save"
					onClick={this.onClickSave}/>
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