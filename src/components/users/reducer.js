import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET: {
      return action.payload.users;
    }

    default:
      return state;
  }
}
