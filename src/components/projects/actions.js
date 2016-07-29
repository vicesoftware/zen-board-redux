import projectApi from "../../api/stubProjectApi";
import app from "../app";
import * as types from './actionTypes';

const {incrementBusyCount, decrementBusyCount} = app.actions;

function getProjectsResponse(projects) {
  return {
    type: types.GET,
    payload: {
      projects
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
