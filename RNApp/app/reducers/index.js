import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import sideMenuReducer from './sideMenuReducer';
import validateReducer from './validateReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    authState: authReducer,
    routeState: routeReducer,
    sideMenuState: sideMenuReducer,
    validateState: validateReducer,
    form: formReducer,
});