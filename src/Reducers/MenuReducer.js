import {
    RESTAURANTS_MENU_LOADED,
    RESTAURANTS_MENU_LOADING
} from '../Actions/types';

const INITIAL_STATE = {
    menu: [],
    error: false,
    loading: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RESTAURANTS_MENU_LOADING:
            return {...state,
                error: false,
                loading: true,
            };
        case RESTAURANTS_MENU_LOADED:
console.log('RESTAURANTS_MENU_LOADED', action.payload);
            return {...state,
                error: false,
                loading: false,
                restaurants: action.payload
            };
        default: return state;
    }
}