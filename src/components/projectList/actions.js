import projectApi from "../../api/stubProjectApi";
import {actions as appActions} from "../app";
import {GET, DELETE, SAVE} from "./actionTypes";
import {dispatch} from "../../store";

const {incrementBusyCount, decrementBusyCount} = appActions;

function getProjectsResponse(projectList) {
  return {
    type: GET,
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

export function getProjectsForRoute() {
  dispatch(getProjects());
}


function deleteProjectsResponse(projectId) {
  return {
    type: DELETE,
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
    type: SAVE,
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
