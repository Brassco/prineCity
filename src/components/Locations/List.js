import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container} from '../common';
import { ListItem } from "react-native-elements";
import {getLocation} from '../../Actions/RestaurantsActions';
import {connect} from 'react-redux';
import {BASE_URL} from '../../urls';
import {NavigationActions} from 'react-navigation';
import Header from '../common/Header';

class List extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
        };
        this.openRestaurantsList = this.openRestaurantsList.bind(this)
        this.onError = this.onError.bind(this)
    }

    openRestaurantsList(district){
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Restaurants', params: { district_id: district.id, district_name: district.name } })
            // { type: 'Restaurants'}, {params:  {district_id: id }}
            )
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    componentDidMount() {
        let {token, getLocation} = this.props;
        getLocation(token, this.onError);
    }

    render() {
        console.log('render restaurants', this.props.locations)
        let {navigation, locations} = this.props;
        return (
            <Container>
                <Header
                    navigation={navigation}
                    title={'Выберите свой ЖК'}
                />
                <FlatList
                    style={{
                    width: '100%',
                }}
                    keyExtractor={item => item.id.toString()}
                    data={locations}
                    renderItem={({item}) => {
                        console.log(item)
                        let imgSrc = BASE_URL + item.logo;
                        return (<ListItem
                            onPress={() => this.openRestaurantsList(item)}
                            roundAvatar
                            title={item.name}
                            avatar={{uri: imgSrc}}
                        /> )
                    }}
                />
            </Container>
        )
    }
}

const mapStateToProps = ({auth, locations}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: locations.loading,
        error: locations.error,
        locations: locations.locations.districts,
    }
}


export default connect(mapStateToProps, {getLocation})(List);