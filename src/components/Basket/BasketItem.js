import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CounterButtonComponent from './CounterButtonComponent';

class BasketItem extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
        this.onAddToBasket = this.onAddToBasket.bind(this)
        this.onDeleteFromBasket = this.onDeleteFromBasket.bind(this)
    }

    static getDerivedStateFromProps(props, state) {

        if (props.item !== state.item) {
            return {
                item: props.item,
            };
        }

        return null;
    }

    onAddToBasket(item) {
        let itemCopy = {...item};
        itemCopy.counter = item.counter+1;
        itemCopy.amount = item.counter* parseFloat(item.price);
        this.setState({
            item: itemCopy
        })
        this.props.onAddToBasket(item)
    }

    onDeleteFromBasket(item) {
        let itemCopy = {...item};
        if (item.counter-1 >= 1) {
            itemCopy.counter = item.counter - 1;
            itemCopy.amount = item.counter * parseFloat(item.price);
            this.setState({
                item: itemCopy
            })
        } else {
            this.setState({
                item: null
            })
        }
        this.props.onDeleteFromBasket(item)
    }

    render() {
        let {item} = this.state;
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
                        <Text style={{
                            fontSize: 19,
                            fontWeight: '400',
                            color: '#1f1f1f'
                        }}>
                            {item.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#b3b3aa'
                        }}>
                            вес {item.weight}
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
                    <CounterButtonComponent
                        onIncrease={() => {
                            this.onAddToBasket(item)
                        }}
                        onDecrease={() => this.onDeleteFromBasket(item)}
                        counter={item.counter}
                    />
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '400',
                            color: '#b92320',
                            marginRight: 5
                        }}>
                            {item.amount}
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '400',
                            color: '#1f1f1f'
                        }}>
                            $
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default BasketItem;