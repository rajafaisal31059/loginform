import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

export const Login = ({navigation}) => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/bg2.png')}
        style={{position: 'absolute', marginTop: 220, width: '100%'}}></Image>

      <View style={{paddingLeft: 20}}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>{'Welcome Back!'}</Text>
        <Text style={styles.text2}>{'Enter your Username & Password'}</Text>
      </View>

      <View style={styles.textfieldContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <View
          style={{height: 2, backgroundColor: '#6B6B6B', marginHorizontal: 20}}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#6B6B6B"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <View
        style={{height: 2, backgroundColor: '#6B6B6B', marginHorizontal: 20}}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('home')}
          title="LOGIN "
          height={60}
          width={'90%'}
          color={'black'}></Button>
      </View>

      <Text style={styles.textButtontext}>{'   Forgotten Password?'}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.textButtontext}>Or Create a New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textContainer: {
    marginVertical: 20,
    paddingLeft: 20,
  },
  text1: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
  },
  text2: {
    color: '#565656',
    fontSize: 18,
  },
  textfieldContainer: {
    marginTop: 80,
    paddingVertical: 30,
  },
  input: {
    paddingLeft: 20,
    fontSize: 23,
    color: '#6B6B6B',
    width: 320,
    height: 60,

    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 50,
    marginHorizontal: 50,
    marginBottom: 20,
  },

  textButtontext: {
    color: '#6B6B6B',
    marginHorizontal: 90,
  },
});
