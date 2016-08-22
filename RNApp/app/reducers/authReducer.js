import { USER_LOGGING_IN, USER_DATA } from '../actions/authActions';

const initialState = {
    user: null,
    loggingIn: false,
};

export default function authReducer(state = initialState, action = {}) {
    // get action data
    const { data, type } = action;
    // switch by type
    switch (type) {
        case USER_DATA:
            // return new object appended to current state
            return Object.assign(...state, {
                user: data,
            });
        case USER_LOGGING_IN:
            // state remains immutable
            return Object.assign(...state, {
                loggingIn: data,
            });
        default:
            return state;
    }
}