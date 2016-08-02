import {createSelector} from "reselect";
import {NAME} from "./constants";
import _ from "lodash";

export const getById = createSelector(
	[getAll, getId],
	getByIdQuery
);

function getAll(state) {
	return state[NAME];
}

function getId(state, id) {
	return id;
}

function getByIdQuery(tasks, idToGet) {
	return tasks.find(task => task.id === idToGet);
}

export const getGroupedByStatus = createSelector(
  [getAll],
  groupByStatus
);

function groupByStatus(tasks) {
  return _.groupBy(tasks, task => task.state);
}
