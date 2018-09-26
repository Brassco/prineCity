import {
    REGISTER_CHANGE_NAME,
    REGISTER_CHANGE_PHONE,
    REGISTER_CHANGE_EMAIL,
    REGISTER_CHANGE_CODE,
    LOCATION_LIST_LOADING_SUCCESS
} from './types';
import {LIST} from '../urls';

export const getRestaurantsList = (token) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
console.log(tokenString);
        fetch(
            LIST,
            {
                method: 'GET',
                headers: {
                    // 'Host': 'https://pc.s1l3nt.xyz',
                    'Authorization': tokenString,
                },
            }
        )
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((responseJson) => {
            console.log(responseJson);
                // onLoginSuccess(dispatch, responseJson.data);
            })
            .catch( err => console.log(err))
    }
}