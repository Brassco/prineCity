import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Header} from '../common';
import { ListItem } from "react-native-elements";
import {getLocation} from '../../Actions/RestaurantsActions';
import {connect} from 'react-redux';
import {BASE_URL} from '../../urls';
import {NavigationActions} from 'react-navigation';

class List extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
            districts: [
                {
                    "id": "1",
                    "name": "District #1",
                    "logo": '../../img/loc-img.png'
                },
                {
                    "id": "2",
                    "name": "District #2",
                    "logo": '../../img/loc-img.png'
                },
                {
                    "id": "3",
                    "name": "District #3",
                    "logo": '../../img/loc-img.png'
                },
            ]
        };
        this.openRestaurantsList = this.openRestaurantsList.bind(this)
    }

    openRestaurantsList(district){
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Restaurants', params: { district_id: district.id, district_name: district.name } })
            // { type: 'Restaurants'}, {params:  {district_id: id }}
            )
    }

    componentDidMount() {
        let {token, getLocation} = this.props;
        getLocation(token);
    }

    render() {
        console.log('render restaurants', this.props.locations)
        return (
            <Container>
                <Header
                    title={'Выберите свой ЖК'}
                />
                <FlatList
                    style={{
                    width: '100%',
                }}
                    keyExtractor={item => item.id.toString()}
                    data={this.props.locations}
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