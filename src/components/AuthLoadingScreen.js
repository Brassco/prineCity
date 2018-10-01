import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';
import {connect} from 'react-redux';
import {setUserFromStore} from '../Actions/AuthActions';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('@user');
        console.log(userToken);
        if (userToken) {
            this.props.setUserFromStore(userToken);
        }
        this.props.navigation.navigate(userToken ? 'Main' : 'Login');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%',
            }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {setUserFromStore})(AuthLoadingScreen);