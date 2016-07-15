import * as types from "../../actions/actionTypes";
import projectApi from "../../api/stubProjectApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";

let id = 0; // should create new guid instead

export function createProject(project) {
	project.id = id++;

	return {
		type: types.CREATE_PROJECT,
			payload: {
				project
		}
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