import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

const Container = (props) => {
    return (
        <SafeAreaView style={[styles.container, props.style]}>
            {
                props.children
            }
        </SafeAreaView>
    )
}

let styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}

export {Container};