import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export enum InputTypes {
  DEFAULT = 'default',
  NUMBER = 'number-pad',
  DECIMAL = 'decimal-pad',
  NUMERIC = 'numeric',
  EMAIL = 'email-address',
  PHONE = 'phone-pad',
  URL = 'url',
}

interface ITextInputContainer {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  type?: InputTypes;
  display?: boolean;
  style?: any;
}
const CustomeTextInput: React.FC<ITextInputContainer> = ({
  placeholder,
  onChangeText,
  value,
  type,
  display = true,
  style,
}) => {
  const {container, inputStyle} = styles;

  return display ? (
    <View style={[container, style]}>
      <TextInput
        style={inputStyle}
        keyboardType={type || InputTypes.DEFAULT}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 12,
  },
  inputStyle: {
    // alignSelf: 'stretch',
    // width: '100%',
    paddingLeft: 20,
    borderColor: '#bfbfbf',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
  },
});

export {CustomeTextInput};
