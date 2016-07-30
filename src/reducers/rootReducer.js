import {combineReducers} from "redux";
import projects from "../components/projects";
import users from "../components/users";
import busyCount from "../components/app/reducer";
import project from "../components/project";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
  [projects.constants.NAME]: projects.reducer,
  busyCount,
  [users.constants.NAME]: users.reducer,
  [project.constants.NAME]: project.reducer,
  routing: routerReducer
});

export default rootReducer;
