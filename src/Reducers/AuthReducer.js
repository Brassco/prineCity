import {
    AUTH_CHANGE_PHONE,
    AUTH_CHANGE_PASS,
    AUTH_SIGN_IN_START,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_FAIL
} from '../Actions/types';

const INITIAL_STATE = {
    phone: '380660514384',
    password: '378183',
    user: null,
    token: null,
    error: false,
    loading: false,
    loginError: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_CHANGE_PHONE:
            return {...state,
                loginError: false,
                phone: action.payload};
        case AUTH_CHANGE_PASS:
            return {...state,
                loginError: false,
                password: action.payload};
        case AUTH_SIGN_IN_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case AUTH_SIGN_IN_FAIL:
            return {...state,
                loading: false,
                // password: '',
                error: action.payload};
        case AUTH_SIGN_IN_SUCCESS:
            return {...state,
                error: false,
                loading: false,
                user: action.payload.client,
                token: action.payload.auth_token
            };
        default: return state;
    }
}