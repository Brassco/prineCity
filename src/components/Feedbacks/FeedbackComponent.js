import React from 'react';
import {View, Text, Image} from 'react-native';

const FeedbackComponent = () => {
    let {
        container, titleContainer,
        nameContainer, dateContainer,
        textWrapper, rateContainer,
        titleText, messageText
    } = styles;
    return (
        <View style={container}>
            <View style={titleContainer}>
                <View style={nameContainer}>
                    <Text style={titleText}>
                        Наталия
                    </Text>
                </View>
                <View style={dateContainer}>
                    <Text style={titleText}>
                        1 сентября 2018
                    </Text>
                </View>
            </View>
            <View style={textWrapper}>
                <Text style={messageText}>
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                </Text>
            </View>
            <View style={rateContainer}>
                <Image
                    source={require('../../img/icons/start_full.png')}
                />
                <Image
                    source={require('../../img/icons/start_full.png')}
                />
                <Image
                    source={require('../../img/icons/start_full.png')}
                />
            </View>
        </View>
    )
}

const styles = {
    container: {
        width: '100%',
        height: 120,
        borderBottomWidth: 1,
        borderColor: '#1f1f1f',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    nameContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    titleText: {
        color: '#bcbcb3',
        fontSize: 14
    },
    dateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWrapper: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rateContainer: {
        height: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    messageText: {
        color: '#1f1f1f',
        fontSize: 14
    }
}

export default FeedbackComponent;