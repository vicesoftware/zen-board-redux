import * as types from "../../actions/actionTypes";
import initialState from "../../reducers/initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USERS_RESPONSE: {
      return action.payload.users;
    }

    default:
      return state;
  }
}
