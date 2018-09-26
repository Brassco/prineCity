import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../components/Auth/Login';
import RegisterScreen from '../components/Auth/Register';
import ListComponent from '../components/Locations/List';
import Restaurants from '../components/Restaurants/Restaurants';
import Details from '../components/Restaurants/Details';
import Menu from '../components/Restaurants/Menu';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Register: { screen: RegisterScreen },
    Login: { screen: LoginScreen },
    Main: { screen: ListComponent},
    Restaurants: { screen: Restaurants},
    Details: { screen: Details},
    Menu: { screen: Menu},
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };