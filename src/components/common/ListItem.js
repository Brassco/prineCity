import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

const ListItem = (props) => {
    let {container, imageStyle, imageContainer,
        titleContainer, buttonContainer
    } = styles;
    return (
        <View style={container}>
            <View style={imageContainer}>
                <Image
                    resizeMode={'contain'}
                    style={imageStyle}
                    source={require('../../img/rest-icon.png')}
                />
            </View>
            <View style={titleContainer}>
                <Text>
                    Title
                </Text>
            </View>
            <View style={buttonContainer}>
                <Text>
                    >
                </Text>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#1f1f1f',
        // backgroundColor: '#159'
    },
    imageContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        margin: 5
        // backgroundColor: '#159'
    },
    imageStyle: {
        width: 65,
        height: 65
    },
    titleContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    buttonContainer: {
        flex: 1
    }
}
export {ListItem};