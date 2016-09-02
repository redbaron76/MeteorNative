// Actions for user auth

import Meteor, { Tracker, Accounts } from 'react-native-meteor';
import { Actions } from 'react-native-router-flux';
import { autofill } from 'redux-form';

import {
    CONNECTION_STATUS,
    USER_LOGGING_IN,
    USER_DATA,
} from '../constants/actionTypes';

// Action - register by email
export function registerByEmail(formData) {
    return dispatch => {
        // console.log('registerByEmail data', formData);
        const {name, email, password} = formData;
        Accounts.createUser({
            name,
            email,
            password,

        }, (error) => {
            if (error) {
                console.log('createUser callback error', error);
            } else {
                // pre-populate email field in loginForm
                dispatch(autofill('loginForm', 'email', email));
                Actions.pop();
            }
        });
    }
}

// Action - login with Facebook
export function loginWithEmail(formData) {
    return dispatch => {
        const { email, password } = formData;
        Meteor.loginWithPassword(email, password, (error) => {
            console.log('Login error:', error);
        });
    }
}

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
            // console.log('dispach connection status', Meteor.status().connected);
            dispatch({
                type: CONNECTION_STATUS,
                data: Meteor.status().connected,
            });
        });

        Tracker.autorun(() => {
            // console.log('dispach logginIn', Meteor.loggingIn());
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
    return dispatch => {
        Meteor.logout(error => {
            if (error) {
                console.log('Error logout:', error);
            } else {
                console.log('Logged out!');
                // Dispatch new user status after logout
                /*dispatch({
                    type: USER_DATA,
                    data: Meteor.user(),
                });*/
            }
        });
    };
}