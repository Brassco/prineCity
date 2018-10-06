import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Container} from '../common';
import { ListItem } from "react-native-elements"
import {getRestaurantsMenu} from '../../Actions/RestaurantsActions';
import {onAddToBasket} from '../../Actions/OrderAction';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import Header from '../common/Header';

class Menu extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
            data: [
                {
                    "id": '1',
                    "name": "Dish #1",
                    "image": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a387f247bfaf17e462c2b40d3a043479ab3a13ac/photo.jpg",
                    "description": "Tasty dish Tasty dish дщкуь шзігь вщдщк Tasty dish Tasty dish дщкуь шзігь вщдщк  Tasty dish Tasty dish дщкуь шзігь вщдщк Tasty dish Tasty dish дщкуь шзігь вщдщк  Tasty dish Tasty dish дщкуь шзігь вщдщк ",
                    "price": "100.0",
                    "weight": "200g"
                },
                {
                    "id": '2',
                    "name": "Dish #2",
                    "image": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a387f247bfaf17e462c2b40d3a043479ab3a13ac/photo.jpg",
                    "description": "Tasty dish",
                    "price": "100.0",
                    "weight": "200g"
                },
                {
                    "id": '3',
                    "name": "Dish #3",
                    "image": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a387f247bfaf17e462c2b40d3a043479ab3a13ac/photo.jpg",
                    "description": "Tasty dish",
                    "price": "100.0",
                    "weight": "200g"
                },
            ]
        };
        this.onError = this.onError.bind(this)
        this.onAddToBasket = this.onAddToBasket.bind(this)
        this.onOpenDishesDetails = this.onOpenDishesDetails.bind(this)
    }

    componentDidMount() {
        let {getRestaurantsMenu, token, categoryId} = this.props;
        getRestaurantsMenu(token, categoryId, this.onError);
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    onAddToBasket(item) {
        console.log('onAddToBasket', item);
        this.props.onAddToBasket(item)
    }

    onOpenDishesDetails(dishes) {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'DishesDetails', params: { dishes: dishes}})
        )
    }

    render () {
        console.log('render menu', this.props);
        let {titleTextContainer, titleText, orderText} = styles;
        let {navigation} = this.props;
        return (
            <Container>
                <Header
                    navigation={navigation}
                    onBackPressed={() => this.props.navigation.goBack()}
                    title="Меню"
                />
                <View style={titleTextContainer}>
                    <Text style={titleText}>
                        {this.props.navigation.state.params.category.name}
                    </Text>
                </View>
                <FlatList
                    style={{
                        width: '100%',
                    }}
                    keyExtractor={item => item.id}
                    data={this.state.data}
                    renderItem={({item}) => {
                        return (<ListItem
                            onPress={() => this.onOpenDishesDetails(item)}
                            roundAvatar
                            hideChevron
                            avatarContainerStyle={{
                                marginLeft: 10,
                            }}
                            avatarStyle={{
                                width: 45,
                                height: 45,
                            }}
                            title={
                                <View style={{marginLeft: 20}}>
                                    <Text>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.subtitleText}>
                                        {item.weight}
                                    </Text>
                                </View>
                            }
                            subtitle={
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <TouchableOpacity style={{
                                        // width: 70,
                                        padding: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        borderRadius: 2,
                                        backgroundColor: '#da5a22'
                                    }}
                                       onPress={() => this.onAddToBasket(item)}
                                    >
                                        <Text style={orderText}>Добавить</Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        marginRight: 5,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{
                                            color: '#b92320',
                                            margin: 3
                                        }}>
                                            {item.price}
                                        </Text>
                                        <Text>$</Text>
                                    </View>
                                </View>
                            }
                            avatar={require('../../img/burgers.png')}
                        /> )
                    }}
                />
            </Container>
        )
    }
}

const styles = {
    titleTextContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#1f1f1f'
    },
    titleText: {
        color: '#1f1f1f',
        fontSize: 16,
    },
    subtitleText: {
        color: '#bcbcb3',
        fontSize: 12,
    },
    orderText: {
        color: '#bcbcb3',
        fontSize: 10,
    }
}

const mapStateToProps= ({auth, menu, basket}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: menu.loading,
        error: menu.error,
        menu: menu.menu,
        basket: basket.basket
    }
}

export default connect(mapStateToProps, {getRestaurantsMenu, onAddToBasket})(Menu);