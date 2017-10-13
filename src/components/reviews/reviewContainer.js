'use strict'

import React, { Component } from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View,
  BackHandler
} from 'react-native';

class ReviewContainer extends Component{
  render(){
    return(
      <View style={{alignSelf:'stretch',width: null, height: 250,marginLeft:20,marginRight:20,marginTop:15,padding:15,borderWidth:2,borderRadius:3,borderColor:'rgba(0,0,0,0.32)',backgroundColor:'rgba(255,255,255,1)'}} >
      {this.props.children}
      </View>
    );
  }
}
module.exports = ReviewContainer;
