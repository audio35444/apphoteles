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

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const {headerContainer,rightContainer,leftContainer,centerContainer,navBarR,navBarR1} = require('./styles.js');
const Points = require('../points/points.js');

const ImgView  = require('../icos/imgView.js');
const TextDetail = require('../text/textDetail.js');
const TextBlue = require('../text/textBlue.js');

var uriImg1=require('../../img/buhohead.png');
var peopleImg=require('../../img/people.png');
var bedImg=require('../../img/bed.png');
class HeaderOpiniones extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var callThis =this;
    var title=this.props.title;
    var typeHeader = this.props.typeHeader;
    var components=[];
    const textReviewCount = (this.props.reviewCount?this.props.reviewCount:'0')+' opiniones';
    var styleReview = {justifyContent:'right'};
    var renderElements={
      'review':(render)=>{
        render.push(<Icon key={1} name='tripadvisor' color='black' size={15}/>);
        render.push(<Points key={2} cantPoints={2.6} size={15}/>);
        render.push(<TextDetail key={3} detail={textReviewCount} />);
        return render;
      },
      'room':(render)=>{
        render.push(<Icon2 key={4} name='ios-people' color='black' size={25}/>);
        render.push(<TextBlue key={5} detail={this.props.sumPeople} />);
        render.push(<Icon key={6} name='hotel' color='black' size={25}/>);
        render.push(<TextBlue key={7} detail={this.props.sumBeds} />);
        return render;
      }
    };
    if(typeHeader)components=renderElements[typeHeader](components);


    return(
      <View style={navBarR1}>
        <View key={1} style={leftContainer}><Text style={{fontSize:16}}>{title}</Text></View>
        <View key={2} style={centerContainer}></View>
        <View key={3} style={rightContainer}>{components}</View>
      </View>

    );
  }
}
module.exports = HeaderOpiniones;
