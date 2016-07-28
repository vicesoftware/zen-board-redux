import initialState from "./initialState";

// actions
const INCREMENT_BUSY_COUNT = "zen/ajaxStatus/INCREMENT_BUSY_COUNT";
const DECREMENT_BUSY_COUNT = "zen/ajaxStatus/DECREMENT_BUSY_COUNT";


// reducer
export default function reducer(state = initialState.busyCount, action) {
  switch (action.type) {
    case INCREMENT_BUSY_COUNT:
      return state + 1;

    case DECREMENT_BUSY_COUNT:
      return state - 1;

    default:
      return state;
  }
}

// action creators
export function incrementBusyCount() {
  return {type: INCREMENT_BUSY_COUNT};
}

export function decrementBusyCount() {
  return {type: DECREMENT_BUSY_COUNT};
}
