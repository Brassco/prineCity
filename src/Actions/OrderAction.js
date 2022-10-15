import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from './types';
// import {SIGN_IN} from '../urls';


export const onAddToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

export const onDeleteFromBasket = (item) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: item
    }
}

export const onMakeOrder = (data, successCallback) => {
    return (dispatch) => {

    }
}

export const onChangeField = (data, field) => {
    return {
        type: `ORDER_CHANGE_${field}`,
        payload: data
    }
}