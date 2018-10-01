import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class BasketItem extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        console.log('render basket item')
        return (
            <View style={{
                width: '100%',
                height: 100,
                borderBottomWidth: 1,
                borderColor: '#1f1f1f',
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    flex: 1
                }}>
                    <View>
                        <Text>
                            Хумус класический
                        </Text>
                    </View>
                    <View>
                        <Text>
                            вес 280 грамм
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // backgroundColor: '#189'
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <Text>
                            125
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}>
                        <Text>
                            350$
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default BasketItem;