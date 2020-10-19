import * as React from 'react';
import { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Input } from 'react-native-elements';
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';

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

class especes extends Component{
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
        
        <View style={{padding:'5%'}}>
         <Text style={styles.titleblue}>
             Sur la borne,nous 
         vous demanderons de payer :</Text>
   <View style={{padding:'5%',paddingLeft:'20%',paddingRight:'20%'}}>
        <Text style={{color:"#4f4c9c",textAlign:"center", fontSize :d*29.5,backgroundColor:"white"}}>234 $</Text>
        </View>
    <View>
        <Text style={styles.titleblue2}>
            Vous allez insérer vos billets 
            dans le lecteur en haut de l'écran
        </Text>
    </View>
    <View>
    <Button 
      label="Cliquez ici pour voir la démonstration en vidéo"
      buttonType="info"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*13 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
            this.setState({ visible: true });
             }}
/>
<Text>lool2</Text>
<VideoPlayer
    video={{ uri: 'https://www.youtube.com/watch?v=DkVdl75k3D4' }}
    videoWidth={1600}
    videoHeight={900}
 //   thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
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
           //    this.state.montant= this.state.montant_modified ;

                this.setState({visible:false})  
            }}
          />
        </DialogFooter>
      }
  >
      <DialogContent>
      <VideoPlayer
    video={{ uri:'https://www.youtube.com/watch?v=DkVdl75k3D4' }}
    videoWidth={1600}
    videoHeight={900}
 //   thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
/>
    </DialogContent>
  </Dialog>



    </View>
    <View>
        <Text style={styles.titleblue2}>
            Billets et piéces acceptés :
        </Text>
        <Image  source= {require('../images/espece2.png')} style={styles.logo3 } />
  
    </View>
    <Text style={styles.titleblue3}>
        La limite maximale par opération est de 1000 $ au delà,
        veuillez renouveler votre opération
    </Text>
    <Text style={{color:'white' , backgroundColor:'#ff2478',fontSize:d*20,textAlign:'center'}}>
        ATTENTION PAS DE RENDU DE MONNAIE</Text>
    <Text style={{textAlign:'center' , fontSize:d*16}}>tout montant versé supérieur restera sur votre compte</Text>
       <View style={{padding:'10%'}}>
       <Button 
      label="  OK, SUITE  "
      buttonType="success"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
        
      fontSize : d*20 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
             console.log(info);
             this.props.navigation.navigate('finish');
             }}
/>
           
           </View> 
         </View>
         </ScrollView>            

</ImageBackground>
                );
            } 
        }
        
export default especes ;
