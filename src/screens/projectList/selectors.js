import { createSelector } from "reselect";
import { NAME } from "./constants";

// GetById
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

// GetByUserId
export const getByUserId = createSelector(
  [getAll, getUserId],
  getByUserIdQuery
);

function getUserId(state, userId) {
  return userId;
}

function getByUserIdQuery(projects, userIdToGet) {
  return projects.filter(project => project.createdBy === userIdToGet);
}
