import initialState from "../../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.SHOW:
      return {
        userError: action.payload.error
      };

    default:
      return state;
  }
}
