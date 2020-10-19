import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import {  Image,View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";
import { RNCamera } from 'react-native-camera';
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';


class Camera extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          visible:false,

        };
    }
    render(){
        return(
            <View style={{width:'100%',flex:1,height:'100%'}}>
        <Text style={styles.titlefinal}>       Select your code a barres                </Text>
        <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} />
            </View>
        );
    }
}
    
    export default Camera;
