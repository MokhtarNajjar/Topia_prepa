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
import Navigation from './Navigation'

class info_from_bd extends Component{
    constructor(props){
        super(props);
        this.state={
        connectionState:true,

                } 
            }
 render(){
     
    //const netInfo = useNetInfo();
//    this.connection();
        const d = Dimensions.get('window').width/380
        console.log(d);
    
        return(
            <ImageBackground source= {require('../images/bg.png')} style={styles.back}> 
    <ScrollView>
     <View>
        <View style={{flex:1}}>
     
         <Text style={styles.titlefinal} > Vous souhaitez payer pour :</Text>
         <Text style={styles.titlefinal2}>référence du locataire :</Text>
   
       
        <Text style={styles.titlefinal2}> info from BD here !!!  </Text>

        <Button label="Oui ,Je paye" 
          rounded size="sm" 
         labelStyle={{fontStyle: 'italic',textAlign:'center',
         fontSize : d*18 , }} 
         containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

          onPress={() => {
              //    this.props.navigation.navigate('identifier');

          }}
  
            
         
         />
<View style={{padding:'10%',flex:2}}>
<Button label="Non" 
          rounded size="sm" 
          buttonType="danger"
          labelStyle={{fontStyle: 'italic',textAlign:'center',
         fontSize : d*18 , }} 
         containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

          onPress={() => {
        this.props.navigation.navigate('Welcome2');

          }}
  
            
         
         />
        </View>

</View>
        </View>
         </ScrollView>
</ImageBackground>
            
                );
            } 
           }
export default info_from_bd ;