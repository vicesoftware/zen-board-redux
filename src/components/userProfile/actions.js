import userProfileApi from "../../api/stubUserProfileApi";
import app from "../app";
import * as types from './actionTypes';

const {incrementBusyCount, decrementBusyCount} = app.actions;

function authentiateResponse(userProfile) {
	return {
		type: types.AUTHENTICATED,
		payload: {
			userProfile
		}
	};
}

export function authenticate(email, password) {
	return function (dispatch) {
		dispatch(app.actions.incrementBusyCount());
		return userProfileApi.authenticate(email, password)
			.then(userProfile => {
				dispatch(app.actions.decrementBusyCount());
				dispatch(authentiateResponse(userProfile));
			})
			.catch(error => {
				throw(error);
			}); // real error handling coming soon :)
	};
}
