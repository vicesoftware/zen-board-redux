import {combineReducers} from "redux";
import projectList from "../components/projectList";
import users from "../components/users";
import busyCount from "../components/app/reducer";
import project from "../components/project";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
  [projectList.constants.NAME]: projectList.reducer,
  busyCount,
  [users.constants.NAME]: users.reducer,
  [project.constants.NAME]: project.reducer,
  routing: routerReducer
});

export default rootReducer;
