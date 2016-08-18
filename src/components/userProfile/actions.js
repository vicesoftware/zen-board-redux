import userProfileApi from "../../api/stubUserProfileApi";
import busySpinner from "../common/busySpinner";
import * as types from "./actionTypes";

const {incrementBusyCount, decrementBusyCount} = busySpinner.actions;

function authenticateResponse(userProfile) {
  return {
    type: types.AUTHENTICATED,
    payload: {
      userProfile
    }
  };
}

export function authenticate(email, password, rememberMe) {
  return function (dispatch) {
    dispatch(incrementBusyCount());
    return userProfileApi.authenticate(email, password, rememberMe)
      .then(userProfile => {
        dispatch(decrementBusyCount());
        dispatch(authenticateResponse(userProfile));
      })
      .catch(error => {
        dispatch(decrementBusyCount())
        throw(error);
      });
  };
}

export function loadUserProfile(profile) {
  return {
    type: types.AUTHENTICATED,
    payload: {
      userProfile: profile
    }
  };
}
