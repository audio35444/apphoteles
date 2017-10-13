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
const {textDetail} = require('./styles.js');

class TextDetail extends Component{
  render(){
    return(
      <Text style={textDetail}>{this.props.detail?this.props.detail:'No se encuentran datos'}</Text>
    );
  }
}
module.exports = TextDetail;
