import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';

export default combineReducers({
    authState: authReducer,
    routeState: routeReducer
});