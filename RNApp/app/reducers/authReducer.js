import { USER_DATA } from '../constants/actionTypes';

const initialState = {
    user: undefined
};

export default function authReducer(state = initialState, action = {}) {

    // get action data
    const { data, type } = action;

    // switch by type
    switch (type) {

        case USER_DATA:
            // return new object appended to current state
            return Object.assign(state, {
                user: data,
            });

        default:
            return state;
    }
}