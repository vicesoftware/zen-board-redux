import {combineReducers} from 'redux';
import projects from '../components/project/projectReducer';

const rootReducer = combineReducers({
	projects
});

export default rootReducer;