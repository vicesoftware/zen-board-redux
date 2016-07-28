// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {incrementBusyCount, decrementBusyCount} from "../app/busyStatus";
import initialState from "../../reducers/initialState";

// actions
const GET = "zen/projects/GET";
const CREATE = "zen/projects/CREATE";
const SAVE = "zen/projects/SAVE";
const DELETE = "zen/projects/DELETE";

// reducer
export default function reducer(state = initialState.projects, action) {
  switch (action.type) {
    case CREATE:
      return [...state,
        Object.assign({}, action.payload.project)
      ];

    case GET:
      return action.payload.projects;

    case DELETE:
      return [...state.filter(project => project.id != action.payload.projectId)];

    case SAVE: {
      const index = state.findIndex(project => project.id === action.payload.id);
      const notFound = -1;

      if (index === notFound) {
        return [...state, action.payload.project];
      } else {
        return [...state.slice(0, index - 1),
          action.payload.project,
          ...state.slice(index + 1)];
      }
    }

    default:
      return state;
  }
}

// action creators
function getProjectsResponse(projects) {
  return {
    type: GET,
    payload: {
      projects
    }
  };
}

export function getProjects(by) {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return projectApi.getProjects(by)
      .then(projects => {
        dispatch(decrementBusyCount());
        dispatch(getProjectsResponse(projects));
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
