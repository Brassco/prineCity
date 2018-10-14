import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Container} from '../common';
import { Button } from "react-native-elements"
import {connect} from 'react-redux';
import {getRestaurantsInfo} from '../../Actions/RestaurantsActions';
import {onAddToBasket} from '../../Actions/OrderAction';
import {BASE_URL} from '../../urls';
import {NavigationActions} from 'react-navigation';
import Header from '../common/Header';

let {width, height} = Dimensions.get('window');

class DishesDetails extends Component {

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
        this.onAddToBasket = this.onAddToBasket.bind(this);
    }

    componentDidMount() {
        let {navigation} = this.props;
    }

    onAddToBasket(item) {
        this.props.onAddToBasket(item)
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    render() {
        let {navigation} = this.props;
        let {dishes} = navigation.state.params;
        let imgSrc = BASE_URL + dishes.image;
        let {
            amountBlock, buttonStyle,
            amountText, totalText,
            textBlock, messageText,
            titleText
        } = styles;
        return (
            <Container style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}>
                <Header
                    navigation={navigation}
                    onBackPressed={() => this.props.navigation.goBack()}
                    title={dishes.name}
                />
                <View style={{
                    width: width,
                    height: height*0.2,
                    // backgroundColor: '#386'
                }}>
                    <Image
                        resizeMode={'stretch'}
                        style={{
                            width: width,
                            height: height*0.2,
                        }}
                        source={{uri: imgSrc}}
                    />
                </View>
                <View style={textBlock}>
                    <Text style={titleText}>
                        {dishes.name}
                    </Text>
                </View>
                <View style={textBlock}>
                    <Text >
                        Вес {dishes.weight}
                    </Text>
                </View>
                <View style={textBlock}>
                    <Text style={messageText}>
                        {dishes.description}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: width,
                    padding: 20,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <Text style={totalText}>
                            Итого к оплате:
                        </Text>
                    </View>
                    <View style={amountBlock}>
                        <Text style={amountText}>
                            {dishes.price}
                        </Text>
                        <Text style={totalText}>
                            $
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    width: width,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: '#125'
                }}>
                    <Button
                        title="Заказать"
                        loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                        textStyle={{
                            fontWeight: "400",
                            fontSize: 18
                        }}
                        buttonStyle={buttonStyle}
                        onPress={() => this.onAddToBasket(dishes)}
                    />
                </View>
            </Container>
        )
    }
}

let styles = {

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
        fontSize: 20,
    },
    messageText: {
        color: '#1f1f1f',
        fontSize: 16,
    },
    textBlock: {
        margin: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    totalText: {
        color: '#1f1f1f',
        fontSize: 18,
    },
    amountBlock: {
        flexDirection: 'row',
    },
    amountText: {
        color: '#b92320',
        fontSize: 18,
        marginRight: 5
    },
    buttonStyle: {
        height: 50,
        width: width*0.4,
        borderRadius: 6,
        backgroundColor: '#fe5500',
        justifyContent: 'center',
        alignItems: 'center',
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

export default connect(mapStateToProps, {getRestaurantsInfo, onAddToBasket})(DishesDetails);