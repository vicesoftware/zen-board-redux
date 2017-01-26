import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.taskList, action) {
	switch (action.type) {
		case types.GET:
			return action.payload.tasks;

		default:
			return state;
	}
}
