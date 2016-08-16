import * as types from "./actionTypes";

export function showError(displayMessage) {
  return {
    type: types.SHOW_ERROR,
    payload: {
      displayMessage
    }
  };
}

