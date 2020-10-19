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
import {info} from '../data/dataa'
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
        <View style={{flex:1,padding:'5%',textAlign:'center'}}>
         <Text style={styles.titleblue}>Comment paierez vous sur la borne :</Text> 
        <View style={{paddingVertical:'10%'}}>
        <Image  source= {require('../images/icone-espece.png')} style={styles.logo2 } />
   

        <Button label="espèces " 
          rounded size="sm" 
          buttonType="link"
         labelStyle={{fontStyle: 'italic',textAlign:'center',
         fontSize : d*28 , }} 
         containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

          onPress={() => {
            info.especes=true;
            info.carte_bancaire=false;
            info.cheque=false;
      this.props.navigation.navigate('especes');

    } 
        }
            
         
         />
       <Image  source= {require('../images/icone-carte.png')} style={styles.logo2 } />
   

   <Button label="Carte bancaire " 
     rounded size="sm" 
     buttonType="link"
    labelStyle={{fontStyle: 'italic',textAlign:'center',
    fontSize : d*28 , }} 
    containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

     onPress={() => {
        info.especes=false;
        info.carte_bancaire=true;
        info.cheque=false;
   
 this.props.navigation.navigate('carte_bancaire');

} 
   }
       
    
    />
       <Image  source= {require('../images/icone-cheque.png')} style={styles.logo2 } />
   

   <Button label="chéque " 
     rounded size="sm" 
     buttonType="link"
    labelStyle={{fontStyle: 'italic',textAlign:'center',
    fontSize : d*28 , }} 
    containerStyle ={{ textAlign:'center',alignSelf:'center',width:'80%'}} 

     onPress={() => {
        info.especes=false;
        info.carte_bancaire=false;
        info.cheque=true;
   
 this.props.navigation.navigate('chéque');

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
