import initialState from "../../reducers/initialState";
import userApi from "../../api/stubUserApi";
import {beginAjaxCall} from "../app/ajaxStatus";

// actions
export const GET_RESPONSE = "zen/users/GET_RESPONSE";


// reducer
export default function reducer(state = initialState.users, action) {
  switch (action.type) {
    case GET_RESPONSE: {
      return action.payload.users;
    }

    default:
      return state;
  }
}

// action creators
export function getUsersResponse(users) {
  return {
    type: GET_RESPONSE,
    payload: {
      users
    }
  };
}

export function getUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getAllUsers()
      .then(user => {
        dispatch(getUsersResponse(user));
      })
      .catch(error => { throw(error); }); // real error handling coming soon :)
  };
}
