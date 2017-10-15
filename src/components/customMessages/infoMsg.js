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
import Icon from 'react-native-vector-icons/MaterialIcons';

const {infoContainer,rowListViewStyle,textInfo} = require('./styles.js');

class InfoMsg extends Component{
  render(){
    return(
      <View style={rowListViewStyle}>
      <Icon key={2} style={{marginTop:15}} name='mood-bad' color={'gray'} size={25}/>
        <Text key={1} style={textInfo}>{this.props.text?this.props.text:'Msg Informativo'}</Text>
      </View>
    );
  }
}
module.exports = InfoMsg;
