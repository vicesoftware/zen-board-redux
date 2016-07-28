// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {incrementBusyCount, decrementBusyCount} from "../app/busyStatus";
import initialState from "../../reducers/initialState";

// actions
const SET = "zen/currentProject/SET";

// reducer
export default function reducer(state = initialState.currentProject, action) {
  switch (action.type) {

    case SET:
      return action.payload.currentProject;

    default:
      return state;
  }
}

// action creators
function setCurrentProjectResponse(currentProject) {
  return {
    type: SET,
    payload: {
      currentProject
    }
  };
}

export function setCurrentProject(projectId) {
  return function (dispatch) {
    dispatch(incrementBusyCount());

    if (projectId) {
      return projectApi.getProjects({id: projectId})
        .then(projects => {
          dispatch(decrementBusyCount());
          dispatch(setCurrentProjectResponse(projects[0]));
        })
        .catch(error => {
          throw(error);
        }); // real error handling coming soon :)
    }

    return new Promise((resolve, reject) => {
      dispatch(decrementBusyCount());
      dispatch(setCurrentProjectResponse({}));
      resolve();
    }); // we must return a promise even if we are doing nothing
  };
}
