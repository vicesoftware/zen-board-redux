// This is a duck: https://github.com/erikras/ducks-modular-redux
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatus";
import initialState from "../../reducers/initialState";

// actions
const SET_RESPONSE = "zen/currentProject/SET_RESPONSE";

// reducer
export default function reducer(state = initialState.currentProject, action) {
  switch (action.type) {

    case SET_RESPONSE:
      return action.payload.currentProject;

    default:
      return state;
  }
}

// action creators
function setCurrentProjectResponse(currentProject) {
  return {
    type: SET_RESPONSE,
    payload: {
      currentProject
    }
  };
}

export function setCurrentProject(projectId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    if (projectId) {
      return projectApi.getProjects({id: projectId})
        .then(projects => {
          dispatch(setCurrentProjectResponse(projects[0]));
        })
        .catch(error => {
          throw(error);
        }); // real error handling coming soon :)
    }

    return new Promise((resolve, reject) => {
      dispatch(setCurrentProjectResponse({}));
      resolve();
    }); // we must return a promise even if we are doing nothing
  };
}
