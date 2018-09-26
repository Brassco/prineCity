import React, {Component} from 'react';
import {FlatList, View, Text, Image, Dimensions} from 'react-native';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements"

let {width, height} = Dimensions.get('window');

class Details extends Component {

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
                    "email": "loki1@appdividend.com"
                },
                {
                    "name": "corvus",
                    "email": "corvus1@appdividend.com"
                }
            ]
        };
    }

    openMenu = () => {
        this.props.navigation.dispatch({ type: 'Menu' })
    }

    render() {
        let {
            feedbackText, feedbackCounter,
            ratingCounterContainer, ratingText,
            textContainer, titleTextContainer,
            titleText
        } = styles;
        return (
            <Container>
                <Header
                    onBackPressed={() => this.props.navigation.goBack()}
                    title={'restaurant info'}
                />
                <View style={{
                    width: '100%',
                    height: height*0.3,
                    // backgroundColor: '#386'
                }}>
                    <Image
                        resizeMode={'stretch'}
                        style={{
                            width: width,
                            height: height*0.3,
                        }}
                        source={require('../../img/rest-img.png')}
                    />
                </View>
                <View style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <View style={textContainer}>
                            <Text style={feedbackText}>
                                Отзывы
                            </Text>
                            <Text style={feedbackCounter}>
                                (32)
                            </Text>
                        </View>
                        <View style={[
                            textContainer,{
                            paddingLeft: 5,
                            paddingRight: 10,
                        }]}>
                            <Text style={ratingText}>
                                Рейтинг
                            </Text>
                            <View style={ratingCounterContainer}>
                                <Text style={ratingText}>
                                    4.2
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={titleTextContainer}>
                    <Text style={titleText}>
                        Меню
                    </Text>
                </View>
                <FlatList
                    style={{
                        width: '100%',
                    }}
                    keyExtractor={item => item.email}
                    data={this.state.data}
                    renderItem={() => {
                        return (<ListItem
                            onPress={this.openMenu}
                            roundAvatar
                            hideChevron={true}
                            avatarStyle={{
                                width: 40,
                                height: 40,
                            }}
                            title={'title'}
                            avatar={require('../../img/rest-icon.png')}
                        /> )
                    }}
                />
            </Container>
        )
    }
}

let styles = {
    feedbackText: {
        fontFamily: 'Ubuntu-Light',
        color: '#EF6F1A',
        fontSize: 10,
    },
    feedbackCounter: {
        fontFamily: 'Ubuntu-Light',
        margin: 3,
        color: '#999999',
        fontSize: 10,
    },
    ratingText: {
        fontFamily: 'Ubuntu-Light',
        color: '#1f1f1f',
        fontSize: 10,
    },
    ratingCounterContainer: {
        // padding: 4,
        width: 30,
        height: 30,
        marginLeft: 5,
        borderColor: '#7CCB00',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    titleTextContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#1f1f1f'
    },
    titleText: {
        color: '#1f1f1f',
        fontSize: 16,
    }
}

export default Details;