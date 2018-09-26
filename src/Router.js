import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

export const Navigator = new StackNavigator({
    Login: { screen: Login },
},{
    initialRouteName: 'Login',
})

class Router extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
      })}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    }
}

export default connect(mapStateToProps)(Router);
