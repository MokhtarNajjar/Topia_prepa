import { Input } from 'react-native-elements';
import React , {useState, Component} from 'react';
import { View, Text,ImageBackground,text ,TextInput,Style,StyleSheet,FlatList,setState,TouchableOpacity, Alert} from 'react-native';
//import { Button } from 'react-native-elements';
import styles , {d} from '../Styles/GlobalStyle'
import Button from "react-native-bootstrap-buttons";
import Dialog, {DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import {info} from '../data/dataa'

class payer extends Component{
    constructor(props) {
        super(props);
 
        this.state = { 
            montant: '',
            montant_modified:'',
            visible:false,

        };
    }
    render(){
        return(
    //Keyboardavoidview pour permettre au button d'etre toujours visibles
    <ImageBackground source= {require('../images/bg.png')} style={styles.back}>
            <View style={{flex:0.2}}>
            <Text style={styles.titleblue2}>
              Confirmez le montant a payer :</Text>        
        </View>
        <View style={{flex:33 , paddingTop:'0%'}}>
        <View style={styles.container_paiement}>
    <Input
        placeholder={this.props.montant_fixe}
        onChangeText={(montant => this.setState({montant}))}
        keyboardType='numeric'
         autoCapitalize='none'
        value={this.state.montant }  
        
    />
     
     </View>
      
      
              
    
  <View style={{flexDirection:'row',alignItems:'center',padding:'15%',paddingTop:'0%'}}>
      <View style={{padding:'5%'}}>
     <Button 
      label="  VALIDEZ  "
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*16 , alignSelf:'center'}} 
      containerStyle ={{ }} 
         onPress={()=> {
                info.montant=this.state.montant
                this.props.navigation.navigate("type_paiement");

             }}

/>
</View>
<View style={{padding:'5%'}}>
<Button 
      label="  MODIFIEZ  "
      buttonType="warning"
      rounded size="sm" labelStyle={{fontStyle: 'italic',
      fontSize : d*16 , alignSelf:'center' , padding:'5%'}} 
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
            text="CANCEL"
            onPress={() => {
        //this.state.montant_modified = this.state.montant ;
                this.setState({visible:false})
            }}
          />
          <DialogButton
            text="OK"
            onPress={() => {
               this.state.montant= this.state.montant_modified ;

                this.setState({visible:false})  
            }}
          />
        </DialogFooter>
      }
  >
      <DialogContent>
      <Text style={styles.titlefinal}>Tapez le nouveau montant a payer</Text>
      <Input
        placeholder=""
        onChangeText={(x => this.setState({montant_modified:x}))}
        keyboardType='numeric'
        autoCapitalize='none'
       // value={this.state.montant_modified}
      
    />

    </DialogContent>
  </Dialog>
</View>
</View>
</View>  
        
            </ImageBackground>
            );
    
    }
}


    export default payer;