import {
    REGISTER_CHANGE_NAME,
    REGISTER_CHANGE_PHONE,
    REGISTER_CHANGE_EMAIL,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../Actions/types';

const INITIAL_STATE = {
    phone: '',
    name: '',
    sms: '',
    email: '',
    error: false,
    loading: false,
    user: null,
    loginError: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_CHANGE_NAME:
            return {...state,
                loginError: false,
                name: action.payload};
        case REGISTER_CHANGE_PHONE:
            return {...state,
                loginError: false,
                phone: action.payload};
        case REGISTER_CHANGE_EMAIL:
            return {...state,
                loginError: false,
                email: action.payload};
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false
            }
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state;
    }
}