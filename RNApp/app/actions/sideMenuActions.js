// Actions for toggleing menu

import { SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from '../constants/actionTypes';

export function openSideMenu() {
    return dispatch => {
        console.log('dispatc!');
        dispatch({
            type: SIDE_MENU_OPEN,
            data: true
        });
    }
}

export function closeSideMenu() {
    return dispatch => {
        dispatch({
            type: SIDE_MENU_CLOSE,
            data: false
        });
    }
}
