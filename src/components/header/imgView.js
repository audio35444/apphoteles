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
const {imgViewStyle,headerContainer} = require('./styles.js');

class ImgView extends Component{
  render(){
    return(
      <View style={headerContainer}>
        <Text>{this.props.count}</Text><Image style={imgViewStyle} source={this.props.uriImg}/>

      </View>
    );
  }
}
module.exports = ImgView;
