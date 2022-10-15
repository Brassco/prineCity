import {
  LOCATION_LIST_LOADING,
  LOCATION_LIST_LOADING_SUCCESS,
  RESTAURANTS_LIST_LOADING_SUCCESS,
} from '../../Actions/types';

const INITIAL_STATE = {
  locations: '',
  error: false,
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_LIST_LOADING:
      return {...state, error: false, loading: true};
    case LOCATION_LIST_LOADING_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        locations: action.payload,
      };
    default:
      return state;
  }
};
