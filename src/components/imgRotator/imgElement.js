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
const styles = require('./styles.js');
import Icon from 'react-native-vector-icons/Entypo';
//icons probable
//archive
//aircraft
//baidu
//bowl
//bucket
//cake
//brush
//camera
//classic-computer
//database
//dribbble
//game-controller
//phone
//landline
//signal
//print
//suitcase
class ImgElement extends Component{
  constructor(props){
    super(props);
    this.state={
      name:this.props.icoName?this.props.icoName.toLowerCase():'cross',
      size:this.props.size?this.props.size:25,
      text:this.props.text?this.props.text:null,
      positionElement:this.props.positionElement

    };
  }
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }
  render(){
    var render = [];
    if(this.state.text)render.push(<Text key={3} style={{color:this.props.color,marginTop:10,fontSize:10,textAlign:'center'}}>{this.state.text}</Text>);
    return(
      <View style={{marginTop:25,flexDirection:'column',marginBottom:25}} ref={component => this._root = component} {...this.props}>

        <View>
          <Icon key={2} style={{marginLeft:this.props.marginValue,marginRight:this.props.marginValue}} name={this.state.name} color={this.props.color} size={this.state.size}/>
          {render}
        </View>
        <View></View>
      </View>
    );
  }
}
module.exports = ImgElement;
