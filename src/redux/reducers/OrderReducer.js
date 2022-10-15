import {
  ORDER_CHANGE_ADDRESS,
  ORDER_CHANGE_COMENT,
  ORDER_CHANGE_DATE,
  ORDER_CHANGE_ENTRANCE,
  ORDER_CHANGE_FLAT,
  ORDER_CHANGE_FLOOR,
  ORDER_CHANGE_TIME,
} from '../../Actions/types';

const INITIAL_STATE = {
  address: '',
  date: '',
  time: '',
  coment: '',
  entrance: '',
  floor: 1,
  flat: 1,
  error: false,
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ORDER_CHANGE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ORDER_CHANGE_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ORDER_CHANGE_FLOOR:
      return {
        ...state,
        floor: action.payload,
      };
    case ORDER_CHANGE_FLAT:
      return {
        ...state,
        flat: action.payload,
      };
    case ORDER_CHANGE_COMENT:
      return {
        ...state,
        coment: action.payload,
      };
    case ORDER_CHANGE_ENTRANCE:
      return {
        ...state,
        entrance: action.payload,
      };
    default:
      return {...state};
  }
};
