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
  Animated
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
const {navBarR,leftContainer,rightContainer,centerContainer} = require('./styles.js');

const TextDetail = require('../text/textDetail.js');
//chevron-thin-down  Entypo   dropdown
//coffee FontAwesome
//hotel FontAwesome
//check-circle FontAwesome
//glass

class MealPlan extends Component{
  constructor(props){
    super(props);
    this.state={
      animate:new Animated.Value(50)
    };
  }
setNativeProps = (nativeProps) => {
  this._root.setNativeProps(nativeProps);
}
  render(){
    var typeIcon = [];
      if(this.props.collapse && this.props.isSelected)typeIcon.push(<Icon1 key={11} name='chevron-down' color={'orange'} size={25}/>);
      else if(this.props.isSelected)typeIcon.push(<Icon1 key={12} name='check-circle' color={'orange'} size={25}/>)

    return(

        <Animated.View
          style={{width:null,height:this.state.animate,backgroundColor:'rgba(0,0,0,0)'}}
        >
          <View style={navBarR} ref={component => this._root = component} {...this.props}>
            <View style={leftContainer}>
            <Icon1 key={13} name={this.props.nameValue} style={{marginRight:10}} color={this.props.colorValue} size={25}/>
            <TextDetail detail={this.props.textValue[0].toUpperCase()+this.props.textValue.slice(1)}/>
            </View>
            <View style={centerContainer}></View>
            <View style={rightContainer}>
              {typeIcon}
              </View>
          </View>
        </Animated.View>
    );
  }
}
module.exports = MealPlan;
