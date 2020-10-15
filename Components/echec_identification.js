import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import {  Image,View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";


class echec_identification extends Component{
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
            <Text style={styles.titlefinal}>
            Echec d'identification du locataire
              </Text>

              <Text style={styles.titlefinal2}>
                  Vous pouvez réessayer
                  </Text>        
        </View>
        <View style={{flex: 2}}>
        <View style={styles.container_paiement}>
        
    
     
    
  
     <Button 
      label=" Réessayer"
      buttonType="danger"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*20 , alignSelf:'center',textAlign:'center' }} 
      containerStyle ={{ alignSelf:'center',width:'90%',textAlign:'center' }} 
         onPress={()=> {
            this.props.navigation.navigate("identifier");

         }}

/>
        
        </View>
      
    </View>
            
        
            </ImageBackground>
            );
    
    }
}


    export default echec_identification;