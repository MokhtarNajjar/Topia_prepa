import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Input } from 'react-native-elements';
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';

import { Image,    ScrollView,Dimensions, View, Text,ImageBackground
    ,useState,text ,Style,StyleSheet , ToastAndroid, Alert} from 'react-native';
import styles from '../Styles/GlobalStyle'
//import { Button,CheckBox } from 'react-native-elements';
import Button from "react-native-bootstrap-buttons";
import { addTheme } from "react-native-bootstrap-buttons";
import { color } from 'react-native-reanimated';
import {d} from '../Styles/GlobalStyle'
import Navigation from './Navigation'
import { info } from '../data/dataa';
class Suite_esp extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
<ScrollView>

<View>
    <View>
        <Text style={styles.titleblue2}>
            Billets et piéces acceptés :
        </Text>
        <Image  source= {require('../images/espece2.png')} style={styles.logo3 } />
  
    </View>
    <Text style={styles.titleblue3}>
        La limite maximale par opération est de 1000 $ au delà,
        veuillez renouveler votre opération
    </Text>
    <Text style={{color:'white' , backgroundColor:'#ff2478',fontSize:d*20,textAlign:'center'}}>
        ATTENTION PAS DE RENDU DE MONNAIE</Text>
    <Text style={{textAlign:'center' , fontSize:d*16}}>tout montant versé supérieur restera sur votre compte</Text>

    <View style={{padding:'10%'}}>
       <Button 
      label="  OK, SUITE  "
      buttonType="success"
      rounded size="sm" labelStyle={{fontStyle: 'italic',     
      fontSize : d*20 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
             console.log(info);
             this.props.navigation.navigate('finish');
             }}
/>
</View>
</View>

    </ScrollView>
</ImageBackground>
        );
    }
}
export default Suite_esp ;