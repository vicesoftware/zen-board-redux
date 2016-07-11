import * as types from "../../actions/actionTypes";

export default function projectReducer(state = [], action) {
	switch(action.type) {
		case types.CREATE_PROJECT:
			return [...state,
				Object.assign({}, action.payload.project)
			];
		
		case types.LOAD_PROJECT_RESPONSE:
			return action.payload.projects;

		default:
			return state;
	}
}