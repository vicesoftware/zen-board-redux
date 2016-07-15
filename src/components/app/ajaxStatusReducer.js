import * as types from "../../actions/actionTypes";
import initialState from "../../reducers/initialState";

export default function ajaxStatusReduer(state = initialState.numberOfAjaxCallsInProgress, action) {
	if (action.type === types.BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (actionTypeEndsInReponse(action.type)) {
		return state - 1;
	}

	return state;
}

function actionTypeEndsInReponse(type) {
	return type.substring(type.length - 9) === "_RESPONSE";
}