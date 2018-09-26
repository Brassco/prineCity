import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements"
import {getRestaurantsList} from '../../Actions/RestaurantsActions';
import {connect} from 'react-redux';

class List extends Component {

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
                    "id": "proxima@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "id": "ebony@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "id": "dwarf@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "id": "thanos@appdividend.com"
                },
            ]
        };
        this.openRestaurantsList = this.openRestaurantsList.bind(this)
    }

    openRestaurantsList(){
        this.props.navigation.dispatch({ type: 'Restaurants' })
    }

    componentDidMount() {
        let {token, getRestaurantsList} = this.props;
        getRestaurantsList(token);
    }

    render() {
        return (
            <Container>
                <Header
                    title={'Выберите свой ЖК'}
                />
                <FlatList
                    style={{
                    width: '100%',
                }}
                    keyExtractor={item => item.id}
                    data={this.state.data}
                    renderItem={() => {
                        return (<ListItem
                            onPress={this.openRestaurantsList}
                            roundAvatar
                            title={'title'}
                            avatar={require('../../img/loc-img.png')}
                        /> )
                    }}
                />
            </Container>
        )
    }
}

const mapStateToProps = ({auth, restaurants}) => {
    console.log(auth, restaurants);
    return {
        token: auth.token,
        user: auth.user,
        loading: restaurants.loading,
        error: restaurants.error,
        restaurants: restaurants.restaurants,
    }
}


export default connect(mapStateToProps, {getRestaurantsList})(List);