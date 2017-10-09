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
  TextInput
} from 'react-native';
const {titleStyle,containerStyle,subtitleStyle,headerContainer,headerSearch} = require('./styles.js');

const TextView = require('./textView.js');
const ImgView  = require('./imgView.js');

var uriImg1=require('./people.png');
var uriImg2=require('./bed.png');

class Header extends Component{
  render(){
    return(
      <View style={headerContainer}>
        <TextView headerText={this.props.headerText} dateTime={this.props.dateTime}/>
        <ImgView uriImg={uriImg1} count={'5'}/>
        <ImgView uriImg={uriImg2} count={'2'}/>
      </View>
    );
  }
}
module.exports = Header;
