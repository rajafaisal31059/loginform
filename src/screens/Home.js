import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native'

export const Home = () => {
  return (
   
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/mountain.jpg')}>      
    <View>
        <Text style={{color:'white',textAlign:'center'}}>{'This is Home Screen'}</Text>
    </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    backgroundImage:{
      
        flex:1,
        justifyContent:'center',
       
    }
})






