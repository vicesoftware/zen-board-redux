import userApi from "../../api/stubUserApi";
import busySpinner from "../common/busySpinner";
import * as types from "./actionTypes";

const {incrementBusyCount, decrementBusyCount} = busySpinner.actions;

export function getUsersResponse(users) {
  return {
    type: types.GET,
    payload: {
      users
    }
  };
}

export function getUsers() {
  return function(dispatch) {
    dispatch(incrementBusyCount());
    return userApi.getUsers()
      .then(user => {
        dispatch(decrementBusyCount());
        dispatch(getUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
