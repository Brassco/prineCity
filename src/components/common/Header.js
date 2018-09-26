import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

const Header = (props) => {
    let {container, leftImageStyle, rightImageStyle, imageContainer,
        titleContainer, headerImageContainer
    } = styles;
    return (
        <View style={container}>
            <View style={imageContainer}>
                <TouchableWithoutFeedback
                    onPress={props.onBackPressed}
                >
                    <Image
                        resizeMode={'contain'}
                        style={leftImageStyle}
                        source={require('../../img/icons/wh-arrow.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
            <View style={titleContainer}>
                <Text>
                    {props.title}
                </Text>
            </View>
            <View style={headerImageContainer}>
                <Image
                    resizeMode={'contain'}
                    style={rightImageStyle}
                    source={require('../../img/icons/header-img.png')}
                />
            </View>
        </View>
    )
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
        width: 40,
        height: 40
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
    }
}
export {Header};