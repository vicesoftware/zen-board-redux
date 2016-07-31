import projectApi from "../../api/stubProjectApi";
import app from "../app";
import * as types from './actionTypes';

const {incrementBusyCount, decrementBusyCount} = app.actions;

function getProjectsResponse(projectList) {
  return {
    type: types.GET,
    payload: {
      projectList
    }
  };
}

export function getProjects() {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return projectApi.getProjects()
      .then(projects => {
        dispatch(decrementBusyCount());
        dispatch(getProjectsResponse(projects));
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}


function deleteProjectsResponse(projectId) {
  return {
    type: types.DELETE,
    payload: {
      projectId
    }
  };
}

export function deleteProject(projectId) {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return projectApi.deleteProject(projectId)
      .then(projects => {
        dispatch(decrementBusyCount());
        dispatch(deleteProjectsResponse(projectId));
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}

function saveProjectsResponse(project) {
  return {
    type: types.SAVE,
    payload: {
      savedProject: project
    }
  };
}

export function saveProject(project) {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return projectApi.saveProject(project)
      .then(project => {
        dispatch(decrementBusyCount());
        dispatch(saveProjectsResponse(project));
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}
