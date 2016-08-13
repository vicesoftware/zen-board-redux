import {combineReducers} from "redux";
import projectList from "../components/projectList";
import users from "../components/users";
import taskList from "../components/taskList";
import app from "../components/app";
import userProfile from "../components/userProfile";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
  [projectList.constants.NAME]: projectList.reducer,
  [app.constants.NAME]: app.reducer,
  [users.constants.NAME]: users.reducer,
  [taskList.constants.NAME]: taskList.reducer,
  [userProfile.constants.NAME]: userProfile.reducer,
  routing: routerReducer
});

export default rootReducer;
