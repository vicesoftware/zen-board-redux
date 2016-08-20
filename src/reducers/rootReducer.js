import {combineReducers} from "redux";
import projectList from "../components/projectList";
import users from "../components/users";
import taskList from "../components/taskList";
import app from "../components/app";
import userProfile from "../components/userProfile";
import busySpinner from "../components/common/busySpinner";
import errors from "../components/common/errors";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  [projectList.constants.NAME]: projectList.reducer,
  [app.constants.NAME]: app.reducer,
  [busySpinner.constants.NAME]: busySpinner.reducer,
  [errors.constants.NAME]: errors.reducer,
  [users.constants.NAME]: users.reducer,
  [taskList.constants.NAME]: taskList.reducer,
  [userProfile.constants.NAME]: userProfile.reducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
