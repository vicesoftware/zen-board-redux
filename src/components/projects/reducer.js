import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.projects, action) {
  switch (action.type) {
    case types.CREATE:
      return [...state,
        Object.assign({}, action.payload.project)
      ];

    case types.GET:
      return action.payload.projects;

    case types.DELETE:
      return [...state.filter(project => project.id != action.payload.projectId)];

    default:
      return state;
  }
}