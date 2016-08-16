import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.app, action) {
  switch (action.type) {
    case types.SHOW_ERROR:
      return Object.assign({},
        state,
        {
          error: action.payload
        });

    default:
      return state;
  }
}
