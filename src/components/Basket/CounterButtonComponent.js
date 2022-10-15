import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class CounterButtonComponent extends React.Component{

    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps', nextProps, this.props)
    // }

    render() {
        let {onDecrease, onIncrease, counter} = this.props;
        let {container, textStyle, button} = styles;
        return (
            <View style={container}>
                <TouchableOpacity
                    onPress={onDecrease}
                    style={button}>
                    <Text style={textStyle}>
                        -
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={[textStyle, {color: '#b92320'}]}>
                        {counter}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={onIncrease}
                    style={button}>
                    <Text style={textStyle}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 100
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#1f1f1f'
    },
    textStyle: {
        fontSize: 19,
        fontWeight: '400',
        color: '#1f1f1f'
    }
}

export default CounterButtonComponent;