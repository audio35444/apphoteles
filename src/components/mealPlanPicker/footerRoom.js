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

const {rightContainer,leftContainer,centerContainer,navBarR} = require('./styles.js');
const TextDetail = require('../text/textDetail.js');
class FooterRoom extends Component{
  render(){
    return(
      <View style={navBarR}>
        <View ><Text>{'precio por noche por habitación'}</Text></View>

        <View style={rightContainer}>
        <Text>ARS {this.props.price} </Text>
        </View>
      </View>

    );
  }
}
module.exports = FooterRoom;
