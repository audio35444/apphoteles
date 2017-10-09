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
const {hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle} = require('./styles.js');

class HotelDetail extends Component{
  static navigationOptions={
    title:'Hotel Detail',
    headerStyle:{backgroundColor:'rgba(0,0,0,0)'},
    headerTitleStyle:{color:'#000'},
    headerTintColor: 'red'
  };
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={hotelRowStyle}>
        <Image source={{uri:this.props.navigation.state.params.hotel.uri}} style={backgroundImage}
        >
        </Image>
        <View style={rowListViewStyle}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        >
          <Text style={nameHotelStyle}>{this.props.navigation.state.params.hotel.name}</Text>
          <Text style={detalleHotelStyle}>ARG {this.props.navigation.state.params.hotel.price}</Text>
        </View>
      </View>
    );
  }
}
module.exports = HotelDetail;
