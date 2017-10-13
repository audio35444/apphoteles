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
const {hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle,headerContainer,navBarR,centerContainer,rightContainer1,leftContainer} = require('./styles.js');
const JSONReviews =require('../../db/reviewsDB.js');

class ListReviews extends Component{
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
      dataSource:this.state.dataSource.cloneWithRows(JSONReviews),
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
  renderReview(review){
    return(
        <View style={navBarR}>
          <View style={leftContainer}>
            <Image source={{uri:review.uriPhoto}} style={backgroundImage}
            resizeMode="cover"
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            ></Image>
          </View>
          <View style={centerContainer}></View>
          <View style={rightContainer1}>
            <Text style={nameHotelStyle}>{review.title}</Text>
            <Text style={detalleHotelStyle}>{review.reviewText}</Text>
          </View>
        </View>
    );
  }
  render(){
    if(!this.state.loaded)return this.renderLoadingView();
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderReview.bind(this)}
        style={listViewStyle}
      />
    );
  }
}
module.exports = ListReviews;
