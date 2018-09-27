import React, {Component} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container} from '../common';
import FeedbackComponent from './FeedbackComponent';

class FeedbacksList extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
            messages: [
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
                {
                    "id": "4",
                    "name": "District #3",
                    "logo": '../../img/loc-img.png'
                },
            ]
        };
    }

    render() {
        return (
            <Container>
                <View style={{
                    height: 50,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#1f1f1f'
                }}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <View style={{
                            flex:1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>
                                X
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{
                        flex:9,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text>
                                Отзывы
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 3,
                    // backgroundColor: '#159',
                    borderBottomWidth: 1,
                    borderColor: '#1f1f1f'
                }}>

                </View>
                <View style={{
                    flex: 5,
                    // backgroundColor: '#759'
                }}>
                    <FlatList
                        style={{
                            width: '100%',
                        }}
                        keyExtractor={item => item.name}
                        data={this.state.messages}
                        renderItem={({item}) => {
                            return (<FeedbackComponent />)
                        }}
                    />
                </View>
            </Container>
        )
    }
}
export default FeedbacksList;