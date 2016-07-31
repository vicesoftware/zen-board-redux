import projectApi from "../../api/stubProjectApi";
import app from "../app";
import * as types from "./actionTypes";

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
      return projectApi.getProjects({id: projectId})
        .then(projects => {
          dispatch(decrementBusyCount());
          dispatch(openCurrentProjectResponse(projects[0]));
        })
        .catch(error => {
          throw(error);
        }); // real error handling coming soon :)
    }

    return new Promise((resolve, reject) => {
      dispatch(decrementBusyCount());
      dispatch(openCurrentProject({}));
      resolve();
    }); // we must return a promise even if we are doing nothing
  };
}

function saveProjectsResponse(project) {
  return {
    type: types.SAVE,
    payload: {
      project
    }
  };
}

export function saveProject(project) {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return projectApi.saveProject(project)
      .then(projects => {
        dispatch(decrementBusyCount());
        dispatch(saveProjectsResponse(project));
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}
