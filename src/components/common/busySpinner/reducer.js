import initialState from "../../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.busySpinner, action) {
  switch (action.type) {
    case types.INCREMENT_BUSY_COUNT:
      return Object.assign(
        {}, state, { count: state.count + 1});

    case types.DECREMENT_BUSY_COUNT:
      return Object.assign(
        {}, state, { count: state.count - 1});

    default:
      return state;
  }
}

