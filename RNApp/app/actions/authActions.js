// Actions for user auth

import { USER_LOGGING_IN, USER_DATA } from '../constants/actionTypes';
import Meteor, { Tracker } from 'react-native-meteor';

// Action - login with Facebook
export function loginWithFacebook() {
    // use thunk - return a function (action creator)
    return () => {
        // Meteor method to login with Facebook
        // ...
    }
}

// Action - load the Meteor User
export function loadUser() {
    // use thunk - no () because only one argument (dispatch, getState)
    return dispatch => {
        // Tracker.autorun calls to dispatch reactive datasources
        Tracker.autorun(() => {
            dispatch({
                type: USER_LOGGING_IN,
                data: Meteor.loggingIn(),
            });
        });

        Tracker.autorun(() => {
            dispatch({
                type: USER_DATA,
                data: Meteor.user(),
            });
        });
    }
}

// Action - logout user from Meteor app
export function logout() {
    return () => {
        Meteor.logout(err => {
            if (err) {
                alert('Error while login with google');
            }
        });
    };
}