import React from 'react';
import {View, TextInput} from 'react-native';

const TextInputContainer = ({placeholder, onChangeText, value, type, display}) => {
    return (
        <View
            display={display}
            style={{
            flex: 1,
            width: '100%',
            // backgroundColor: '#786',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5
        }}>
            <View style={{
                alignSelf: 'stretch',
                paddingLeft: 20,
                marginLeft: 50,
                marginRight: 50,
                // backgroundColor: '#764',
                borderColor: '#bfbfbf',
                borderRadius: 8,
                borderWidth: 1,
                height: 40,
                maxHeight: 50
            }}>
                <TextInput
                    keyboardType={type || 'default'}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export {TextInputContainer}