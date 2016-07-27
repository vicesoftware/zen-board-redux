// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatus";
import initialState from "../../reducers/initialState";

// actions
const GET_RESPONSE = "zen/projects/GET_RESPONSE";
const CREATE_RESPONSE = "zen/projects/CREATE_RESPONSE";
const SAVE_RESPONSE = "zen/projects/SAVE_RESPONSE";
const DELETE_RESPONSE = "zen/projects/DELETE_RESPONSE";

// reducer
export default function reducer(state = initialState.projects, action) {
  switch(action.type) {
    case CREATE_RESPONSE:
      return [...state,
        Object.assign({}, action.payload.project)
      ];

    case GET_RESPONSE:
      return action.payload.projects;

    default:
      return state;
  }
}

// action creators
function getProjectsResponse(projects) {
  return {
    type: GET_RESPONSE,
    payload: {
      projects
    }
  };
}

export function getProjects(by) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return projectApi.getProjects(by)
      .then(projects => {
        dispatch(getProjectsResponse(projects));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}

function saveProjectsResponse(project) {
  return {
    type: SAVE_RESPONSE,
    payload: {
      project
    }
  };
}

export function saveProject(project) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return projectApi.saveProject(project)
      .then(projects => {
        dispatch(saveProjectsResponse(project));
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}

function deleteProjectsResponse(project) {
  return {
    type: DELETE_RESPONSE,
    payload: {
      project
    }
  };
}

export function deleteProject(projectId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return projectApi.deleteProject(projectId)
      .then(projects => {
        dispatch(deleteProjectsResponse());
      })
      .catch(error => {
        throw(error);
      }); // real error handling coming soon :)
  };
}
