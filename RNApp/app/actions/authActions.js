// Actions for user auth

import Meteor, { Tracker } from 'react-native-meteor';
import {
    CONNECTION_STATUS,
    USER_LOGGING_IN,
    USER_DATA,
} from '../constants/actionTypes';

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
            console.log('dispach connection status', Meteor.status().connected);
            dispatch({
                type: CONNECTION_STATUS,
                data: Meteor.status().connected,
            });
        });

        Tracker.autorun(() => {
            console.log('dispach logginIn', Meteor.loggingIn());
            dispatch({
                type: USER_LOGGING_IN,
                data: Meteor.loggingIn(),
            });
        });

        Tracker.autorun(() => {
            console.log('dispach user', Meteor.user());
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