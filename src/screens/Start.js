import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Button from '../components/Button';

export const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
     
      <Image
        source={require('../../assets/bg1.png')}
        style={styles.backgroundImage}></Image>
      <Image
        source={require('../../assets/mask.png')}
        style={{marginTop: 120, marginLeft: 200}}></Image>
      <Image
        source={require('../../assets/masked.png')}
        style={{marginLeft: 120}}></Image>

      <Text style={styles.text}>Let's Get Started</Text>
      <Text style={styles.text2}>Grow Together</Text>
      <View style={styles.buttonContainer}>
        <Button
         onPress={() => navigation.navigate('login')}
          title="JOIN NOW"
          height={60}
          width={250}
          color={'black'}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    marginTop:30,
    fontSize: 60,
    fontWeight: '900',
    color: 'black',
  },
  text2: {
    fontSize: 20,

    color: 'black',
  },

  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  backgroundImage: {
    position: 'absolute',

    marginLeft: 50,
  },
});

// onPress={() => navigation.navigate('Menu')}
