import taskApi from "../../api/stubTaskApi";
import app from "../app";
import * as types from './actionTypes';


const {incrementBusyCount, decrementBusyCount} = app.actions;

function getTaskResponse(tasks) {
	return {
		type: types.GET,
		payload: {
			tasks
		}
	};
}

export function getTasks(by) {
	return function (dispatch) {
		dispatch(incrementBusyCount());
		return taskApi.getTasks(by)
			.then(tasks => {
				dispatch(decrementBusyCount());
				dispatch(getTaskResponse(tasks));
			})
			.catch(error => {
				throw(error);
			}); // real error handling coming soon :)
	};
}
