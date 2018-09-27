import {
    RESTAURANTS_LIST_LOADING,
    LOCATION_LIST_LOADING,
    RESTAURANTS_LIST_LOADING_SUCCESS,
    LOCATION_LIST_LOADING_SUCCESS,
    RESTAURANTS_INFO_LOADING,
    RESTAURANTS_INFO_LOADING_SUCCESS
} from './types';
import {LOCATION, LIST} from '../urls';

export const getLocation = (token) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
// console.log('getRestaurantsList', tokenString);
        dispatch({
            type: LOCATION_LIST_LOADING,
        })
        fetch(
            LOCATION,
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
                console.log('getLocation', responseJson);
                onLocationLoaded(dispatch, responseJson.data);
            })
            .catch( err => console.log(err))
    }
}

const onLocationLoaded = (dispatch, data) => {
    dispatch({
        type: LOCATION_LIST_LOADING_SUCCESS,
        payload: data
    })
}

export const getRestaurantsList = (token, district_id) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
console.log('getRestaurantsList', LIST+'&district_id='+district_id, tokenString);
        dispatch({
            type: RESTAURANTS_LIST_LOADING,
        })
        fetch(
            LIST+'?district_id='+district_id,
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
                console.log('getRestaurantsList', responseJson);
                onRestaurantsLoaded(dispatch, responseJson.data);
            })
            .catch( err => console.log(err))
    }
}

const onRestaurantsLoaded = (dispatch, data) => {
    dispatch({
        type: RESTAURANTS_LIST_LOADING_SUCCESS,
        payload: data
    })
}

export const getRestaurantsInfo = (token, restaurant_id) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
        console.log('getRestaurants Info', LIST+'/'+restaurant_id, tokenString);
        dispatch({
            type: RESTAURANTS_INFO_LOADING,
        })
        fetch(
            LIST+'/'+restaurant_id,
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
                console.log('restaurant info', responseJson);
                onInfoLoaded(dispatch, responseJson.data);
            })
            .catch( err => console.log(err))
    }
}

const onInfoLoaded = (dispatch, data) => {
    dispatch({
        type: RESTAURANTS_INFO_LOADING_SUCCESS,
        payload: data
    })
}