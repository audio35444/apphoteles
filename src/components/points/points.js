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
const Point = require('./point.js');
var uriImg1=require('./greencircle.png');
var uriImg2=require('./greencircleempty.png');
var uriImg3=require('./greencirclemiddle.png');

class Points extends Component{
  render(){
    var result = [];
    var size = this.props.size?this.props.size:null;
    var i=0,
        medio=false;
    var cantPoints= this.props.cantPoints;
    var arrEnDe=String(cantPoints).split('.');
    medio=(arrEnDe.length>1 && arrEnDe[1]>=5);
    while(i<arrEnDe[0] && i<5){
      i++;
      result.push(
          <Point key={i+1} uriImg={uriImg1} size={size}/>
      );
    }
    if(i<5 && medio){
      i++;
      result.push(
        <Point key={i+1} uriImg={uriImg3} size={size}/>
      );
    }
    while(i<5){
      i++;
      result.push(
          <Point key={i+1} uriImg={uriImg2} size={size}/>
      );
    }
    return(
      <View style={headerContainer}>
        {result}
      </View>
    );
  }
}
module.exports = Points;
