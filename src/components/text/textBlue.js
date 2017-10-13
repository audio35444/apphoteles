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
const {textBlue} = require('./styles.js');

class TextBlue extends Component{
  render(){
    return(
      <Text style={textBlue}>{this.props.detail?this.props.detail:'No se encuentran datos'}</Text>
    );
  }
}
module.exports = TextBlue;
