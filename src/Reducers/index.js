import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import RestaurantsReducer from './RestaurantsReducer';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Register');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
    firstAction,
    // tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Register':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
            break;
        case 'Logout':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        case 'Restaurants':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Restaurants' }),
                state
            );
            break;
        case 'RestaurantInfo':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Details' }),
                state
            );
            break;
        case 'Menu':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Menu' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default combineReducers({
    auth: AuthReducer,
    register: RegisterReducer,
    restaurants: RestaurantsReducer,
    nav: nav,
})