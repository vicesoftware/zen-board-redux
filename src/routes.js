import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app/components/App";
import projectList from "./components/projectList";
import addEditProject from "./components/addEditProject";
import currentProject from "./components/currentProject";
import taskList from "./components/taskList";

export default (
	<Route path="/" component={App}>
		<IndexRoute
      component={projectList.components.ProjectsPage}
      onEnter={projectList.actions.getProjectsForRoute}/>
		<Route
      path="projects/add"
      component={addEditProject.components.ManageProjectsPage}/>
		<Route
      path="projects/edit/:id"
      component={addEditProject.components.ManageProjectsPage}/>
		<Route
      path="projects/:id"
      component={currentProject.components.ProjectPage}>
			<IndexRoute
				component={taskList.components.TaskList}
        onEnter={taskList.actions.getTasksFromRoute}/>
      <Route
        path="tasks"
        component={taskList.components.TaskList}
        onEnter={taskList.actions.getTasksFromRoute}/>
    </Route>
	</Route>
);
