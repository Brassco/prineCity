import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from './types';
// import {SIGN_IN} from '../urls';


export const onAddToBasket = (item) => {
console.log('ADD_TO_BASKET', item);
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

export const onDeleteFromBasket = (item) => {
console.log('REMOVE_FROM_BASKET', item);
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