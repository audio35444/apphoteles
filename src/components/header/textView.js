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
const {titleStyle,containerStyle,subtitleStyle,textContainer} = require('./styles.js');

class TextView extends Component{
  render(){
    return(
      <View style={{marginRight:65,marginLeft:10}}>
        <Text style={titleStyle}>{this.props.headerText}</Text>
        <Text style={subtitleStyle}>{this.props.dateTime}</Text>
      </View>
    );
  }
}
module.exports = TextView;
