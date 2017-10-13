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
const {hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle,headerContainer} = require('./styles.js');
// const JSONHoteles = require('../../db/hoteles.js');
// const HotelDetail = require('../detail/hotelDetail.js');
const JSONReviews =require('../../db/reviewsDB.js');
const HeaderOpiniones = require('./headerOpiniones.js');
const ReviewContainer = require('./reviewContainer.js');
const BodyOpiniones = require('./bodyOpiniones.js');
const ListReviews = require('./listReviews.js');
class ThreeRowContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      hotel:this.props.hotel
    }
  }
  render(){

    var headerComponent=[],bodyComponent=[],footerComponent=[];
    var callThis = this;
    var typeContainer = this.props.typeContainer;
    var renderElements={
      'review':{
        'header':(render)=>{render.push(<HeaderOpiniones  title={'Opiniones'} typeHeader={typeContainer} key={1} reviewCount={JSONReviews.length}/>);return render;},
        'body':(render)=>{render.push(<BodyOpiniones  key={2} position={45} positionMax={100} categoryTitle={'hoteles de Miami'} />);return render;},
        'footer':(render)=>{render.push(<ListReviews  key={3} />);return render;}
      },
      'room':{
        'header':(render)=>{render.push(<HeaderOpiniones title={'Habitaciones'} typeHeader={typeContainer} key={1} reviewCount={JSONReviews.length}/>);return render;},
        'body':(render)=>{render.push(<BodyOpiniones key={2} position={45} positionMax={100} categoryTitle={'hoteles de Miami'} />);return render;},
        'footer':(render)=>{render.push(<ListReviews key={3} />);return render;}
      },
      'description':[]
    }
    headerComponent = renderElements[typeContainer].header(headerComponent);
    bodyComponent = renderElements[typeContainer].body(bodyComponent);
    footerComponent = renderElements[typeContainer].footer(footerComponent);
      return(
        <ReviewContainer>
          {headerComponent}
          <Text>HOLA ESTO ES TEXTO{this.state.hotel.name}</Text>
          <View
          style={{borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 2,marginTop:5,marginBottom:5}}
          />
          {bodyComponent}
          <View
          style={{borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 2,marginTop:5,marginBottom:5}}
          />
          {footerComponent}
        </ReviewContainer>
      );
  }
  onHotelPress(hotel){
    console.log('hola mundo');
  }
}
module.exports = ThreeRowContainer;
