import taskApi from "../../api/stubTaskApi";
import busySpinner from "../../components/common/busySpinner";
import {GET} from "./actionTypes";
import {dispatch} from "../../store";

const {incrementBusyCount, decrementBusyCount} = busySpinner.actions;

function getTaskResponse(tasks) {
	return {
		type: GET,
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

export function getTasksFromRoute(nextState) {
  dispatch(getTasks({projectId: nextState.params.id}));
}
