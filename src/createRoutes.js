import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app/components/App";
import projectList from "./components/projectList";
import addEditProject from "./components/addEditProject";
import currentProject from "./components/currentProject";
import taskList from "./components/taskList";
import signIn from "./components/signIn";
import userProfile from "./components/userProfile";

export default function createRoutes(requireAccess) {
  return (
	<Route path="/" component={App}
    onEnter={userProfile.actions.loadUserProfileFromRoute}>
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
