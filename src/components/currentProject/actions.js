import projectApi from "../../api/stubProjectApi";
import app from "../app";
import * as types from "./actionTypes";
import projectList from "../projectList";

const {incrementBusyCount, decrementBusyCount} = app.actions;

function openCurrentProjectResponse(currentProject) {
  return {
    type: types.OPEN_CURRENT,
    payload: {
      currentProject
    }
  };
}

export function openCurrentProject(projectId) {
  return function (dispatch) {
    dispatch(incrementBusyCount());

    if (projectId) {

      // Get project from server
      return projectApi.getProjects({id: projectId})
        .then(projects => {
          dispatch(decrementBusyCount());
          dispatch(openCurrentProjectResponse(projects[0]));
        })
        .catch(error => {
          throw(error);
        }); // real error handling coming soon :)
    }

    // Return an empty project
    return new Promise((resolve) => {
      dispatch(decrementBusyCount());
      dispatch(openCurrentProjectResponse({}));
      resolve();
    }); // we must return a promise even if we are doing nothing
  };
}

export function closeProject() {
  return {
    type: types.CLOSE_PROJECT
  };
}
