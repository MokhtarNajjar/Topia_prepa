

import React, { Component } from 'react';
import { Input } from 'react-native-elements';

import { StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Keyboard, 
    ImageBackground,   TouchableOpacity, ScrollView, Platform } from 'react-native';
import Button from 'react-native-bootstrap-buttons';

export default class formulaire extends Component {
    constructor(props) {
        super(props);
    }

    submit() {
        Keyboard.dismiss();
    }
    render() {
        return (

<KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
                style= {styles.FlexGrowOne}>
            
                <ScrollView bounces= {true}
                    style= {styles.FlexOne}>

                    <View style={styles.TextInputWrapper}>
                        <TextInput underlineColorAndroid="#413E4F"
                            placeholder="Enter Last Name"
                            placeholderTextColor="#413E4F"
                            ref={ref => { this._lname = ref; }}
                            returnKeyType="next"
                            onSubmitEditing= {() =>this._emailinput.focus()}/>
                            
                    </View>

                    <View style={styles.TextInputWrapper}>
                    <Input
placeholder='Numéro de compte'
//onChangeText={(Numéro_de_compte) => setNuméro_de_compte(Numéro_de_compte)}
//value={Numéro_de_compte}
/>
                       </View>
                    <View style={styles.TextInputWrapper}>
                        <TextInput underlineColorAndroid="#413E4F"
                            placeholder="Enter Country"
                            placeholderTextColor="#413E4F"
                            autoCapitalize="sentences"
                            ref={ref =>  {this._country = ref;}}
                            returnKeyType="done" />
                    </View>

                </ScrollView>

                <View >
                    <Button style={[styles.ButtonWrapper, styles.Shadow]}
                        activeOpacity={0.5}
                        label="  MODIFIEZ  "
                        buttonType="warning"
                        rounded size="sm" labelStyle={{fontStyle: 'italic',
                        fontSize : 20 , alignSelf:'center' , padding:'5%'}} 
                        containerStyle ={{ }}                   
                        onPress={()=> this.submit()}>
                    </Button>
                </View>
                </KeyboardAvoidingView>
           
            
        );
    }
}

const styles = StyleSheet.create({
    FlexGrowOne: {
        flexGrow : 1,
        backgroundColor:'white',
      //  ImageBackground: '../images/bg.png',
    },
    FlexOne: {
        flex : 1
    },
    TextInputWrapper: {
        flex: 1,
        height: 40,
        margin: 20
    },
    ButtonWrapper: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#000',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        marginBottom: 30
    },
    ButtonBackgroundColor: {
        backgroundColor: '#e6fff9'
    },
    Shadow: {
        shadowColor: "#CCC",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    SubmitText: {
        color: '#FFFFFF', 
        paddingVertical: 10, 
        fontSize: 16
    }
});

