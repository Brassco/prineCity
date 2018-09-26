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
                },
                {
                    "name": "corvus",
                    "email": "corvus@appdividend.com"
                },
                {
                    "name": "Proxima Midnight",
                    "email": "proxima1@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "email": "ebony1@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "email": "dwarf1@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "email": "thanos1@appdividend.com"
                },
                {
                    "name": "Supergiant",
                    "email": "supergiant1@appdividend.com"
                },
                {
                    "name": "Loki",
                    "email": "loki1@appdividend.com"
                },
                {
                    "name": "corvus",
                    "email": "corvus1@appdividend.com"
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
                <Header />

                <FlatList
                    style={{
                        width: '100%',
                    }}
                    keyExtractor={item => item.email}
                    data={this.state.data}
                    renderItem={() => {
                        return (<ListItem
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