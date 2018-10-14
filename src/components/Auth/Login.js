import React, {Component} from 'react';
import {View, Text, Image, Dimensions,
    ScrollView, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {Container, TextInputContainer} from '../common';
import {connect} from 'react-redux';
import {onChangePhone, onChangePass, onLogin} from '../../Actions/AuthActions';
import { Button} from "react-native-elements"

let {width, height} = Dimensions.get('window');

class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            error: null,
        };
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
        this.onLogin = this.onLogin.bind(this)
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
    }

    onChangePhone(phone) {
        this.props.onChangePhone(phone)
    }

    onChangePass(pass) {
        this.props.onChangePass(pass)
    }

    onLogin() {
        let {phone, pass, onLogin} = this.props;
        let data = {
            phone_number: phone,
            password: pass
        }
        onLogin(data, this.onLoginSuccess);
    }

    onLoginSuccess() {
        this.props.navigation.dispatch({ type: 'Login' })
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View style={{
                    flex: 4,
                    paddingTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button
                        title="OK"
                        loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                        titleStyle={{ fontWeight: "600" }}
                        buttonStyle={styles.buttonStyle}
                        onPress={this.onLogin}
                    />
                </View>
            )
        }
    }

    render() {
        let {titleTextContainer, titleText, registerText, registerTextContainer} = styles;
        return (
            <Container>
                <ScrollView
                    style={{
                        width: '100%',
                        height: height,
                    }}
                >
                    <View style={{
                        flex: 2,
                        minHeight: 70,
                        alignSelf: 'stretch',
                        // backgroundColor: '#186',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingTop: 5
                    }}>
                        <View>
                            <Image
                                style={{
                                    width: width*0.3,
                                    height: width*0.3
                                }}
                                resizeMode={'stretch'}
                                source={require('../../img/icons/title-img.jpg')}
                            />
                        </View>
                        <View style={titleTextContainer}>
                            <Text style={titleText}>
                                Авторизация
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 3,
                        width: width,
                        // backgroundColor: '#726',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingTop: 5
                    }}>
                        <TextInputContainer
                            placeholder="7"
                            onChangeText={this.onChangePhone}
                            value={this.props.phone}
                            type={'phone-pad'}
                        />
                        <TextInputContainer
                            placeholder="Пароль"
                            onChangeText={this.onChangePass}
                            value={this.props.pass}
                        />
                    </View>
                    { this.props.error &&
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: '#a01e1c'
                            }}>
                                {this.props.error}
                            </Text>
                        </View>
                    }
                    <View style={registerTextContainer}>
                        <Text>
                            Еще нету аккаунта?
                        </Text>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.dispatch({ type: 'Register' })}
                        >
                            <Text style={registerText}>
                                Зарегистрироваться
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    { this.renderButton()}
                </ScrollView>
            </Container>
        )
    }
}

const styles = {
    errorTextContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#a01e1c'
    },
    titleText: {
        fontWeight: '400',
        fontSize: 20,
    },
    titleTextContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#719'
    },
    buttonStyle: {
        height: 50,
        width: 150,
        borderRadius: 6,
        backgroundColor: '#fe5500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: 15,
        color: '#2199d8',
    },
    registerTextContainer: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#723',
    },
}

const mapStateToProps = ({auth}) => {
    return {
        phone: auth.phone,
        pass: auth.password,
        error: auth.error,
        loading: auth.loading
    }
}

export default connect(mapStateToProps,
    {
        onChangePass,
        onChangePhone,
        onLogin
    })(Login);
