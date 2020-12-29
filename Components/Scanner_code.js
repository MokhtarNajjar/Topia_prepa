import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import {  Image,View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";
import { RNCamera } from 'react-native-camera';
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
//import Camera from 'react-native-camera';
import {info} from '../data/dataa'

import Camera from './Camera';

class Scanner_code extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          reference_state:info.reference_code,
          visible:false,

        };
    }
    render(){
    //  console.log(info.reference_code);
     // this.setState({reference_state:info.reference_code})
        return(
    
    <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
            <View style={{flex: 1}}>
            <Text style={styles.titleblue2}>
              Placez le code à barres de l'avis d'échéance 
              sous la caméra de votre smartphone
              </Text>        
        
        <View>
        <Button 
      label=" Cliquez ici pour ouvrir la caméra"
      buttonType="success"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*20 , alignSelf:'center',textAlign:'center' }} 
      containerStyle ={{ alignSelf:'center',width:'90%',textAlign:'center' }} 
         onPress={()=> {
         //   this.setState({visible:true})
         this.props.navigation.navigate("ProductScanRNCamera");
        }}
         />
     
     
        </View>
        <View style={{flex:2}}>
        <View style={styles.container_paiement}>
        
     <Button 
      label=" Non je préfere l'identification manuelle"
      buttonType="warning"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*20 , alignSelf:'center',textAlign:'center' }} 
      containerStyle ={{ alignSelf:'center',width:'90%',textAlign:'center' }} 
         onPress={()=> {
//            this.setState({visible:true})
            this.props.navigation.navigate("reference");
      //this.props.navigation.navigate("Camera");
          }}
         />
         <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
            footer={
                <DialogFooter>
                  <DialogButton
                    text="CANCEL"
                    onPress={() => {
                //this.state.montant_modified = this.state.montant ;
                        this.setState({visible:false})
                    }}
                  />
                  <DialogButton
                    text="OK"
                    onPress={() => {
                //       this.state.montant= this.state.montant_modified ;
        
                        this.setState({visible:false})  
                    }}
                  />
                </DialogFooter>
              }
          >
              <DialogContent style={{width:'100%',flex:2,}}>
         
         <Camera />
            </DialogContent>
          </Dialog>
         
      
         


        
        </View>
      
    </View>
            
    </View>
            </ImageBackground>
            );
    
    }
}


    export default Scanner_code;