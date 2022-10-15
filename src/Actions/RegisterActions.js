import {
  REGISTER_CHANGE_NAME,
  REGISTER_CHANGE_PHONE,
  REGISTER_CHANGE_EMAIL,
  REGISTER_CHANGE_CODE,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';
import {SIGN_UP, HEADER_HOST} from '../urls';
// import axios from 'axios';

export const onChangeName = name => {
  return {
    type: REGISTER_CHANGE_NAME,
    payload: name,
  };
};

export const onChangePhone = phone => {
  return {
    type: REGISTER_CHANGE_PHONE,
    payload: phone,
  };
};

export const onChangeEmail = email => {
  return {
    type: REGISTER_CHANGE_EMAIL,
    payload: email,
  };
};

export const onChangeCode = code => {
  return {
    type: REGISTER_CHANGE_CODE,
    payload: code,
  };
};

export const onRegister = data => {
  return dispatch => {
    if (data.name.length < 1) {
      onError(dispatch, 'Укажите имя');
      return;
    }
    if (data.phone_number.length < 1) {
      onError(dispatch, 'Укажите номер телефона');
      return;
    }
    if (data.email.length < 1) {
      onError(dispatch, 'Укажите email');
      return;
    }
    if (data.name.length && data.phone_number.length && data.email.length) {
      var formBody = [];
      for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      fetch(SIGN_UP, {
        method: 'POST',
        headers: {
          // 'Host': 'https://pc.s1l3nt.xyz',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: formBody,
      })
        .then(response => {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(responseJson => {
          if (responseJson) {
            onRegisterSuccess(dispatch, responseJson.data);
          } else {
            onError(dispatch, 'Ошибка');
          }
        })
        .catch(err => console.log(err));
    }
  };
};

const onRegisterSuccess = (dispatch, data) => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data,
  });
  // successCallback();
};

const onError = (dispatch, errMessage) => {
  dispatch({
    type: REGISTER_ERROR,
    payload: errMessage,
  });
};
