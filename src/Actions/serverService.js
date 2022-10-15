import {AsyncStorage} from 'react-native';

export const serverGET = (url, method, headers) => {
    return new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method: method,
                headers: headers,
            }
        )
            .then((response) => {
console.log('response ', url, method, response);
                if (response.status != 200) {
                    AsyncStorage.clear(reject())
                } else {
                    resolve(response.json());
                }
            })
            .catch( err => console.log(err))
    })
}

export const serverPOST = (url, method, headers, data) => {
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
console.log('serverPOST', formBody);
    return new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method: method,
                headers: headers,
                body: formBody
            }
        )
            .then((response) => {
                if (response.status == 401) {
                    AsyncStorage.clear(reject())
                } else {
                    resolve(response.json());
                }
            })
            .catch( err => console.log(err))
    })
}