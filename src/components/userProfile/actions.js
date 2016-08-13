import userProfileApi from "../../api/stubUserProfileApi";
import * as appActions from "../app/actions";
import * as types from "./actionTypes";
import {dispatch} from "../../store";

const {incrementBusyCount, decrementBusyCount} = appActions;

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
        throw(error);
      }); // real error handling coming soon :)
  };
}

function loadUserProfile() {
  return {
    type: types.AUTHENTICATED,
    payload: {
      userProfile: userProfileApi.load() || {}
    }
  };
}

export function loadUserProfileFromRoute() {
  dispatch(loadUserProfile());
}
