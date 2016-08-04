import * as types from "./actionTypes";

export function incrementBusyCount() {
  return {type: types.INCREMENT_BUSY_COUNT};
}

export function decrementBusyCount() {
  return {type: types.DECREMENT_BUSY_COUNT};
}

