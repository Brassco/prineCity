import {
    RESTAURANTS_LIST_LOADING,
    LOCATION_LIST_LOADING,
    RESTAURANTS_LIST_LOADING_SUCCESS,
    LOCATION_LIST_LOADING_SUCCESS,
    RESTAURANTS_INFO_LOADING,
    RESTAURANTS_INFO_LOADING_SUCCESS,
    RESTAURANTS_MENU_LOADING,
    RESTAURANTS_MENU_LOADED,
    AUTH_LOGOUT
} from './types';
import {LOCATION, LIST, CATEGORIES, DISHES} from '../urls';
import {serverGET} from './serverService';

export const getLocation = (token, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
        dispatch({
            type: LOCATION_LIST_LOADING,
        })
        console.log('get location', tokenString)
        let res = serverGET(
            LOCATION,
            'GET',
            { 'Authorization': tokenString}
        )
        res.then(
            responseJson => {
                console.log('getLocation', responseJson);
                onLocationLoaded(dispatch, responseJson.data);
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
        // fetch(
        //     LOCATION,
        //     {
        //         method: 'GET',
        //         headers: {
        //             // 'Host': 'https://pc.s1l3nt.xyz',
        //             'Authorization': tokenString,
        //         },
        //     }
        // )
        //     .then((response) => {
        //         console.log(response);
        //         return response.json()
        //     })
        //     .then((responseJson) => {
        //         console.log('getLocation', responseJson);
        //         onLocationLoaded(dispatch, responseJson.data);
        //     })
        //     .catch( err => console.log(err))
    }
}

const onLocationLoaded = (dispatch, data) => {
    dispatch({
        type: LOCATION_LIST_LOADING_SUCCESS,
        payload: data
    })
}

export const getRestaurantsList = (token, district_id, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
console.log('getRestaurantsList', LIST+'&district_id='+district_id, tokenString);
        dispatch({
            type: RESTAURANTS_LIST_LOADING,
        })
        let res = serverGET(
            LIST+'?district_id='+district_id,
            'GET',
            { 'Authorization': tokenString}
        )
        res.then(
            responseJson => {
                console.log('getLocation', responseJson);
                onRestaurantsLoaded(dispatch, responseJson.data);
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
        // fetch(
        //     LIST+'?district_id='+district_id,
        //     {
        //         method: 'GET',
        //         headers: {
        //             // 'Host': 'https://pc.s1l3nt.xyz',
        //             'Authorization': tokenString,
        //         },
        //     }
        // )
        //     .then((response) => {
        //         console.log(response);
        //         return response.json()
        //     })
        //     .then((responseJson) => {
        //         console.log('getRestaurantsList', responseJson);
        //         onRestaurantsLoaded(dispatch, responseJson.data);
        //     })
        //     .catch( err => console.log(err))
    }
}

const onRestaurantsLoaded = (dispatch, data) => {
    dispatch({
        type: RESTAURANTS_LIST_LOADING_SUCCESS,
        payload: data
    })
}

export const getRestaurantsInfo = (token, restaurant_id, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
console.log('getRestaurants Info', LIST+'/'+restaurant_id, tokenString);
        dispatch({
            type: RESTAURANTS_INFO_LOADING,
        })
        let res = serverGET(
            LIST+'/'+restaurant_id,
            'GET',
            { 'Authorization': tokenString}
        )
        res.then(
            responseJson => {
                console.log('restaurant info', responseJson);
                fetch(
                    CATEGORIES+'?restaurant_id='+restaurant_id,
                    {
                        method: 'GET',
                        headers: {
                            // 'Host': 'https://pc.s1l3nt.xyz',
                            'Authorization': tokenString,
                        },
                    }
                )
                    .then((responseCategories) => {
                        return responseCategories.json()
                    })
                    .then((categories) => {
                        onInfoLoaded(dispatch, responseJson.data, categories.data);
                    })
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
//         fetch(
//             LIST+'/'+restaurant_id,
//             {
//                 method: 'GET',
//                 headers: {
//                     // 'Host': 'https://pc.s1l3nt.xyz',
//                     'Authorization': tokenString,
//                 },
//             }
//         )
//             .then((response) => {
//                 console.log(response);
//                 return response.json()
//             })
//             .then((responseJson) => {
// console.log('restaurant info', responseJson);
//                 fetch(
//                     CATEGORIES+'?restaurant_id='+restaurant_id,
//                     {
//                         method: 'GET',
//                         headers: {
//                             // 'Host': 'https://pc.s1l3nt.xyz',
//                             'Authorization': tokenString,
//                         },
//                     }
//                 )
//                     .then((responseCategories) => {
//                         return responseCategories.json()
//                     })
//                     .then((categories) => {
//                         onInfoLoaded(dispatch, responseJson.data, categories.data);
//                     })
//                 // onInfoLoaded(dispatch, responseJson.data);
//             })
//             .catch( err => console.log(err))
    }
}

const onInfoLoaded = (dispatch, info, categories) => {
    let data = {
        info: info,
        categories: categories
    }
    console.log('onInfoLoaded', data);
    dispatch({
        type: RESTAURANTS_INFO_LOADING_SUCCESS,
        payload: data
    })
}

export const getRestaurantsMenu = (token, category_id, errorCallback) => {
    return (dispatch) => {
        let tokenString = `Bearer ${token}`;
        console.log('getRestaurants Menu', DISHES+'?category_id='+category_id, tokenString);
        dispatch({
            type: RESTAURANTS_MENU_LOADING,
        })
        let res = serverGET(
            DISHES+'?category_id='+category_id,
            'GET',
            { 'Authorization': tokenString}
        )
        res.then(
            responseJson => {
                console.log('get dishes', responseJson);
                onMenuLoaded(dispatch, responseJson.data);
            },
            error => {
                console.log('onError');
                dispatch({
                    type: AUTH_LOGOUT,
                })
                errorCallback();
            }
        );
        // fetch(
        //     DISHES+'?category_id='+category_id,
        //     {
        //         method: 'GET',
        //         headers: {
        //             // 'Host': 'https://pc.s1l3nt.xyz',
        //             'Authorization': tokenString,
        //         },
        //     }
        // )
        //     .then((response) => {
        //         console.log(response);
        //         return response.json()
        //     })
        //     .then((responseJson) => {
        //         console.log('restaurant menu', responseJson);
        //         onMenuLoaded(dispatch, responseJson.data);
        //     })
        //     .catch( err => console.log(err))
    }
}

const onMenuLoaded = (dispatch, data) => {
console.log('menu loaded', data);
    dispatch({
        type: RESTAURANTS_MENU_LOADED,
        payload: data.dishes
    })
}