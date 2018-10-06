import React, {Component} from 'react';
import {View, TextInput, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Container} from '../common';
import Header from '../common/Header';
import BasketItem from './BasketItem';

let {width, height} = Dimensions.get('window');

class OrderComponent extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        console.log('render order component');
        return (
            <Container>
                <Header
                    onBackPressed={() => this.props.navigation.goBack()}
                    title={'Корзина'}
                />
                <ScrollView style={{
                    flex: 1,
                    width: '100%',
                }}>
                    <View >
                        <BasketItem/>
                        <BasketItem/>
                        <BasketItem/>
                        <BasketItem/>
                    </View>
                    <View style={{
                        height: 200,
                        width: '100%',
                        borderTopWidth:1,
                        borderColor: '#1f1f1f',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex:4,
                            paddingTop: 20
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                margin: 5,
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#1f1f1f',
                                    borderRadius: 5,
                                    width: width*0.4,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Адресс'}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#1f1f1f',
                                    borderRadius: 5,
                                    width: width*0.2,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Дата'}
                                    />
                                </View>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#859',
                                    borderRadius: 5,
                                    width: width*0.2,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Время'}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 5,
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#1f1f1f',
                                    borderRadius: 5,
                                    width: width*0.2,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Подъезд'}
                                    />
                                </View>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#859',
                                    borderRadius: 5,
                                    width: width*0.2,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Этаж'}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 5
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: '#1f1f1f',
                                    borderRadius: 5,
                                    width: width*0.2,
                                    height: 30
                                }}>
                                    <TextInput
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            padding: 0,
                                            paddingLeft: 5,
                                        }}
                                        placeholder={'Квартира'}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text>
                                    Количество персон
                                </Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    width: 100
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 20,
                                        height: 20,
                                        borderWidth: 1,
                                        borderColor: '#1f1f1f'
                                    }}>
                                        <Text>
                                            -
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            5
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                           +
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flex:5,
                            paddingTop: 20,
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: width*0.5,
                                height: 160,
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#1f1f1f'
                            }}>
                                <TextInput/>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        width: '100%',
                    }}>

                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default OrderComponent;