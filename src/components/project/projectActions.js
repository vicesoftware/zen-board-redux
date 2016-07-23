import * as types from "../../actions/actionTypes";
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";

export function getProjectsResponse(projects) {
	return {
		type: types.GET_PROJECT_RESPONSE,
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
    type: types.SAVE_PROJECT_RESPONSE,
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
