import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.userProfile, action) {
	switch (action.type) {
		case types.AUTHENTICATED:
			return action.payload.userProfile;

		default:
			return state;
	}
}
