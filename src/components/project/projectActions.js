import * as types from '../../actions/actionTypes';

let id = 0;

export function createProject(project) {
	project.id = id++;

	return {
		type: types.CREATE_PROJECT,
			payload: {
				project
		}
	};
}