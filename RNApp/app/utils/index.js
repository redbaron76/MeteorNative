import { errorLogin } from '../actions/authActions';

// Prints out button label or error message
export function errorMessage(error, defLabel) {
    if (error && error.msg) {
        return error.msg;
    }
    return defLabel;
}

// Prints out primary or danger color
export function errorColor(error, where) {
    if (error && error.color) {
        return error.color == where;
    }
    return where == 'primary';
}

export function resetError(meta, input, to = 100) {
    if (meta.active && input.value == '') {
        setTimeout(() => {
            meta.dispatch(errorLogin(undefined));
        }, to);
    }
}