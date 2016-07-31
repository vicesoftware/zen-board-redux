import initialState from "../../reducers/initialState";
import _ from "lodash";
import * as types from "./actionTypes";
import addEditProject from "../addEditProject";

export default function reducer(state = initialState.projectList, action) {
  switch (action.type) {
    case types.CREATE:
      return [...state,
        Object.assign({}, action.payload.project)
      ];

    case types.GET:
      return action.payload.projectList;

    case types.DELETE:
      return [...state.filter(project => project.id != action.payload.projectId)];

    case types.SAVE: {
      const notFound = -1;
      const index
        = _.findIndex(
          state,
          project => project.id === action.payload.savedProject.id
        );

      if (index === notFound) {
        return [...state, action.payload.savedProject];
      }

      return [
        ...state.slice(0, index), 
        action.payload.savedProject, 
        ...state.slice(index + 1)];
    }

    default:
      return state;
  }
}
