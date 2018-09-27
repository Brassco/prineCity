import {
    RESTAURANTS_LIST_LOADING,
    RESTAURANTS_LIST_LOADING_SUCCESS,
    RESTAURANTS_INFO_LOADING,
    RESTAURANTS_INFO_LOADING_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = {
    restaurants: '',
    restaurant: '',
    error: false,
    loading: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RESTAURANTS_LIST_LOADING:
            return {...state,
                error: false,
                loading: true,
            };
        case RESTAURANTS_LIST_LOADING_SUCCESS:
console.log('RESTAURANTS_LIST_LOADING_SUCCESS', action.payload);
            return {...state,
                error: false,
                loading: false,
                restaurants: action.payload
            };
        case RESTAURANTS_INFO_LOADING:
            return {...state,
                error: false,
                loading: true,
            };
        case RESTAURANTS_INFO_LOADING_SUCCESS:
            console.log('RESTAURANTS_INFO_LOADING_SUCCESS', action.payload);
            return {...state,
                error: false,
                loading: false,
                restaurant: action.payload
            };
        default: return state;
    }
}