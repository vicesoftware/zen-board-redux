import * as types from "../../actions/actionTypes";
import userApi from "../../api/stubUserApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";


export function loadUsersResponse(users) {
  return {
    type: types.LOAD_USER_RESPONSE,
    payload: {
      users
    }
  };
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getAllUsers()
      .then(user => {
        dispatch(loadUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
