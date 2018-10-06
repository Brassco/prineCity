import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    MAKE_ORDER
} from '../Actions/types';

const INITIAL_STATE = {
    basket: [],
    basketCount: 0,
    restaurant: null,
    categories: [],
    error: false,
    loading: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_BASKET:
            let newBasket = state.basket;
            let cnt = state.basketCount;
            if (newBasket.length) {
                let isNewRow = true;
                for (var i = 0; i < newBasket.length; i++) {
                    let row = newBasket[i];
                    if (row.id == action.payload.id) {
                        row.counter = row.counter + 1;
                        isNewRow = false;
                        break;
                    }
                }
                if (isNewRow) {
                    console.log('increase count', cnt);
                    cnt = cnt+1;
                    newBasket.push({id: action.payload.id, counter: 1, product: action.payload})
                }
            } else {
                console.log('increase count', cnt);
                cnt = cnt+1;
                newBasket.push({id: action.payload.id, counter: 1, product: action.payload})
            }
console.log('ADD_TO_BASKET ', newBasket, cnt);
            return {
                ...state,
                error: false,
                loading: false,
                basket: newBasket,
                basketCount: cnt,
            };
        case REMOVE_FROM_BASKET:
            let copyBasket = state.basket.slice();
            let counter = state.countBasket;
            let sum = state.basketSum;
            let bonusSum = state.basketBonusSum;
            console.log('DELETE_FROM_BASKET', copyBasket);
            if (action.payload == null && action.isAll) {
                console.log('DELETE_FROM_BASKET ALL', counter, sum, bonusSum, copyBasket)
                return {
                    ...state,
                    basket: [],
                    countBasket: 0,
                    basketSum: 0,
                    basketBonusSum: 0,
                    isPayedSuccess: false
                };
            }
            if (copyBasket.length) {
                for (var i = 0; i < copyBasket.length; i++) {
                    let row = copyBasket[i];
                    if (row.id == action.payload.id) {
                        if (action.isAll) {
                            counter = 0;
                            sum = sum - (parseInt(action.payload.price) * row.counter)
                            bonusSum = bonusSum - (parseInt(action.payload.bonus_price) * row.counter)
                            copyBasket.splice(i, 1);
                        } else {
                            row.counter = row.counter - 1;
                            counter = counter - 1;
                            console.log('DELETE_FROM_BASKET', counter)
                            sum = sum - parseInt(action.payload.price);
                            bonusSum = bonusSum - parseInt(action.payload.bonus_price);
                            if (row.counter == 0) {
                                copyBasket.splice(i, 1);
                            }
                        }
                        break;
                    }
                }
                return {
                    ...state,
                    error: false,
                    loading: false,
                    restaurants: action.payload
                };
            }
        default: return state;
    }
}