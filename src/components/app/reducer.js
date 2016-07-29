import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.busyCount, action) {
  switch (action.type) {
    case types.INCREMENT_BUSY_COUNT:
      return state + 1;

    case types.DECREMENT_BUSY_COUNT:
      return state - 1;

    default:
      return state;
  }
}
