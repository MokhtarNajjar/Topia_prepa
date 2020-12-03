import * as React from 'react';

import {  View, Text,ImageBackground,useState,text ,Style,StyleSheet, Dimensions} from 'react-native';



export const d = Dimensions.get('window').width/380 ;

 const h = Dimensions.get('window').height

const styles = StyleSheet.create({

    container : {

      flex : 1 , 

      backgroundColor:'#fff',

      alignItems:'flex-end',

    },

    back : {

    //  flex: 7,

      //overflow: 'visible',

      //justifyContent: "center",

//      position: 'relative',

  //    resizeMode:'cover' , // 'contain',//'cover',

     //height:h ,

      width: '100%',
      height:'100%'

    

    },

    title : { 


       height:"10%",

      // paddingLeft:'15%',

       //paddingRight:'15%',

       paddingHorizontal : '5%',

       justifyContent: 'center',

       alignItems: 'center' , 

      fontStyle: 'italic',

      fontWeight: 'bold',

      fontSize: d*32,

      alignSelf:'center',

      

      

    },

    titleblue : { 


      padding : '5%',
      paddingBottom:'0%',
      justifyContent: 'center',
      alignItems: 'center' , 
     fontStyle: 'italic',
//     fontWeight: 'bold',
     fontSize: d*28,
    color:'blue',
    textAlign:'center',
     alignSelf:'center',
   },
   
   titleblue2 : { 
textAlign:'center',
    flex:5,
          padding : '5%',
          paddingBottom:'0%',
          justifyContent: 'center',
          alignItems: 'center' , 
         fontStyle: 'italic',
    //     fontWeight: 'bold',
         fontSize: d*22,
        color:'#4f4c9c',
         alignSelf:'center',
       },
       titleblue3 : { 
        textAlign:'center',
            flex:5,
                  padding : '5%',
                  paddingBottom:'0%',
                  justifyContent: 'center',
                  alignItems: 'center' , 
                 fontStyle: 'italic',
            //     fontWeight: 'bold',
                 fontSize: d*18,
                color:'#4f4c9c',
                 alignSelf:'center',
               },
    title2 : { 

      //flex:0.1,

     // height:"10%",

     // paddingLeft:'15%',

      //paddingRight:'15%',

      padding:'5%',

      justifyContent: 'center',

      alignItems: 'center' , 

     fontStyle: 'italic',

     fontSize: d*36,

     alignSelf:'center',
   },

   Email : {

     paddingVertical : '10%',

    //align:'center' ,

    alignItems: 'center',

    

    fontSize:d*20

   },

   like : {

    alignItems: 'center',

    padding:'5%',

    paddingLeft : '40%',

    paddingBottom:'5%',

    paddingTop:'5%'

//     alignContent : 'center'

    },

    container_paiement: {

      //flex: 1,

      paddingVertical : '10%',

      paddingTop : '50%' ,

      alignItems: 'center',

      justifyContent: 'center',

      padding:'10%'

  },

  valueText: {

      fontSize: d*26, 

      marginBottom: 50,

  },

      

    body : { 

     // flex:1,

    //  justifyContent: 'center',

      //alignSelf: 'center',

      //alignItems: 'center' , 

    //  color: 'red',



     fontStyle: 'italic',

     fontSize: d*22,

     alignSelf:'center',

     paddingHorizontal:'5%'

     },

     textareaContainer: {

      height: 180,

      padding: 5,

      backgroundColor: '#F5FCFF',

    },

    textarea: {

      textAlignVertical: 'top',  // hack android

      height: 170,

      fontSize: 14,

      color: '#333',

    },

    body2 : { 

     // flex:1,

      //justifyContent: 'center',

      //alignItems: 'center' , 

      fontStyle: 'italic',

      fontSize: d*20,

      alignSelf:'center',

      //paddingVertical:'5%' ,

      padding:'10%', 

    

    },

    button: {

      backgroundColor: 'green',

      borderColor: 'green',

      borderWidth: 4,

      borderRadius: 15,

      borderColor: 'green',

      width:d*40  ,     

      alignSelf:'center',

      color: 'green',

     

    },

    title_rem:{

      flex:1,

      justifyContent: 'center',

      alignItems: 'center' , 

     fontStyle: 'italic',

     alignSelf:'center',

     color:"green",

    },

    input: {

      borderColor: 'green',

      borderWidth: 4,

      borderRadius: 15,

      width:'70%'  ,     

      alignSelf:'center',

    },

    titlefinal: {

      padding : '5%' ,

      paddingTop : '10%',

       fontSize :d*21.5,
       textAlign:'auto'

       

    },

    titlefinal2: {

      padding : '5%' ,
      paddingTop:'0%',
       fontSize :d*19.5,
      fontFamily:"Akrobat-Regular" ,

       textAlign:'center',

    },

    titlefinal3: {

      paddingLeft : '10%' ,

      paddingRight : '10%' ,

      paddingBottom:'10%',

      fontSize :d*20.5,

       textAlign:'center',

    },
titlefinal4: {

      paddingLeft : '10%' ,

      paddingRight : '10%' ,

      paddingBottom:'10%',

      fontSize :d*20.5,

       textAlign:'center',
	color:'green',
},

    item : {

      flex :2 ,
      borderEndColor:'red',
    //  borderLeftColor:'yellow',
      textDecorationColor:'red',
      borderWidth: 2,

//      borderColor: 'blue',

      alignSelf:'center',

      width:'80%'  ,

      margin:10 , 

      padding:12 ,

       textDecorationStyle:'solid',

//backgroundColor:'#FAFAFD',

backgroundColor:'#e5f5e9',

//#FFF5EE  #FFF5EE

fontSize:d*20

    },

    logo : {

      alignSelf :'center',

      width : d * 140 ,

      height : d* 120,

      padding:'10%',

    },
    logo2 : {

      alignSelf :'center',

      width : d * 340 ,

      height : d* 180,

      padding:'5%',

    },
    logo3 : {

      alignSelf :'center',

      width : d * 240 ,

      height : d* 220,

      padding:'5%',

    },

comments :   {

  //flex:0.8,

  //justifyContent: 'center',

  //alignItems: 'center' , 

 padding:'10%',

  fontStyle: 'italic',

 //alignSelf:'center',

 fontSize: d*20,

 alignSelf:'center',

 padding:'10%'







    }

    });

    export default styles ;