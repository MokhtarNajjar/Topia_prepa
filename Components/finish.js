import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
//import QRCode from 'react-native-qrcode';
//import QRCode from 'react-native-qrcode-image';
import QRCode from 'react-native-qrcode-svg';

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

class finish extends Component{
    constructor(props){
        super(props);
        this.state={
        connectionState:true,

                }        //const netInfo = useNetInfo();
        //addTheme( themeName, labelColor, disabledLabelColor, backgroundColor, disabledBackgroundColor );
        addTheme( "myTheme", "white", "blue", "blue", "yellow" );
            }
            
       
    
 render(){
    const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

    const d = Dimensions.get('window').width/380 
        console.log(d);
    
        return(
<ImageBackground source= {require('../images/bg.png')} style={styles.back}>
        
    <ScrollView>
        <View >
         <Text style={styles.titleblue}>
             Merci de présenter ce code au scanner de la borne
             </Text>
        <View style={{padding:'10%',alignSelf:'center'}}>
             <QRCode
        
    //  value={info.montant+info.reference}
      value={info.reference.substring(0,8)+"|"+info.montant+"|" +info.methode_de_paiement}
    
      size={190}
      logoSize={330}
      logo={{uri: base64Logo}}
/>  
{console.log(info.reference.substring(0,8)+"|"+info.montant+"|"+info.methode_de_paiement)}      
</View>
       </View>
         </ScrollView>
</ImageBackground>
            
                );
            } 
           }
export default finish ;
