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

class type_paiement extends Component{
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
         <Text style={styles.title}>Comment paierez vous sur la borne :</Text> 
        <View style={{paddingVertical:'5%'}}>
        <Image  source= {require('../images/logo.png')} style={styles.logo } />
   

        <Button label="espèces  " 
          rounded size="sm" 
          buttonType="link"
         labelStyle={{fontStyle: 'italic',textAlign:'center',
         fontSize : d*28 , }} 
         containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

          onPress={() => {
            
      //this.props.navigation.navigate('identifier');

    } 
        }
            
         
         />
       <Image  source= {require('../images/logo.png')} style={styles.logo } />
   

   <Button label="Carte bancaire " 
     rounded size="sm" 
     buttonType="link"
    labelStyle={{fontStyle: 'italic',textAlign:'center',
    fontSize : d*28 , }} 
    containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

     onPress={() => {
       
 //this.props.navigation.navigate('identifier');

} 
   }
       
    
    />
       <Image  source= {require('../images/logo.png')} style={styles.logo } />
   

   <Button label="chéque " 
     rounded size="sm" 
     buttonType="link"
    labelStyle={{fontStyle: 'italic',textAlign:'center',
    fontSize : d*28 , }} 
    containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

     onPress={() => {
       
 //this.props.navigation.navigate('identifier');

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
export default type_paiement ;
