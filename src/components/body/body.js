'use strict'

import React, { Component } from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View,
  ListView,
  BackHandler
} from 'react-native';
const {hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle} = require('./styles.js');
const JSONHoteles = require('../../db/hoteles.js');
const HotelDetail = require('../detail/hotelDetail.js');
const Stars = require('../stars/stars.js');

class Body extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1 !== row2
      }),
      loaded:false
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(JSONHoteles),
      loaded:true
    });
  }
  renderLoadingView(){
    return(
      <View style={bodyStyle}>
        <Text>Loading...</Text>
      </View>
    );
  }
  renderHotel(hotel){
    return(
      <TouchableHighlight style={btnStyle} onPress={()=>{this.props.detailFunction(hotel)}}>
        <View style={hotelRowStyle}>
          <Image source={{uri:hotel.uri}} style={backgroundImage}
          resizeMode="cover"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          >
          </Image>
          <View style={rowListViewStyle}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          >
            <View style={{flexDirection:'column'}}><Text style={nameHotelStyle}>{hotel.name}</Text>
            <Text style={detalleHotelStyle}>ARG {hotel.price}</Text>
            <Stars size={15} cantStars={hotel.serviceType} color={'yellow'}/>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render(){
      if(!this.state.loaded)return this.renderLoadingView();
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderHotel.bind(this)}
          style={listViewStyle}
        />
      );
  }
  onHotelPress(hotel){
    console.log('hola mundo');
  }
}
module.exports = Body;
