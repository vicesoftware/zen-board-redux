import {combineReducers} from "redux";
import projects from "../components/project/projects";
import users from "../components/user/users";
import busyCount from "../components/app/busyStatus";
import currentProject from "../components/currentProject/currentProject";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
	projects,
	busyCount,
	users,
  currentProject,
  routing: routerReducer
});

export default rootReducer;
