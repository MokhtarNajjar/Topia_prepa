import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import { View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";


class reference extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          reference: '',

        };
    }
    render(){
        return(
    
    <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
            <View style={{flex: 1}}>
            <Text style={{padding : '5%' ,paddingTop : '10%', fontSize : 18}}>
              Saisissez votre réference :</Text>        
        </View>
        <View style={{flex: 7}}>
        <View style={styles.container_paiement}>
        
    
    <Input
        placeholder='Votre réference'
        onChangeText={(reference => this.setState({reference}))}
        keyboardType='email-address'
        autoCapitalize='none'
        value={this.state.reference}
      
    />
     
    
  
     <Button 
      label=" Validez"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*20 , alignSelf:'center'}} 
      containerStyle ={{ alignSelf:'center',width:'80%'}} 
         onPress={()=> {
             if (this.state.reference ===""){
                this.props.navigation.navigate("echec_identification");

             }else{
             this.props.navigation.navigate("info_from_bd");}
         }}

/>
        
        </View>
      
    </View>
            
        
            </ImageBackground>
            );
    
    }
}


    export default reference;