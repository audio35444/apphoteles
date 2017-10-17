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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const {titleStyle,containerStyle,subtitleStyle,headerContainer,headerSearch,navBarR,leftContainer,centerContainer,rightContainer} = require('./styles.js');

const TextView = require('./textView.js');
const ImgView  = require('./imgView.js');
var peopleImg=require('../../img/peopleWhite.png');
var bedImg=require('../../img/bedWhite.png');



class Header extends Component{
  render(){
    return(

      <View style={navBarR}>
        <View key={1} style={leftContainer}>
          <Text style={titleStyle}>{this.props.headerText}</Text>
          <Text style={subtitleStyle}>{this.props.dateTime}</Text>
        </View>
        <View key={3} style={rightContainer}>
          <Text style={{marginLeft:5,marginRight:15,marginBottom:5,fontSize:35,color:'rgba(255,255,255,0.2)'}}>|</Text>
          <Icon2 name='ios-people' color='white' size={50} style={{marginRight:5}}/>
          <Text style={{marginRight:10,fontSize:14,color:'white'}}>{6}</Text>
          <Text style={{marginLeft:5,marginRight:15,marginBottom:5,fontSize:35,color:'rgba(255,255,255,0.2)'}}>|</Text>
          <Icon name='hotel' color='white' size={50} style={{marginRight:5}}/>
          <Text style={{marginRight:10,fontSize:14,color:'white'}}>{4}</Text>
        </View>
      </View>


    );
  }
}
module.exports = Header;
