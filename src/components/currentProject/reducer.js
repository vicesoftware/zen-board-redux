import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.currentProject, action) {
  switch (action.type) {

    case types.OPEN_CURRENT:
      return action.payload.currentProject;

    case types.SAVE: {
      return action.payload.savedProject;
    }

    case types.CLOSE_PROJECT: {
      return initialState.currentProject;
    }

    default:
      return state;
  }
}

