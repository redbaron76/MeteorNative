import { SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from '../constants/actionTypes';

const initialState = false;

export default function sideMenuReducer(state = initialState, action = {}) {
    switch (action.type) {

        case SIDE_MENU_OPEN:
            return action.data;

        case SIDE_MENU_CLOSE:
            return action.data;

        default:
            return state;
    }
}