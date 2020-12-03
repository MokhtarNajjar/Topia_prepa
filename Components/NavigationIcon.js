import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

export default class NavigationIcon extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={
            require('../images/logo2.png')
          }
          style={{
          //    alignContent:'center',
         //   alignSelf:'center',
         marginLeft:90,
            width: 45,
            height: 45,
            borderRadius: 40 / 2,
//            marginLeft: 65,
          }}
        />
      </View>
    );
  }
}