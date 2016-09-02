import {
    CONNECTION_STATUS,
    USER_LOGGING_IN,
    USER_DATA,
} from '../constants/actionTypes';

const initialState = {
    user: null,
    connected: false,
    loggingIn: false,
};

export default function authReducer(state = initialState, action = {}) {

    // get action data
    const { data, type } = action;

    // switch by type
    switch (type) {

        case CONNECTION_STATUS:
            // state remains immutable
            return Object.assign(state, {
                connected: data,
            });

        case USER_LOGGING_IN:
            // state remains immutable
            return Object.assign(state, {
                loggingIn: data,
            });

        case USER_DATA:
            // return new object appended to current state
            return Object.assign(state, {
                user: data,
            });

        default:
            return state;
    }
}