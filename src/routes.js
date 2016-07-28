import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app/App';
import ProjectsPage from './components/projects/ProjectsPage';
import ManageProjectsPage from './components/manageProject/ManageProjectPage';
import ProjectPage from './components/project/ProjectPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProjectsPage}/>
		<Route path="projects/add" component={ManageProjectsPage}/>
		<Route path="projects/edit/:id" component={ManageProjectsPage}/>
		<Route path="projects/:id" component={ProjectPage}/>
	</Route>
);
