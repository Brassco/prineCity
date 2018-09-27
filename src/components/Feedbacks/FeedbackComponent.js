import React from 'react';
import {View, Text} from 'react-native';

const FeedbackComponent = () => {
    return (
        <View style={{
            width: '100%',
            height: 100,
            borderBottomWidth: 1,
            borderColor: '#1f1f1f',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 10,
        }}>
            <View style={{
                flexDirection: 'row',
                height: 20,
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Text>
                        Наталия
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>
                        1 сентября 2018
                    </Text>
                </View>
            </View>
            <View style={{
                height: 60,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <Text>
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                </Text>
            </View>
            <View style={{
                height: 20,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Text>
                    ****
                </Text>
            </View>
        </View>
    )
}

export default FeedbackComponent;