import React, {Component} from 'react';
import {FlatList, View, Text, ActivityIndicator, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Container} from '../common';
import { ListItem } from "react-native-elements"
import {connect} from 'react-redux';
import {getRestaurantsInfo} from '../../Actions/RestaurantsActions';
import {BASE_URL} from '../../urls';
import {NavigationActions} from 'react-navigation';
import Header from '../common/Header';

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
        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        let {token, getRestaurantsInfo, navigation} = this.props;
        getRestaurantsInfo(token, navigation.state.params.id, this.onError);
    }

    openFeedbacks = (restaurant) => {
        // this.props.navigation.dispatch({ type: 'Feedbacks' })
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Feedbacks',  params: { restaurant_id: restaurant.id} })
        )
    }

    openMenu = (category) => {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Menu',  params: { category: category} })
        )
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    render() {
        if (this.props.restaurant) {
            let {restaurant, navigation} = this.props;
            let imgSrc = BASE_URL + restaurant.background_image;
            let {
                feedbackText, feedbackCounter,
                ratingCounterContainer, ratingText,
                textContainer, titleTextContainer,
                titleText
            } = styles;
            return (
                <Container>
                    <Header
                        navigation={navigation}
                        onBackPressed={() => this.props.navigation.goBack()}
                        title={restaurant.name}
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
                            source={{uri: imgSrc}}
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
                            <TouchableOpacity
                                onPress={() => this.openFeedbacks(restaurant)}
                                style={textContainer}>
                                <Text style={feedbackText}>
                                    Отзывы
                                </Text>
                                <Text style={feedbackCounter}>
                                    ({restaurant.reviews_count})
                                </Text>
                            </TouchableOpacity>
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
                                        {restaurant.rating}
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
                        keyExtractor={item => item.id.toString()}
                        data={this.props.categories}
                        renderItem={({item}) => {
                            let catImgSrc = BASE_URL + item.image;
                            return (<ListItem
                                onPress={() => this.openMenu(item)}
                                roundAvatar
                                hideChevron={true}
                                avatarStyle={{
                                    width: 40,
                                    height: 40,
                                }}
                                title={item.name}
                                avatar={{uri: catImgSrc}}
                            /> )
                        }}
                    />
                </Container>
            )
        } else {
            return <ActivityIndicator />
        }
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

const mapStateToProps = ({auth, restaurants}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: restaurants.loading,
        error: restaurants.error,
        restaurant: restaurants.restaurant,
        categories: restaurants.categories,
    }
}

export default connect(mapStateToProps, {getRestaurantsInfo})(Details);