import * as types from "../../actions/actionTypes";

export function beginAjaxCall() {
	return {type: types.BEGIN_AJAX_CALL};
}