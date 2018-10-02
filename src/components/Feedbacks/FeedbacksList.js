import React, {Component} from 'react';
import {View, Text, FlatList,
    TextInput, KeyboardAvoidingView,
    TouchableWithoutFeedback, Dimensions} from 'react-native';
import {Container} from '../common';
import FeedbackComponent from './FeedbackComponent';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {getFeedbacks, onChangeMessage, onSendFeedback} from '../../Actions/FeedbacksActions';

let {width, height} = Dimensions.get('window');

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
                    "name": "District #4",
                    "logo": '../../img/loc-img.png'
                },
            ]
        };
        this.onError = this.onError.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSendFeedback = this.onSendFeedback.bind(this);
    }

    componentDidMount() {
        let {token, navigation, getFeedbacks} = this.props;
        console.log(token, navigation.state.params.restaurant_id);
        getFeedbacks(token, navigation.state.params.restaurant_id, this.onError);
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    onSendFeedback() {
        let {message, token, navigation} = this.props;
console.log('onSendFeedback', token, navigation.state.params.restaurant_id, message);
        this.props.onSendFeedback(token, navigation.state.params.restaurant_id, message, this.onError)
    }

    onChangeMessage(text) {
        this.props.onChangeMessage(text)
    }

    render() {
        console.log('render feedbacks', this.props);
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
                    // flex: 3,
                    height: 210,
                    borderBottomWidth: 1,
                    borderColor: '#1f1f1f',
                    padding: 20,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <View style={{
                        flex: 4,
                        width: width,
                        alignItems: 'center',
                        padding: 5,
                        // backgroundColor: '#159',
                    }}>
                        <View style={{
                            width: width*0.7,
                            height: '85%',
                        }}>
                            <TextInput
                                style={{
                                    borderRadius: 6,
                                    borderWidth: 1,
                                    borderColor: '#1f1f1f',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                }}
                                onChangeText={this.onChangeMessage}
                                multiline={true}
                                numberOfLines={5}
                                placeholder={'placeholder'}
                                value={this.props.message}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Button
                            title="Отправить"
                            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                            titleStyle={{ fontWeight: "600" }}
                            buttonStyle={{
                                height: 50,
                                width: width*0.7,
                                borderRadius: 6,
                                backgroundColor: '#fe5500',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={this.onSendFeedback}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 5,
                    // backgroundColor: '#759'
                }}>
                    <FlatList
                        style={{
                            width: '100%',
                        }}
                        keyExtractor={item => item.id}
                        data={this.props.feedbacks}
                        renderItem={({item}) => {
                            return (<FeedbackComponent />)
                        }}
                    />
                </View>
            </Container>
        )
    }
}

const mapStateToProps = ({auth, feedbacks}) => {
    return {
        token: auth.token,
        user: auth.user,
        loading: feedbacks.loading,
        error: feedbacks.error,
        feedbacks: feedbacks.feedbacks.reviews,
        message: feedbacks.message
    }
}

export default connect(mapStateToProps, {getFeedbacks, onChangeMessage, onSendFeedback})(FeedbacksList);