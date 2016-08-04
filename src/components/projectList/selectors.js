import { createSelector } from "reselect";
import { NAME } from "./constants";

export const getById = createSelector(
  [getAll, getId],
  getByIdQuery
);

function getAll (state) {
  return state[NAME];
}

function getId(state, id) {
  return id;
}

function getByIdQuery(projects, idToGet) {
  return projects.find(project => project.id === idToGet);
}
