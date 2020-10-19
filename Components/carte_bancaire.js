import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Input } from 'react-native-elements';

import { Image,    ScrollView,Dimensions, View, Text,ImageBackground
    ,useState,text ,Style,StyleSheet , ToastAndroid, Alert} from 'react-native';
import styles from '../Styles/GlobalStyle'
//import { Button,CheckBox } from 'react-native-elements';
import Button from "react-native-bootstrap-buttons";
import { addTheme } from "react-native-bootstrap-buttons";
import { color } from 'react-native-reanimated';
import {d} from '../Styles/GlobalStyle'
import Navigation from './Navigation'

class carte_bancaire extends Component{
    constructor(props){
        super(props);
        this.state={
              montant:'',
        }
    }
 render(){
        const d = Dimensions.get('window').width/380
        console.log(d);
    
        return(

<ImageBackground source= {require('../images/bg.png')} style={styles.back}>
<ScrollView>
        
        <View style={{padding:'5%'}}>
         <Text style={styles.titleblue}>
             Sur la borne,nous 
         vous demanderons de payer :</Text>
   <View style={{padding:'5%',paddingLeft:'20%',paddingRight:'20%'}}>
        <Text style={{color:"#4f4c9c",textAlign:"center", fontSize :d*29.5,backgroundColor:"white"}}>234 $</Text>
        </View>
    <View>
        <Text style={styles.titleblue2}>
            Vous allez insérer votre carte dans le lecteur 
            à côté de l'écran
        </Text>
    </View>
    <View>
    <Button 
      label="Cliquez ici pour voir la démonstration en vidéo"
      buttonType="info"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*13 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
     
             }}
/>
    </View>
    <View style={{padding:'10%'}}>
        <Image  source= {require('../images/insert-cb.png')} style={styles.logo2 } />
  
    </View>
    
       <Button 
      label="  OK, SUITE  "
      buttonType="success"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
        
      fontSize : d*20 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
             }}
/>
           
           </View> 
         </ScrollView>            

</ImageBackground>
                );
            } 
        }
        
export default carte_bancaire ;
