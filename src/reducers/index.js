import {combineReducers} from 'redux';
import projects from '../components/project/projects';
import users from '../components/user/users';
import numberOfAjaxCallsInProgress from '../components/app/ajaxStatus';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	projects,
	numberOfAjaxCallsInProgress,
	users,
  routing: routerReducer
});

export default rootReducer;
