import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BackButton = ({ onPress,navigation}) => {
  return (
    <TouchableOpacity
    onPress={() => onPress(navigation)}
    style={styles.backButton}>
    <Icon name="less-than" size={40} color={'#8E8E8E'}></Icon>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    backButton: {
        marginVertical:20,
        height: 50,
        width: 50,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
      },
});

export default BackButton;
