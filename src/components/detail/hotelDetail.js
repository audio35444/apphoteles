'use strict'

import React, { Component } from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View,
  ScrollView,
  BackHandler
} from 'react-native';
import MapView from 'react-native-maps';
const MyMap = require('./MyMap.js');
const {imgFullscreen,hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle} = require('./styles.js');

const ThreeRowContainer = require('../reviews/threeRowContainer.js');
const RoomDescription = require('../mealPlanPicker/roomDescription.js');
const ImgRotator = require('../imgRotator/imgRotator.js');





class HotelDetail extends Component{
  static navigationOptions={
    title:'Hotel Detail',
    headerStyle:{backgroundColor:'rgba(0,0,0,0)'},
    headerTitleStyle:{color:'#000'},
    headerTintColor: 'red'
  };
  constructor(props){
    super(props);
    this.state={
      hotel:this.props.navigation.state.params.hotel
    }
    console.log('ObjHotel');
    console.log(this.state.hotel.servicesHabitacion);
    console.log('servicios');
    console.log(this.state.hotel.services);
  //  console.log(this.props.hotel.servicesHabitacion);
  }
  render(){
    var latitude = -31.413246,longitude=-64.202104,latitudeDelta=0.0122,longitudeDelta=0.0121;
    var JSONInitRegion = new Object();
    JSONInitRegion.latitude=latitude;
    JSONInitRegion.longitude=longitude;
    JSONInitRegion.latitudeDelta=latitudeDelta;
    JSONInitRegion.longitudeDelta=longitudeDelta;
    return(
      <Image style={imgFullscreen} source={{uri:this.state.hotel.uri}}
      >
      <ScrollView
      >
      <Text style={{fontSize:25,
        marginBottom:8,
        textAlign:'center',
        color:'rgba(2551,255,255,1)'}
      }>{this.state.hotel.name}</Text>
      <Text style={  {fontSize:15,
        marginBottom:8,
        textAlign:'center',
        color:'rgba(255,255,255,1)'}
      }>ARS {this.state.hotel.price}</Text>
      <MapView key={981}  style={{height: 260, margin: 10}}  showsUserLocation={true}
      initialRegion={JSONInitRegion}>
      <MapView.Marker
            coordinate={{latitude: latitude, longitude: longitude}}
            title={"My Home"}
            description={"Is a beautiful hom, because is i live there :P"}
    />
      </MapView>
      <ImgRotator key={983} services={this.state.hotel.services} />
      <ThreeRowContainer key={984} hotel={this.state.hotel} typeContainer={'review'}/>
      <RoomDescription key={985} hotel={this.state.hotel} typeContainer={'room'} />
      <ThreeRowContainer key={986} hotel={this.state.hotel} typeContainer={'review'} />
      <View style={rowListViewStyle}
      borderBottomLeftRadius={10}
      borderBottomRightRadius={10}
      >

      </View>


      </ScrollView>
          </Image>
    );
  }
}
module.exports = HotelDetail;
