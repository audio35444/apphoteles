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
const {headerContainer} = require('./styles.js');
import Icon from 'react-native-vector-icons/FontAwesome';
//star
//star-o
//star-half
//<Icon key={1} name='tripadvisor' color='black' size={25}/>
class Stars extends Component{
  render(){
    var result = [];
    var size = this.props.size?this.props.size:null;
    var color=this.props.color?this.props.color:'orange';
    var i=0,
        medio=false;
    var cantStars= this.props.cantStars;
    var arrEnDe=String(cantStars).split('.');
    medio=(arrEnDe.length>1 && arrEnDe[1]>=5);
    while(i<arrEnDe[0] && i<5){
      i++;
      result.push(
        <Icon key={i+1} name='star' color={color} size={size}/>
      );
    }
    if(i<5 && medio){
      i++;
      result.push(
        <Icon key={i+1} name='star-half' color={color} size={size}/>
      );
    }
    while(i<5){
      i++;
      result.push(
          <Icon key={i+1} name='star-o' color={color} size={size}/>
      );
    }
    return(
      <View style={headerContainer}>
        {result}
      </View>
    );
  }
}
module.exports = Stars;
