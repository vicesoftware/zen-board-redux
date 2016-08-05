import {dispatch, getState} from "../../store";
import users from "../users";
import projectList from "../projectList";


export function loadAddEditProjectsFromRoute(nextState) {
  var state = getState();

  if (state.users.length === 0) {
    dispatch(users.actions.getUsers());
  }

  if (state.projectList.length === 0) {
    dispatch(projectList.actions.getProjects({id: nextState.id}));
  }
}
