import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import sideMenuReducer from './sideMenuReducer';

export default combineReducers({
    authState: authReducer,
    routeState: routeReducer,
    sideMenuState: sideMenuReducer
});