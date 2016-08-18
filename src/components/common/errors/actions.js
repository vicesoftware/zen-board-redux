import * as types from './actionTypes';

export function showError(error) {
  let errorObject = {};
  if (error.title) {
    errorObject = error;
  } else {
    errorObject.title = "Error";
    errorObject.message = error;
  }

  return {
    type: types.SHOW,
    payload: {
      error: errorObject
    }
  };
}

export function hideError() {
  return {
    type: types.HIDE,
    payload: {}
  };
}
