import React from "react";
import {Route, IndexRoute} from "react-router";
import app from "./components/app";
import projectList from "./screens/projectList";
import addEditProject from "./screens/addEditProject";
import currentProject from "./screens/project";
import taskList from "./screens/taskList";
import signIn from "./screens/signIn";

export default function createRoutes(requireAccess) {
  return (
	<Route path="/" component={app.components.App}>
		<IndexRoute
      component={projectList.components.ProjectsPage}
      onEnter={requireAccess()}/>
    <Route
      path="projects"
      component={projectList.components.ProjectsPage}
      onEnter={requireAccess()}/>
		<Route
      path="projects/add"
      component={addEditProject.components.AddEditProject}/>
		<Route
      path="projects/edit/:id"
      component={addEditProject.components.AddEditProject}
      onEnter={addEditProject.actions.loadAddEditProjectsFromRoute}/>
		<Route
      path="projects/:id"
      component={currentProject.components.Project}>
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
