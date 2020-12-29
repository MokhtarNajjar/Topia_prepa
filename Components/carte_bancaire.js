import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Input } from 'react-native-elements';
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import VideoPlayer from 'react-native-video-player';

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

class carte_bancaire extends Component{
    constructor(props){
        super(props);
        this.state={
              montant:'',
              visible:false,
        }
    }
 render(){
        const d = Dimensions.get('window').width/380
        console.log(d);
    
        return(

<ImageBackground source= {require('../images/bg.png')} style={styles.back}>
<ScrollView>
        
        <View style={{padding:'0%'}}>
         <Text style={styles.titleblue2}>
             Sur la borne,nous 
         vous demanderons de payer :</Text>
   <View style={{paddingTop:'5%',paddingLeft:'20%',paddingRight:'20%'}}>
        <Text style={{color:"#4f4c9c",textAlign:"center", fontSize :d*29.5,backgroundColor:"white"}}>{info.montant}$</Text>
        </View>
    <View>
        <Text style={styles.titleblue2}>
            Vous allez insérer votre carte dans le lecteur 
            à côté de l'écran
        </Text>
    </View>
    <View style={{padding:'5%'}}>
    <Button 
      label="Cliquez ici pour voir la démonstration en vidéo"
      buttonType="info"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*14 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
            this.setState({ visible: true });
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
            text="Annuler"
            onPress={() => {
        //this.state.montant_modified = this.state.montant ;
               this.setState({visible:false})
            }}
          />
          <DialogButton
            style={{width:100}}
            text="OK"
            onPress={() => {
           //    this.state.montant= this.state.montant_modified ;
                this.setState({visible:false})  
            }}
          />
        </DialogFooter>
      }
  >
      <DialogContent style={{height:Dimensions.get('window').height/3 , width:d*380}}>
      <VideoPlayer
      //  video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
      video={{uri:info.url}}
      autoplay
     
/>
    </DialogContent>
  </Dialog>
    </View>
    <View style={{padding:'5%'}}>
        <Image  source= {require('../images/insert-cb.png')} style={styles.logo2 } />
  
    </View>
    
       <Button 
      label="  OK, SUITE  "
      buttonType="success"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
        
      fontSize : d*20 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
            this.props.navigation.navigate('finish');

             }}
/>
           
           </View> 
         </ScrollView>            

</ImageBackground>
                );
            } 
        }
        
export default carte_bancaire ;
