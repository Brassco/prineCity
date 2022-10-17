import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import {} from 'react-navigation';

//Components
import {Container, CustomeTextInput} from '../../components/common';
import {InputTypes} from '../../components/common/CustomeTextInput';

import {RootStackParamList} from '../../Router';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
interface StateProps {
  auth: {
    phone: string;
    pass: string;
    error: string;
    loading: boolean;
  };
}

let {width, height} = Dimensions.get('window');

const Login = ({navigation}: Props) => {
  const {
    auth: {phone, pass, error, loading},
  } = useSelector<StateProps>(state => state);

  const onChangePhone = (phoneNumber: string) => {
    onChangePhone(phoneNumber);
  };

  const onChangePass = (password: string) => {
    onChangePass(password);
  };

  // const onLogin = () => {
  //   let data = {
  //     phone_number: phone,
  //     password: pass,
  //   };
  //   onLogin(data, onLoginSuccess);
  // };

  const onLoginSuccess = () => {
    navigation.navigate('Login');
  };

  const renderButton = () => {
    if (loading) {
      return <ActivityIndicator />;
    } else {
      return (
        <View
          style={{
            flex: 4,
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="OK"
            loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
            titleStyle={{fontWeight: '600'}}
            buttonStyle={styles.buttonStyle}
            onPress={onLoginSuccess}
          />
        </View>
      );
    }
  };

  let {
    imageWrapper,
    imageStyle,
    inputsContainer,
    titleTextContainer,
    titleText,
    registerText,
    registerTextContainer,
    errorWrapper,
    errorText,
  } = styles;

  return (
    <Container>
      <View>
        <View style={imageWrapper}>
          <Image
            style={imageStyle}
            resizeMode={'stretch'}
            source={require('../../img/icons/title-img.jpg')}
          />
        </View>
        <View style={titleTextContainer}>
          <Text style={titleText}>Авторизация</Text>
        </View>
      </View>
      <View style={inputsContainer}>
        <CustomeTextInput
          placeholder="7"
          onChangeText={onChangePhone}
          value={phone}
          type={InputTypes.PHONE}
        />
        <CustomeTextInput
          placeholder="Пароль"
          onChangeText={onChangePass}
          value={pass}
        />
      </View>
      {error && (
        <View style={errorWrapper}>
          <Text style={errorText}>{error}</Text>
        </View>
      )}
      <View style={registerTextContainer}>
        <Text>Еще нету аккаунта?</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <Text style={registerText}>Зарегистрироваться</Text>
        </TouchableWithoutFeedback>
      </View>
      {renderButton()}
    </Container>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    paddingTop: height * 0.06,
  },
  imageStyle: {
    width: width * 0.3,
    height: width * 0.3,
  },
  inputsContainer: {
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 35,
    paddingRight: 35,
  },
  errorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#a01e1c',
  },
  titleText: {
    fontWeight: '400',
    fontSize: 20,
  },
  titleTextContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

export default Login;
