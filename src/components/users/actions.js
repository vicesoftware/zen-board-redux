import userApi from "../../api/stubUserApi";
import app from "../app";
import * as types from './actionTypes';

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
    dispatch(app.actions.incrementBusyCount());
    return userApi.getUsers()
      .then(user => {
        dispatch(app.actions.decrementBusyCount());
        dispatch(getUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
