import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app/components/App';
import projectList from './components/projectList';
import manageProject from './components/manageProject';
import project from './components/project';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={projectList.components.ProjectsPage}/>
		<Route path="projects/add" component={manageProject.components.ManageProjectsPage}/>
		<Route path="projects/edit/:id" component={manageProject.components.ManageProjectsPage}/>
		<Route path="projects/:id" component={project.components.ProjectPage}/>
	</Route>
);
