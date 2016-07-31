import {combineReducers} from "redux";
import projectList from "../components/projectList";
import users from "../components/users";
import busyCount from "../components/app/reducer";
import currentProject from "../components/currentProject";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
  [projectList.constants.NAME]: projectList.reducer,
  busyCount,
  [users.constants.NAME]: users.reducer,
  [currentProject.constants.NAME]: currentProject.reducer,
  routing: routerReducer
});

export default rootReducer;
