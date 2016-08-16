import React from "react";
import {Route, IndexRoute} from "react-router";
import app from "./components/app";
import projectList from "./components/projectList";
import addEditProject from "./components/addEditProject";
import currentProject from "./components/currentProject";
import taskList from "./components/taskList";
import signIn from "./components/signIn";

export default function createRoutes(requireAccess) {
  return (
	<Route path="/" component={app.components.AppContainer}>
		<IndexRoute
      component={projectList.components.ProjectsPage}
      onEnter={requireAccess()}/>
    <Route
      path="projects"
      component={projectList.components.ProjectsPage}
      onEnter={requireAccess()}/>
		<Route
      path="projects/add"
      component={addEditProject.components.AddEditProjectContainer}/>
		<Route
      path="projects/edit/:id"
      component={addEditProject.components.AddEditProjectContainer}
      onEnter={addEditProject.actions.loadAddEditProjectsFromRoute}/>
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
    <Route
      path="sign-in"
      component={signIn.components.SignIn}/>
	</Route>
  );
}
