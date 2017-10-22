'use strict'

import React, { Component } from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View,
  BackHandler,
  Animated
} from 'react-native';

class Circle extends Component{
  render(){
    return(
      <Animated.View style={{
        margin:1,
        width:this.props.width,
        height:this.props.height,
        backgroundColor:this.props.bgColor,
        borderRadius:this.props.radius,
        opacity:this.props.animateInterpolate?this.props.animateInterpolate:1,
        justifyContent: 'center',
        alignItems: 'center',
        top:this.props.x?this.props.x:null,
      }}>
      <Text style={{fontSize:30,alignItems:'center',color:this.props.colorText}}>{this.props.text}</Text>
        </Animated.View>
    );
  }
}
module.exports = Circle;
