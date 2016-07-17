import {combineReducers} from 'redux';
import projects from '../components/project/projectReducer';
import users from '../components/user/userReducer';
import numberOfAjaxCallsInProgress from '../components/app/ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	projects,
	numberOfAjaxCallsInProgress,
	users,
  routing: routerReducer
});

export default rootReducer;
