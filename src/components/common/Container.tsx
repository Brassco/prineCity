import React from 'react';
import {SafeAreaView} from 'react-native';

type Props = {
  style?: any;
  children: React.ReactElement | React.ReactNode;
};
const Container: React.FC<Props> = ({style, children}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

let styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
};

export {Container};
