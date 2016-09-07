import {
    ERROR_LOGIN
} from '../constants/actionTypes';

const initialState = {
    // no default errors
};

export default function validateReducer(state = initialState, action = {}) {

    // get action data
    const { data, type } = action;

    // switch by type
    switch (type) {

        case ERROR_LOGIN:
            // state remains immutable
            return Object.assign(state, {
                error: data,
            });

        default:
            return state;
    }
}