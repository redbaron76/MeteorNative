// Actions for user auth

import Meteor, { Accounts, Trackr } from 'react-native-meteor';
import { Actions, ActionConst } from 'react-native-router-flux';
import { autofill } from 'redux-form';

import {
    LOADING,
    USER_DATA,
    ERROR_LOGIN,
} from '../constants/actionTypes';


export const errorLogin = (msg) => {
    return {
        type: ERROR_LOGIN,
        data: msg
    };
};

export const loading = (msg = null) => {
    return {
        type: LOADING,
        data: (!!msg) ? {
            message: msg
        } : undefined
    }
};

export const userData = (obj = null) => {
    return {
        type: USER_DATA,
        data: obj,
    };
};

// Action - register by email
export function registerByEmail(formData) {
    return dispatch => {
        const {username, email, password, checkPassword} = formData;

        switch (true) {
            case (!username || !email || !password || !checkPassword):
                dispatch(errorLogin('Fill all requested fields!'));
                return;
            case (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)):
                dispatch(errorLogin('E-mail address not valid!'));
                return;
            case (password.length < 8):
                dispatch(errorLogin('Password must be 8 chars long at least!'));
                return;
            case(password !== checkPassword):
                dispatch(errorLogin('Check password confirmation!'));
                return;
            default:
                dispatch(loading('Creating account...'));
                Accounts.createUser({
                    username,
                    email,
                    password,
                }, (error) => {
                    if (error) {
                        console.log(error);
                        dispatch(errorLogin(error.reason));
                    } else {
                        // pre-populate email field in loginForm
                        dispatch(autofill('loginForm', 'email', email));
                        dispatch(loading());
                        Actions.pop();
                    }
                });
        }
    }
}

// Action - login with Email
export function loginWithEmail(formData) {
    return dispatch => {
        const { email, password } = formData;
        if (email && password) {
            dispatch(loading('Logging in...'));
            Meteor.loginWithPassword(email, password, (error) => {
                if (error) {
                    dispatch(loading());
                    dispatch(errorLogin(error.reason));
                } else {
                    dispatch(loading());
                    dispatch(userData(Meteor.user()));
                    Actions.home({type: ActionConst.REPLACE});
                }
            });
        } else {
            dispatch(errorLogin('Fill with requested credentials!'));
        }
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

// Action - logout user from Meteor app
export function logout() {
    return dispatch => {
        dispatch(loading('Logging out...'));
        Meteor.logout(error => {
            if (error) {
                console.log('Error logout:', error);
            } else {
                // Dispatch new user status after logout
                dispatch(userData());
                dispatch(loading());
            }
        });
    };
}