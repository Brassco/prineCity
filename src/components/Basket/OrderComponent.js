import React, {Component} from 'react';
import {View, TextInput, Text, ScrollView, FlatList, Dimensions} from 'react-native';
import {Container} from '../common';
import Header from '../common/Header';
import BasketItem from './BasketItem';
import CounterButtonComponent from './CounterButtonComponent';
import {onAddToBasket, onDeleteFromBasket, onChangeField} from '../../Actions/OrderAction';
import {connect} from 'react-redux';

let {width, height} = Dimensions.get('window');

class OrderComponent extends Component {

    static navigationOptions = {
        header: null,
    };

    componentWillUpdate(props) {
        console.log('componentWillUpdate', props)
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps', props)
    }

    componentDidUpdate(state) {
        console.log('componentDidUpdate', state);
    }

    render() {
        console.log('render order component', this.props.basket);
        let {container, addressText, addressTextContainer, formContainer,
            addressContainer, dateTimeContainer, dateContainer, timeContainer,
            dateTimeText
        } = styles;
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
                    <FlatList
                        style={{
                            width: '100%',
                        }}
                        keyExtractor={item => item.id.toString()}
                        data={this.props.basket}
                        renderItem={({item}) => {
                            return (<BasketItem
                                item={item}
                                onAddToBasket={this.props.onAddToBasket}
                                onDeleteFromBasket={this.props.onDeleteFromBasket}
                            />)
                        }}
                        />
                    <View style={container}>
                        <View style={formContainer}>
                            <View style={addressContainer}>
                                <View style={addressTextContainer}>
                                    <TextInput
                                        style={addressText}
                                        onChangeText={(text) => this.props.onChangeField('ADDRESS', text)}
                                        placeholder={'Адресс'}
                                    />
                                </View>
                            </View>
                            <View style={dateTimeContainer}>
                                <View style={dateContainer}>
                                    <TextInput
                                        onChangeText={(text) => this.props.onChangeField('DATE', text)}
                                        style={dateTimeText}
                                        placeholder={'Дата'}
                                    />
                                </View>
                                <View style={timeContainer}>
                                    <TextInput
                                        onChangeText={(text) => this.props.onChangeField('TIME', text)}
                                        style={dateTimeText}
                                        placeholder={'Время'}
                                    />
                                </View>
                            </View>
                            <View style={[dateTimeContainer,{
                                marginTop: 5,
                            }]}>
                                <View style={timeContainer}>
                                    <TextInput
                                        style={addressText}
                                        onChangeText={(text) => this.props.onChangeField('ENTRANCE', text)}
                                        placeholder={'Подъезд'}
                                    />
                                </View>
                                <View style={timeContainer}>
                                    <TextInput
                                        style={addressText}
                                        onChangeText={(text) => this.props.onChangeField('FLOOR', text)}
                                        placeholder={'Этаж'}
                                    />
                                </View>
                            </View>
                            <View style={[dateTimeContainer,{
                                marginTop: 5
                            }]}>
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
                                        onChangeText={(text) => this.props.onChangeField('FLAT', text)}
                                        placeholder={'Квартира'}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text>
                                    Количество персон
                                </Text>
                                <CounterButtonComponent
                                    onIncrease={this.props.onAddToBasket}
                                    onDecrease={this.props.onDeleteFromBasket}
                                    counter={'3'}
                                />
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
                                <TextInput
                                    placeholder={'коментарий'}
                                    onChangeText={(text) => this.props.onChangeField('COMENT', text)}
                                />
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

const styles = {
    container: {
        height: 200,
        width: '100%',
        borderTopWidth:1,
        borderColor: '#1f1f1f',
        flexDirection: 'row'
    },
    formContainer: {
        flex:4,
        paddingTop: 20
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
    },
    addressTextContainer: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 5,
        width: width*0.4,
        height: 30
    },
    addressText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        paddingLeft: 5,
    },
    dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dateContainer: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 5,
        width: width*0.2,
        height: 30
    },
    timeContainer: {
        borderWidth: 1,
        borderColor: '#859',
        borderRadius: 5,
        width: width*0.2,
        height: 30
    },
    dateTimeText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        paddingLeft: 5,
    }
}

let mapStateToProps = ({basket}) => {
    console.log('mapStateToProps', basket.basket);
    return {
        basket: basket.basket
    }
}

export default connect(mapStateToProps, {onAddToBasket, onDeleteFromBasket, onChangeField})(OrderComponent);