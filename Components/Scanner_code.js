import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import {  Image,View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";


class Scanner_code extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          Email: '',

        };
    }
    render(){
        return(
    
    <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
            <View style={{flex: 1}}>
            <Text style={styles.titlefinal3}>
              Placez le code à barres de l'avis d'échéance 
              sous la caméra de votre smartphone
              </Text>        
        </View>
        <View style={{paddingVertical:'5%'}}>
        <Image  source= {require('../images/logo.png')} style={styles.logo } 
        onProgress={()=>{
           console.log("image pressed");
        }}
        
        />
            </View>
        <View style={{flex: 2}}>
        <View style={styles.container_paiement}>
        
    
     
    
  
     <Button 
      label=" Non je préfere l'identification manuelle"
      buttonType="warning"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*20 , alignSelf:'center',textAlign:'center' }} 
      containerStyle ={{ alignSelf:'center',width:'90%',textAlign:'center' }} 
         onPress={()=> {
            this.props.navigation.navigate("reference");

         }}

/>
        
        </View>
      
    </View>
            
        
            </ImageBackground>
            );
    
    }
}


    export default Scanner_code;