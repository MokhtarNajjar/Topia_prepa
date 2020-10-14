import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";

import { Image,    ScrollView,Dimensions, View, Text,ImageBackground
    ,useState,text ,Style,StyleSheet , ToastAndroid, Alert} from 'react-native';
import styles from '../Styles/GlobalStyle'
//import { Button,CheckBox } from 'react-native-elements';
import Button from "react-native-bootstrap-buttons";
import { addTheme } from "react-native-bootstrap-buttons";
import { color } from 'react-native-reanimated';
import {d} from '../Styles/GlobalStyle'
import Welcome2 from './Welcome2'
class identifier extends Component{
    constructor(props){
        super(props);
        this.state={
        connectionState:true,

                } 
                
    }
    
 render(){
     
    
        return(  
            <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
    
    <ScrollView>
            <View style={{flex:2}}>
             <Text style={styles.title}>Pour s'identifier , </Text>
             <Text style={styles.title}>Vous souhaitez </Text>
    
             <Button label="Scanner le code barre de votre facture " 
              rounded size="sm" 
                labelStyle={{fontStyle: 'italic',textAlign:'center',
              fontSize : d*18 , }} 
                containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 
                onPress={() => {
                    this.props.navigation.navigate("Scanner_code");

                }}
    />
    
 <Text style={styles.title}>ou  </Text>
            
 <Button label="Tapez votre réference client " 
              rounded size="sm" 
                labelStyle={{fontStyle: 'italic',textAlign:'center',
              fontSize : d*18 , }} 
                containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 
                onPress={() => {
                    this.props.navigation.navigate("reference");
                }}
    />
    </View>
            </ScrollView>
</ImageBackground>
        );
 }
 }
 export default identifier ;
