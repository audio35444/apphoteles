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
const MealPlanPicker = require('./mealPlanPicker.js');
const {hotelRowStyle,navBarR,rightContainer,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle,headerContainer} = require('./styles.js');
// const JSONHoteles = require('../../db/hoteles.js');
// const HotelDetail = require('../detail/hotelDetail.js');
const JSONReviews =require('../../db/reviewsDB.js');
const HeaderOpiniones = require('../reviews/headerOpiniones.js');
const RoomContainer = require('./roomContainer.js');
const mealPlantList = [
  {nameValue:'hotel',colorValue:'gray',textValue:'Solo Habitacion',selected:false,price:8000},
  {nameValue:'coffee',colorValue:'gray',textValue:'Con Desayuno',selected:true,price:1500}, {nameValue:'glass',colorValue:'gray',textValue:'Con Tragos',selected:false,price:3100},
];
class RoomDescription extends Component{
  render(){
    console.log(this.props.hotel.servicesHabitacion);
    var callThis=this.props.hotel;
    var sumBeds=0;
    var sumPeople=0;
    callThis.habitaciones.forEach((element)=>{
        sumBeds+=element.cantBeds;
        sumPeople+=element.cantPeople;
    });
    var HeaderRoom=[],
        FooterRoom=[];
    HeaderRoom.push(<HeaderOpiniones title={'Habitaciones'} typeHeader={'room'} key={1} sumBeds={sumBeds} sumPeople={sumPeople} reviewCount={JSONReviews.length}/>);
    FooterRoom.push(<View key={1} style={navBarR}>


            <View key={2} style={rightContainer}>
            <Text style={{color:'orange'}}>CAMBIAR </Text>
            </View>
          </View>);
      return(

        <RoomContainer>
          {HeaderRoom}
          <View key={3}
          style={{borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 2,marginTop:5,marginBottom:5}}
          />
<MealPlanPicker mealPlantList={mealPlantList} mealPlantList2={this.props.hotel.servicesHabitacion}/>
          <View key={4}
          style={{borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 2,marginTop:5,marginBottom:5}}
          />
          {FooterRoom}
        </RoomContainer>
      );
  }
  onHotelPress(hotel){
    console.log('hola mundo');
  }
}
module.exports = RoomDescription;
