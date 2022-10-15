import React, {Component} from 'react';

import {View, Text} from 'react-native';

// import {connect} from 'react-redux';
// import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

// export const Navigator = new StackNavigator(
//   {
//     Login: {screen: Login},
//   },
//   {
//     initialRouteName: 'Login',
//   },
// );

class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Text>Hello</Text>
        </View>
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
