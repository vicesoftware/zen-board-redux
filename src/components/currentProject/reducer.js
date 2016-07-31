// This is a duck: https://github.com/erikras/ducks-modular-redux
import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

// reducer
export default function reducer(state = initialState.project, action) {
  switch (action.type) {

    case types.GET:
      return action.payload.project;

    case types.SAVE: {
      const index = state.findIndex(project => project.id === action.payload.id);
      const notFound = -1;

      if (index === notFound) {
        return [...state, action.payload.project];
      } else {
        return [...state.slice(0, index - 1),
          action.payload.project,
          ...state.slice(index + 1)];
      }
    }

    default:
      return state;
  }
}

// action creators

