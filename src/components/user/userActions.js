import * as types from "../../actions/actionTypes";
import userApi from "../../api/stubUserApi";
import {beginAjaxCall} from "../app/ajaxStatusActions";


export function getUsersResponse(users) {
  return {
    type: types.GET_USERS_RESPONSE,
    payload: {
      users
    }
  };
}

export function getUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getAllUsers()
      .then(user => {
        dispatch(getUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
