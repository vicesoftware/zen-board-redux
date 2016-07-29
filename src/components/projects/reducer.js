// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {incrementBusyCount, decrementBusyCount} from "../app/busyStatusReducer";
import initialState from "../../reducers/initialState";

// actions
const GET = "zen/projects/GET";
const CREATE = "zen/projects/CREATE";
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
