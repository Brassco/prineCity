import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements"
import {connect} from 'react-redux';
import {BASE_URL} from '../../urls';
import {getRestaurantsList} from '../../Actions/RestaurantsActions';

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
    }

    componentDidMount() {
        let {token, getRestaurantsList, navigation} = this.props;
        console.log(navigation.state.params.district_id);
        getRestaurantsList(token, navigation.state.params.district_id);
    }

    openRestaurantInfo = (id) => {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Details', params: { id: id } })
        )
    }

    render() {
        if (this.props.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <Container>
                    <Header
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