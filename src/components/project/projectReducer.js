import * as types from "../../actions/actionTypes";
import initialState from "../../reducers/initialState";

export default function projectReducer(state = initialState.projects, action) {
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