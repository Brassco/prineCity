import {AsyncStorage} from 'react-native';

export const serverService = (url, method, headers) => {
    return new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method: method,
                headers: headers,
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