import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({onPress, title, height, width, navigation, color}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(navigation)}
      style={[
        styles.button,
        {height: height, width: width, backgroundColor: color},
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center'
  },
});

export default Button;
