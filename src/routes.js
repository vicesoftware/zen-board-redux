import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProjectsPage from './components/project/ProjectsPage';
import ManageProjectsPage from './components/project/ManageProjectPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="projects" component={ProjectsPage}/>
		<Route path="projects/add" component={ManageProjectsPage}/>
		<Route path="projects/:id" component={ManageProjectsPage}/>
		<Route path="about" component={AboutPage}/>
	</Route>
);
