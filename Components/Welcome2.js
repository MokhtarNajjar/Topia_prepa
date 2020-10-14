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

class Welcome2 extends Component{
    constructor(props){
        super(props);
        this.state={
        connectionState:true,

                }        //const netInfo = useNetInfo();
        //addTheme( themeName, labelColor, disabledLabelColor, backgroundColor, disabledBackgroundColor );
        addTheme( "myTheme", "white", "blue", "blue", "yellow" );
  
    }
    getstate(state){
       
    }
    /*
     connection(){ NetInfo.addEventListener(state => {
     
     if(state.isConnected === false){
      ToastAndroid.showWithGravity
      ('vous êtes hors ligne ..',ToastAndroid.LONG ,ToastAndroid.CENTER);
     this.state.connectionState=false;    
    }else{ 
    this.state.connectionState= true ;
    }  
  });
    }
    */

 render(){
     
    //const netInfo = useNetInfo();
//    this.connection();
        const d = Dimensions.get('window').width/380
        console.log(d);
    
        return(
<ImageBackground source= {require('../images/bg.png')} style={styles.back}>
        
    <ScrollView>
        <View >
         <Text style={styles.title}>Bienvenue</Text>
         <Text style={styles.body}>TOPIA PAY</Text>
   
        <View style={{paddingVertical:'5%'}}>
        <Image  source= {require('../images/logo.png')} style={styles.logo } />
   
        <Text style={styles.titlefinal2}>Gagnez du temps ! </Text>
        <Text style={styles.titlefinal2}>Préparez votre paiement sur votre mobile</Text>
        <Text style={styles.titlefinal2}>Rendez vous sur une borne de paiement </Text>
        <Text style={styles.titlefinal2}>Scannez le code que vous recevrez sur votre mobile </Text>
        <Text style={styles.titlefinal2}>Payez , </Text>
        <Text style={styles.titlefinal2}>C'est fait !  </Text>

        <Button label="Tapez Suite pour Continuer" 
          rounded size="sm" 
         labelStyle={{fontStyle: 'italic',textAlign:'center',
         fontSize : d*18 , }} 
         containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

          onPress={() => {
            
      /*
            console.log(this.state.connectionState)
           if(this.state.connectionState === true){      
           this.props.navigation.navigate('identifier');

           }else{
            Alert.alert("Vous êtes hors ligne ..!","Veuillez connecter pour continuer");

           }
        
      }
       */
      console.log(this.props)
      this.props.navigation.navigate('identifier');

    } 
        }
            
         
         />

        </View>
         </View>
         </ScrollView>
</ImageBackground>
            
                );
            } 
           }
export default Welcome2 ;
