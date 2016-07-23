// This is a duck: https://github.com/erikras/ducks-modular-redux
import * as types from "../../actions/actionTypes";
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";
import initialState from "../../reducers/initialState";

// actions
const GET_PROJECT_RESPONSE = "GET_PROJECT_RESPONSE";
const CREATE_PROJECT = "CREATE_PROJECT";
const SAVE_PROJECT_RESPONSE = "SAVE_PROJECT_RESPONSE";

// reducer
export default function reducer(state = initialState.projects, action) {
  switch(action.type) {
    case CREATE_PROJECT:
      return [...state,
        Object.assign({}, action.payload.project)
      ];

    case GET_PROJECT_RESPONSE:
      return action.payload.projects;

    default:
      return state;
  }
}

// action creators
export function getProjectsResponse(projects) {
  return {
    type: GET_PROJECT_RESPONSE,
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

export function saveProjectsResponse(project) {
  return {
    type: SAVE_PROJECT_RESPONSE,
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
