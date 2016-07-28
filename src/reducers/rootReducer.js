import {combineReducers} from "redux";
import projects from "./projectsReducer";
import users from "./usersReducer";
import busyCount from "./busyStatusReducer";
import project from "./projectReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
	projects,
	busyCount,
	users,
  project,
  routing: routerReducer
});

export default rootReducer;
