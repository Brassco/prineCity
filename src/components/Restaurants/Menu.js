import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements"
import {getRestaurantsMenu} from '../../Actions/RestaurantsActions';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

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
                    "name": "Proxima Midnight",
                    "id": "proxima@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "id": "ebony@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "id": "dwarf@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "id": "thanos@appdividend.com"
                },
            ]
        };
        this.onError = this.onError.bind(this)
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

    render () {
        console.log('render menu', this.props);
        let {titleTextContainer, titleText, orderText} = styles;
        return (
            <Container>
                <Header
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
                    data={this.props.menu}
                    renderItem={({item}) => {
                        return (<ListItem
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
                                    <View style={{
                                        // width: 70,
                                        padding: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        borderRadius: 2,
                                        backgroundColor: '#da5a22'
                                    }}>
                                        <Text style={orderText}>Добавить</Text>
                                    </View>
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

const mapStateToProps= ({auth, menu}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: menu.loading,
        error: menu.error,
        menu: menu.menu,
    }
}

export default connect(mapStateToProps, {getRestaurantsMenu})(Menu);