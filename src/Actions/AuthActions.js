import {
    AUTH_CHANGE_PHONE,
    AUTH_CHANGE_PASS,
    AUTH_SIGN_IN_START,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_FAIL
} from './types';
import {HEADER_HOST, SIGN_IN} from '../urls';
import {AsyncStorage} from 'react-native';

export const onChangePhone = (phone) => {
    return {
        type: AUTH_CHANGE_PHONE,
        payload: phone
    }
}

export const onChangePass = (pass) => {
    return {
        type: AUTH_CHANGE_PASS,
        payload: pass
    }
}

export const onLogin = (data, successCallback) => {
    return (dispatch) => {
        dispatch({
            type: AUTH_SIGN_IN_START,
        })

        if (data.phone_number.length < 1) {
            onLoginFail(dispatch, 'Укажите номер телефона')
        } else if (data.password.length < 1) {
            onLoginFail(dispatch, 'Укажите пароль')
        } else {
            var formBody = [];
            for (var property in data) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(data[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(
                SIGN_IN,
                {
                    method: 'POST',
                    headers: {
                        // 'Host': 'https://pc.s1l3nt.xyz',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    body: formBody
                }
            )
                .then((response) => {
                    if (response.status == 200) {
                        return response.json()
                    }
                })
                .then((responseJson) => {
                    if (responseJson) {
                        onLoginSuccess(dispatch, responseJson.data, successCallback);
                    } else {
                        onLoginFail(dispatch, 'Ошибка авторизации')
                    }
                })
                .catch( err => console.log(err))
        }
    }
}

const onLoginSuccess = (dispatch, data, successCallback) => {
    dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: data
    })
    AsyncStorage.setItem('@user', JSON.stringify(data)).then(
        successCallback()
    )
}

const onLoginFail = (dispatch, errMessage) => {
    dispatch({
        type: AUTH_SIGN_IN_FAIL,
        payload: errMessage
    })
}

export const setUserFromStore = (data) => {
    return ({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: JSON.parse(data)
    })
}
