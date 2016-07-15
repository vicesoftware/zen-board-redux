import {combineReducers} from 'redux';
import projects from '../components/project/projectReducer';
import numberOfAjaxCallsInProgress from '../components/app/ajaxStatusReducer';

const rootReducer = combineReducers({
	projects,
	numberOfAjaxCallsInProgress
});

export default rootReducer;