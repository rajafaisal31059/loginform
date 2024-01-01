import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
// import firebase from '../../firebase'


export const Signup = ({navigation}) => {
  // const createUser = () => {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then(() => {
        
  //     })
  //     .catch(error => {
  //       console.error('Error creating user:', error.message);
      
  //     });
  // };
  const [email, setEmail] = useState('');

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image
        source={require('../../assets/bg3.png')}
        style={{position: 'absolute', marginTop: 70, width: '100%'}}
      />

      <View style={{paddingLeft: 20}}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>{'Create'}</Text>
        <Text style={styles.text2}>{'Account :)'}</Text>
      </View>

      <View style={styles.textfieldContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email ID"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View
          style={{
            height: 2,
            backgroundColor: '#6B6B6B',
            marginHorizontal: 20,
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Create Username"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <View
          style={{
            height: 2,
            backgroundColor: '#6B6B6B',
            marginHorizontal: 20,
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Create Password"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View
          style={{
            height: 2,
            backgroundColor: '#6B6B6B',
            marginHorizontal: 20,
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={()=>{}}
          title="Sign Up "
          height={60}
          width={'90%'}
          color={'black'}></Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    paddingLeft: 20,
    marginTop: 20,
  },
  text1: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
  },
  text2: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
  },
  textfieldContainer: {
    marginTop: 0,
    paddingVertical: 30,
  },
  input: {
    paddingLeft: 20,
    fontSize: 23,
    color: '#6B6B6B',
    width: 320,
    height: 60,
    marginVertical: 30,
  },
  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 50,
  },
});
