import * as types from "../../actions/actionTypes";
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";

let id = 0; // should create new guid instead

export function createProject(project) {
	project.id = id++;

  return function(dispatch) {
    dispatch(beginAjaxCall());
    return projectApi.getAllProjects()
      .then(projects => {
        dispatch(loadProjectsResponse(projects));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}

export function loadProjectsResponse(projects) {
	return {
		type: types.LOAD_PROJECT_RESPONSE,
		payload: {
			projects
		}
	};
}

export function loadProjects() {
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return projectApi.getAllProjects()
			.then(projects => {
				dispatch(loadProjectsResponse(projects));
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
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
