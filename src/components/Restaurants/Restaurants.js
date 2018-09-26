import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements"

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

    openRestaurantInfo = () => {
        this.props.navigation.dispatch({ type: 'RestaurantInfo' })
    }

    render() {
        return (
            <Container>
                <Header
                    onBackPressed={() => this.props.navigation.goBack()}
                    title={'ЖК Кузнецово'}
                />
                <FlatList
                    style={{
                        width: '100%',
                    }}
                    keyExtractor={item => item.email}
                    data={this.state.data}
                    renderItem={() => {
                      return (<ListItem
                          onPress={this.openRestaurantInfo}
                          roundAvatar
                          title={'title'}
                          avatar={require('../../img/rest-icon.png')}
                      /> )
                    }}
                />
            </Container>
        )
    }
}

export default Restaurants;