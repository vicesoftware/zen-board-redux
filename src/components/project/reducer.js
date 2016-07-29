// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {incrementBusyCount, decrementBusyCount} from "../app/busyStatusReducer";
import initialState from "../../reducers/initialState";

// actions
const GET = "zen/project/GET";
const SAVE = "zen/project/SAVE";

// reducer
export default function reducer(state = initialState.project, action) {
  switch (action.type) {

    case GET:
      return action.payload.project;

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
function setProjectResponse(project) {
  return {
    type: GET,
    payload: {
      project
    }
  };
}

export function getProject(projectId) {
  return function (dispatch) {
    dispatch(incrementBusyCount());

    if (projectId) {
      return projectApi.getProjects({id: projectId})
        .then(projects => {
          dispatch(decrementBusyCount());
          dispatch(setProjectResponse(projects[0]));
        })
        .catch(error => {
          throw(error);
        }); // real error handling coming soon :)
    }

    return new Promise((resolve, reject) => {
      dispatch(decrementBusyCount());
      dispatch(setProjectResponse({}));
      resolve();
    }); // we must return a promise even if we are doing nothing
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
