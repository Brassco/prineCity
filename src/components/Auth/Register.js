import React, {Component} from 'react';
import {View, Text, Image,
    Dimensions, TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView, ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import { Button} from "react-native-elements"
import {Container, TextInputContainer} from '../common';
import {onChangeName, onChangePhone, onChangeEmail, onChangeCode, onRegister} from '../../Actions/RegisterActions';
import {onLogin} from '../../Actions/AuthActions';

let {width, height} = Dimensions.get('window');

class Register extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            error: null,
            displayButton: 'none'
        };
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeCode = this.onChangeCode.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onRegister = this.onRegister.bind(this)
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this)
    }

    onChangeName(name) {
        this.props.onChangeName(name)
    }

    onChangePhone(phone) {
        this.props.onChangePhone(phone)
    }

    onChangeEmail(email) {
        this.props.onChangeEmail(email)
    }

    onChangeCode(code) {
        this.props.onChangeCode(code)
    }

    onRegister() {
        let {phone, name, email} = this.props;
        let data = {
            phone_number: phone,
            email: email,
            name: name
        }
        this.setState({
            displayButton: 'flex'
        })
        this.props.onRegister(data);
        // this.props.navigation.dispatch({ type: 'Login' })
    }

    onSubmit() {
        let {phone, smsCode, onLogin} = this.props;
        let data = {
            phone_number: phone,
            password: smsCode
        }
        onLogin(data, this.onRegisterSuccess);
    }

    onRegisterSuccess() {
        this.props.navigation.dispatch({ type: 'Login' })
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <Button
                    title="OK"
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "600" }}
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.code ? this.onSubmit : this.onRegister}
                />
            )
        }
    }

    render() {
        let {scrollViewStyle, logoBlock,
            imageLogo, formBlock, titleTextContainer,
            infoTextContainer, infoText,
            loginTextContainer, titleText,
            errorTextContainer, errorText, loginText
        } = styles;
        return (
            <Container style={{
                justifyContent: 'space-between'
            }}>
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'space-between'
                    }}
                    style={scrollViewStyle}
                >
                    <View style={logoBlock}>

                        <View style={{
                            // backgroundColor: '#751'
                        }}>
                            <Image
                                style={imageLogo}
                                resizeMode={'stretch'}
                                source={require('../../img/icons/title-img.jpg')}
                            />
                        </View>
                        <View style={titleTextContainer}>
                            <Text style={titleText}>
                                Регистрация
                            </Text>
                        </View>
                    </View>
                    <View style={formBlock}>
                        <TextInputContainer
                            onChangeText={this.onChangeName}
                            placeholder="Имя"
                            value={this.props.name}
                        />
                        <TextInputContainer
                            placeholder="7"
                            onChangeText={this.onChangePhone}
                            value={this.props.phone}
                            type={'phone-pad'}
                        />
                        <TextInputContainer
                            placeholder="email"
                            onChangeText={this.onChangeEmail}
                            value={this.props.email}
                        />
                        <View
                            display={this.props.code ? 'flex' : 'none'}
                            style={infoTextContainer}
                        >
                            <Text style={infoText}>
                                Код отправленый вам в смс сообщении
                            </Text>
                        </View>
                        <TextInputContainer
                            display={this.props.code ? 'flex' : 'none'}
                            placeholder=""
                            onChangeText={this.onChangeCode}
                            value={this.props.smsCode}
                        />
                    </View>
                    <View style={loginTextContainer}>
                        <Text>
                            Уже есть аккаунт ?
                        </Text>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.dispatch({ type: 'Logout' })}
                        >
                            <Text style={loginText}>
                                Войти
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    { this.props.error &&
                    <View style={errorTextContainer}>
                        <Text style={errorText}>
                            {this.props.error}
                        </Text>
                    </View>
                    }
                    <View style={{
                        flex:1,
                        paddingTop: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {
                        this.renderButton()
                    }
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = {
    scrollViewStyle: {
        width: '100%',
        height: height,
    },
    logoBlock: {
        flex: 3,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 5
    },
    imageLogo: {
        width: width*0.3,
        height: width*0.3
    },
    formBlock: {
        flex: 5,
        alignSelf: 'stretch',
        // backgroundColor: '#736',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 5
    },
    infoTextContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 12,
    },
    loginText: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: 15,
        color: '#2199d8',
    },
    loginTextContainer: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#723',
    },
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
    }
}

const mapStateToProps = ({register}) => {
    return {
        name: register.name,
        phone: register.phone,
        email: register.email,
        error: register.error,
        loading: register.loading,
        code: register.code,
        smsCode: register.smsCode,
    }
}

export default connect(
    mapStateToProps,{
        onChangeName,
        onChangePhone,
        onChangeEmail,
        onChangeCode,
        onRegister,
        onLogin
    })(Register);
