import { ActionConst } from 'react-native-router-flux';
import { ERROR_LOGIN } from '../constants/actionTypes';
import { actionTypes } from 'redux-form';

const initialState = {
    scene: {},
};

export default function routeReducer(state = initialState, action = {}) {

    // get action data
    const { scene, type, data } = action;

    console.log('type', type);

    switch (type) {
        // focus action is dispatched when a new screen comes into focus
        // case ActionConst.FOCUS:
        //     return {
        //         ...state,
        //         scene: action.scene,
        //     };

        case actionTypes.REGISTER_FIELD:
            return Object.assign(state, {
                error: {
                    msg: undefined,
                    color: 'primary'
                },
            });

        case ERROR_LOGIN:
            // state remains immutable
            return Object.assign(state, {
                error: data,
            });

        default:
            return state;
    }
}