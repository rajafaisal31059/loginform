import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Start} from './src/screens/Start'; 
import { Login } from './src/screens/Login';
import { Signup } from './src/screens/Signup';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen
          name="start"
          component={Start}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
        
        name='login'
        component={Login}
        options={{title:'Login',headerShown:false}}
        />
        <Stack.Screen
        
        name='signup'
        component={Signup}
        options={{title:'Login',headerShown:false}}
        />
         <Stack.Screen
        
        name='home'
        component={Home}
        options={{title:'Home',headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
