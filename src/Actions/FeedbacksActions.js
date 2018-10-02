import {
    FEEDBACKS_LIST_LOADING,
    FEEDBACKS_LIST_LOADING_SUCCESS,
    FEEDBACK_CHANGE_MESSAGE,
    SEND_FEEDBACK_SUCCESS,
    AUTH_LOGOUT,
    SEND_FEEDBACK
} from './types';
import {LIST, CATEGORIES, DISHES} from '../urls';
import {serverGET, serverPOST} from './serverService';

export const getFeedbacks = (token, restaurant_id, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
        dispatch({
            type: FEEDBACKS_LIST_LOADING,
        })
        console.log('get location', tokenString)
        let res = serverGET(
            LIST+'/'+restaurant_id+'/reviews',
            'GET',
            { 'Authorization': tokenString}
        )
        res.then(
            responseJson => {
                console.log('get Feedbacks', responseJson);
                onFeedbacksLoaded(dispatch, responseJson.data);
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
    }
}

const onFeedbacksLoaded = (dispatch, data) => {
    dispatch({
        type: FEEDBACKS_LIST_LOADING_SUCCESS,
        payload: data
    })
}

export const onChangeMessage = (text) => {
    return {
        type: FEEDBACK_CHANGE_MESSAGE,
        payload: text
    }
}

export const onSendFeedback = (token, restaurant_id, text, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
console.log('onSendFeedback ', LIST+'/'+restaurant_id, tokenString);
        dispatch({
            type: SEND_FEEDBACK,
        })
        let res = serverPOST(
            LIST+'/'+restaurant_id+'/reviews',
            'POST',
            {
                'Authorization': tokenString,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            {'review': text}
        )
        res.then(
            responseJson => {
                console.log('send feedback', responseJson);
                onFeedbackSended(dispatch, responseJson.data);
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
    }
}

const onFeedbackSended = (dispatch, response) => {
    console.log('SEND_FEEDBACK_SUCCESS', response);
    dispatch({
        type: SEND_FEEDBACK_SUCCESS,
        payload: response
    })
}
