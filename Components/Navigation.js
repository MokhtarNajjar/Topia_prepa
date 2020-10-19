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
import echec_identification from './echec_identification';
import payer from './payer';
import type_paiement from './type_paiement';
import especes from './especes';
import carte_bancaire from './carte_bancaire';
import chéque from './chéque';
import finish from './finish';
import Camera from './Camera';
import ProductScanRNCamera from './ProductScanRNCamera';

const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(222, 45, 85)',
      background: 'rgb(255, 242, 242)',
      card: 'rgb(25, 155, 295)',
      text: 'rgb(258, 258, 230)',
      border: 'rgb(99, 199, 204)',
      notification: 'rgb(255, 269, 258)',
    },
  };
const Stack = createStackNavigator();

export default function Navigation({navigation}) {
  return (
<NavigationContainer  theme={MyTheme}>
      <Stack.Navigator initialRouteName="Welcome2" >
              
      <Stack.Screen name="Welcome2" component={Welcome2} options={{ title: ''  }}/>
      <Stack.Screen name="identifier" component={identifier} options={{ title: 'identifier'  }}/>
      <Stack.Screen name="reference" component={reference} options={{ title: 'reference'  }}/>
      <Stack.Screen name="Scanner_code" component={Scanner_code} options={{ title: 'scanner_code'  }}/>
      <Stack.Screen name="info_from_bd" component={info_from_bd} options={{ title: 'info_from_bd'  }}/>
      <Stack.Screen name="echec_identification" component={echec_identification} options={{ title: 'echec'  }}/>
      <Stack.Screen name="payer" component={payer} options={{ title: 'payer'  }}/>
      <Stack.Screen name="type_paiement" component={type_paiement} options={{ title: 'type_paiement'  }}/>
      <Stack.Screen name="especes" component={especes} options={{ title: 'éspeces'  }}/>
      <Stack.Screen name="carte_bancaire" component={carte_bancaire} options={{ title: 'carte_bancaire'  }}/>
      <Stack.Screen name="chéque" component={chéque} options={{ title: 'chéque'  }}/>
      <Stack.Screen name="finish" component={finish} options={{ title: ' '  }}/>
      <Stack.Screen name="Camera" component={Camera} options={{ title: 'Camera '  }}/>
      <Stack.Screen name="ProductScanRNCamera" component={ProductScanRNCamera} options={{ title: 'Camera '  }}/>
      

</Stack.Navigator>
</NavigationContainer>
  );
}