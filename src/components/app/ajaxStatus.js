import initialState from "../../reducers/initialState";

// actions
const BEGIN_AJAX_CALL = "zen/ajaxStatus/BEGIN_AJAX_CALL";


// reducer
export default function reducer(state = initialState.numberOfAjaxCallsInProgress, action) {
	if (action.type === BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (actionTypeEndsInReponse(action.type)) {
		return state - 1;
	}

	return state;
}

function actionTypeEndsInReponse(type) {
	return type.substring(type.length - 9) === "_RESPONSE";
}

// action creators
export function beginAjaxCall() {
  return {type: BEGIN_AJAX_CALL};
}
