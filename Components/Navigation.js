import * as React from 'react';
import {  View, Text,ImageBackground,useState,text ,Style,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome2 from './Welcome2'
import identifier from './identifier';
import reference from './reference';
import Scanner_code from './Scanner_code';
import info_from_bd from './info_from_bd';

const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(2, 45, 85)',
      background: 'rgb(255, 242, 242)',
      card: 'rgb(25, 155, 295)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
const Stack = createStackNavigator();

export default function Navigation({navigation}) {
  return (
<NavigationContainer  theme={MyTheme}>
      <Stack.Navigator initialRouteName="Welcome2" >
              
      <Stack.Screen name="Welcome2" component={Welcome2} options={{ title: ''  }}/>
      <Stack.Screen name="identifier" component={identifier} options={{ title: ''  }}/>
      <Stack.Screen name="reference" component={reference} options={{ title: ''  }}/>
      <Stack.Screen name="Scanner_code" component={Scanner_code} options={{ title: ''  }}/>
      <Stack.Screen name="info_from_bd" component={info_from_bd} options={{ title: ''  }}/>


</Stack.Navigator>
</NavigationContainer>
  );
}