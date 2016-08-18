import initialState from "../../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.SHOW:
      return {
        userError: action.payload.error
      };

    case types.HIDE: {
      const error = Object.assign({}, state);
      error.userError = Object.assign({}, state.userError);
      delete error.userError;
      return error;
    }

    default:
      return state;
  }
}
