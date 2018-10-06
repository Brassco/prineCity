import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Container} from '../common';
import { ListItem } from "react-native-elements"
import {connect} from 'react-redux';
import {BASE_URL} from '../../urls';
import {getRestaurantsList} from '../../Actions/RestaurantsActions';
import Header from '../common/Header';

class Restaurants extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
            data: [
                {
                    "name": "Proxima Midnight",
                    "email": "proxima@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "email": "ebony@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "email": "dwarf@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "email": "thanos@appdividend.com"
                },
                {
                    "name": "Supergiant",
                    "email": "supergiant@appdividend.com"
                },
                {
                    "name": "Loki",
                    "email": "loki@appdividend.com"
                }
            ]
        };
        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        let {token, getRestaurantsList, navigation} = this.props;
        console.log(navigation.state.params.district_id);
        getRestaurantsList(token, navigation.state.params.district_id, this.onError);
    }

    openRestaurantInfo = (id) => {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Details', params: { id: id } })
        )
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    render() {
        if (this.props.loading) {
            return <ActivityIndicator />
        } else {
            let {navigation} = this.props;
            return (
                <Container>
                    <Header
                        navigation={navigation}
                        onBackPressed={() => this.props.navigation.goBack()}
                        title={this.props.navigation.state.params.district_name}
                    />
                    <FlatList
                        style={{
                            width: '100%',
                        }}
                        keyExtractor={item => item.id.toString()}
                        data={this.props.restaurants}
                        renderItem={({item}) => {
                            let imgSrc = BASE_URL + item.logo;
                            return (<ListItem
                                onPress={() => this.openRestaurantInfo(item.id)}
                                roundAvatar
                                title={item.name}
                                avatar={{uri: imgSrc}}
                            /> )
                        }}
                    />
                </Container>
            )
        }
    }
}

const mapStateToProps = ({auth, restaurants}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: restaurants.loading,
        error: restaurants.error,
        restaurants: restaurants.restaurants.restaurants,
    }
}

export default connect(mapStateToProps, {getRestaurantsList})(Restaurants);