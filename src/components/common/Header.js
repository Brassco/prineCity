import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class Header extends Component {

    onOpenBasket() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Orders'})
        )
    }

    render() {
        let {container, leftImageStyle, rightImageStyle, imageContainer,
            titleContainer, headerImageContainer, basketImage, basketImageContainer,
            basketContainer
        } = styles;
        let {onBackPressed, title, basketCount} = this.props;

        return (
            <View style={container}>
                {
                    onBackPressed &&
                    <View style={imageContainer}>
                        <TouchableWithoutFeedback
                            onPress={onBackPressed}
                        >
                            <Image
                                resizeMode={'contain'}
                                style={leftImageStyle}
                                source={require('../../img/icons/wh-arrow.png')}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                }
                <View style={titleContainer}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '300',
                        fontFamily: 'Ubuntu-Light',
                        color: '#fff'
                    }}>
                        {title}
                    </Text>
                </View>
                <View style={headerImageContainer}>
                    <Image
                        resizeMode={'contain'}
                        style={rightImageStyle}
                        source={require('../../img/icons/header-img.png')}
                    />
                    {
                        basketCount > 0 &&
                        <TouchableWithoutFeedback
                            onPress={this.onOpenBasket.bind(this)}
                        >
                            <View style={basketImageContainer}>
                                <Image
                                    resizeMode={'contain'}
                                    style={basketImage}
                                    source={require('../../img/icons/big-basket.png')}
                                />
                                <View style={basketContainer}>
                                    <Text style={{
                                        color: '#f1f1f1',
                                        fontSize: 12
                                    }}>
                                        {basketCount.toString()}
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        height: 50,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-end',
        width: '100%',
        backgroundColor: '#ED6104'
    },
    imageContainer: {
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#159'
    },
    leftImageStyle: {
        width: 20,
        height: 20
    },
    rightImageStyle: {
        width: 45,
        height: 45
    },
    titleContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,

    },
    headerImageContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: '#716'
    },
    basketImage: {
        width: 25,
        height: 25
    },
    basketImageContainer: {
        position: 'absolute',
        right: 6,
        top: 15,
    },
    basketContainer: {
        position: 'absolute',
        right: 0,
        top: 12,
    }
}

const mapStateToProps = ({basket}) => {
    return {
        basket: basket.basket,
        basketCount: basket.basketCount,
    }
}
export default connect(mapStateToProps)(Header);