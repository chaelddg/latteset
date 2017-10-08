import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import menus from './menus';

const rootReducer = combineReducers({
	menus,
	router: routerReducer
});

export default rootReducer;
