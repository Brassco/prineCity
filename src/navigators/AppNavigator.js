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

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Register: { screen: RegisterScreen },
    Login: { screen: LoginScreen },
    Main: { screen: ListComponent},
    Restaurants: { screen: Restaurants},
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };