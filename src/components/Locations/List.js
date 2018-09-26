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
            districts: [
                {
                    "id": "1",
                    "name": "District #1",
                    "logo": '../../img/loc-img.png'
                },
                {
                    "id": "2",
                    "name": "District #2",
                    "logo": '../../img/loc-img.png'
                },
                {
                    "id": "3",
                    "name": "District #3",
                    "logo": '../../img/loc-img.png'
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
                    data={this.state.districts}
                    renderItem={({item}) => {
                        return (<ListItem
                            onPress={this.openRestaurantsList}
                            roundAvatar
                            title={item.name}
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