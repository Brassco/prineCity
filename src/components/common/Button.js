import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
    return (
        <View style={{
            flex: 1,
            paddingTop: 15,
            // backgroundColor: '#729',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity style={{
                height: 50,
                width: 150,
                borderRadius: 8,
                backgroundColor: '#fe5500',
                justifyContent: 'center',
                alignItems: 'center',
            }}
                              onPress={props.onSubmit}
            >
                <Text>
                    {props.children}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export {Button};