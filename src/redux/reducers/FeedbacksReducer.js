import {
  FEEDBACKS_LIST_LOADING,
  FEEDBACKS_LIST_LOADING_SUCCESS,
  FEEDBACK_CHANGE_MESSAGE,
} from '../../Actions/types';

const INITIAL_STATE = {
  feedbacks: [],
  message: null,
  error: false,
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDBACKS_LIST_LOADING:
      return {...state, error: false, loading: true};
    case FEEDBACKS_LIST_LOADING_SUCCESS:
      console.log('FEEDBACKS_LIST_LOADING_SUCCESS', action.payload);
      return {
        ...state,
        error: false,
        loading: false,
        feedbacks: action.payload,
      };
    case FEEDBACK_CHANGE_MESSAGE:
      console.log('FEEDBACK_CHANGE_MESSAGE', action.payload);
      return {...state, error: false, loading: false, message: action.payload};
    default:
      return state;
  }
};
