import React, {Component} from 'react';

// import {connect} from 'react-redux';
// import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/Auth/Login';
import RegisterScreen from './screens/Auth/Register';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const {Navigator, Screen} = Stack;

class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Register" component={RegisterScreen} />
        </Navigator>
      </NavigationContainer>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     navigation: state.navigation,
//   };
// };

export default Router;
