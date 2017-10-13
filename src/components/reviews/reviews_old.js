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
const JSONHoteles = require('../../db/hoteles.js');
const HotelDetail = require('../detail/hotelDetail.js');

class Review extends Component{
  render(){
    return(
      <View style={bodyStyle}>
      </View>
    );
  }
}
module.exports = Review;
