import initialState from "../../reducers/initialState";
import userApi from "../../api/stubUserApi";
import {incrementBusyCount, decrementBusyCount} from "../app/busyStatus";

// actions
export const GET = "zen/users/GET";


// reducer
export default function reducer(state = initialState.users, action) {
  switch (action.type) {
    case GET: {
      return action.payload.users;
    }

    default:
      return state;
  }
}

// action creators
export function getUsersResponse(users) {
  return {
    type: GET,
    payload: {
      users
    }
  };
}

export function getUsers() {
  return function(dispatch) {
    dispatch(incrementBusyCount());
    return userApi.getUsers()
      .then(user => {
        dispatch(decrementBusyCount())
        dispatch(getUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
