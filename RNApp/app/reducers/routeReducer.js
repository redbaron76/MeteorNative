import { ActionConst } from 'react-native-router-flux';
import { actionTypes } from 'redux-form';
import {
    ERROR_LOGIN,
    LOADING
} from '../constants/actionTypes';

const initialState = {
    scene: {},
};

export default function routeReducer(state = initialState, action = {}) {

    // get action data
    const { scene, type, data } = action;

    switch (type) {
        // focus action is dispatched when a new screen comes into focus
        // case ActionConst.FOCUS:
        //     return {
        //         ...state,
        //         scene: action.scene,
        //     };

        case actionTypes.REGISTER_FIELD:
            return Object.assign(state, {
                error: undefined
            });

        case ERROR_LOGIN:
            // state remains immutable
            return Object.assign(state, {
                error: data,
            });

        case LOADING:
            return Object.assign(state, {
                loading: data,
            });

        default:
            return state;
    }
}