import React, {Component} from 'react';
import {View, Text, FlatList,
    TextInput, Image ,
    TouchableWithoutFeedback, Dimensions} from 'react-native';
import {Container} from '../common';
import FeedbackComponent from './FeedbackComponent';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {getFeedbacks, onChangeMessage, onSendFeedback} from '../../Actions/FeedbacksActions';
import close from '../../img/icons/close-icon.png'

let {width, height} = Dimensions.get('window');

class FeedbacksList extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super();
        this.state = {
            error: null,
            "reviews": [
                {
                    "id":"1",
                    "review": "Nice!",
                    "client_name": "Client",
                    "created_at": "2018-09-18T10:00:24.879Z"
                },
                {
                    "id":"2",
                    "review": "Nice!",
                    "client_name": "Client",
                    "created_at": "2018-09-18T10:00:24.879Z"
                },
                {
                    "id":"3",
                    "review": "Nice!",
                    "client_name": "Client",
                    "created_at": "2018-09-18T10:00:24.879Z"
                }
            ]
        };
        this.onError = this.onError.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSendFeedback = this.onSendFeedback.bind(this);
        this.onMakeOrder = this.onMakeOrder.bind(this);
    }

    componentDidMount() {
        let {token, navigation, getFeedbacks} = this.props;
        getFeedbacks(token, navigation.state.params.restaurant_id, this.onError);
    }

    onError() {
        this.props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Login'})
        )
    }

    onSendFeedback() {
        let {message, token, navigation} = this.props;
        this.props.onSendFeedback(token, navigation.state.params.restaurant_id, message, this.onError)
    }

    onChangeMessage(text) {
        this.props.onChangeMessage(text)
    }

    onMakeOrder(dishes) {

    }

    render() {
        let {headerContainer, closeButtonContainer, headerTextContainer,
            headerText, reviewFormContainer, textInputContainerWrapper,
            textInputStyle, buttonStyle} = styles;
        return (
            <Container>
                <View style={headerContainer}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <View style={closeButtonContainer}>
                            <Image
                                style={{
                                    width: 15,
                                    height: 15,
                                }}
                                source={close}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={headerTextContainer}>
                        <View>
                            <Text style={headerText}>
                                Отзывы
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={reviewFormContainer}>
                    <View style={textInputContainerWrapper}>
                        <View style={{
                            width: width*0.9,
                            height: '85%',
                        }}>
                            <TextInput
                                style={textInputStyle}
                                onChangeText={this.onChangeMessage}
                                multiline={true}
                                numberOfLines={5}
                                placeholder={'Ваш отзыв'}
                                value={this.props.message}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        // backgroundColor: '#125'
                    }}>
                        <Button
                            title="Отправить"
                            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                            textStyle={{
                                fontWeight: "400",
                                fontSize: 21
                            }}
                            buttonStyle={buttonStyle}
                            onPress={this.onSendFeedback}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 5,
                }}>
                    <FlatList
                        style={{
                            width: '100%',
                        }}
                        keyExtractor={item => item.id}
                        data={this.state.reviews}
                        renderItem={({item}) => {
                            return (<FeedbackComponent />)
                        }}
                    />
                </View>
            </Container>
        )
    }
}

const styles = {
    headerContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#b3b3aa'
    },
    closeButtonContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#1f1f1f',
        fontSize: 18,
        fontWeight: '400'
    },
    headerTextContainer: {
        flex:9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reviewFormContainer: {
        // flex: 3,
        height: 250,
        borderBottomWidth: 1,
        borderColor: '#b3b3aa',
        padding: 20,
        paddingBottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    textInputContainerWrapper: {
        flex: 2,
        width: width,
        alignItems: 'center',
        padding: 5,
        // backgroundColor: '#659',
    },
    textInputStyle: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#b3b3aa',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonStyle: {
        height: 50,
        width: width*0.9,
        borderRadius: 6,
        backgroundColor: '#fe5500',
        justifyContent: 'center',
        alignItems: 'center',
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