import userProfileApi from "../../api/stubUserProfileApi";
import app from "../app";
import * as types from './actionTypes';

const {incrementBusyCount, decrementBusyCount} = app.actions;

function authenticateResponse(userProfile) {
	return {
		type: types.AUTHENTICATED,
		payload: {
			userProfile
		}
	};
}

export function authenticate(email, password, rememberMe) {
	return function (dispatch) {
		dispatch(app.actions.incrementBusyCount());
		return userProfileApi.authenticate(email, password, rememberMe)
			.then(userProfile => {
				dispatch(app.actions.decrementBusyCount());
				dispatch(authenticateResponse(userProfile));
			})
			.catch(error => {
				throw(error);
			}); // real error handling coming soon :)
	};
}

export function loadUserProfile() {
  return {
    type: types.AUTHENTICATED,
    payload: userProfileApi.load()
  };
}
