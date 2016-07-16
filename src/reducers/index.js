import {combineReducers} from 'redux';
import projects from '../components/project/projectReducer';
import users from '../components/user/userReducer';
import numberOfAjaxCallsInProgress from '../components/app/ajaxStatusReducer';

const rootReducer = combineReducers({
	projects,
	numberOfAjaxCallsInProgress,
	users
});

export default rootReducer;
