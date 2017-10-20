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
import Firebase from '../../lib/firebase.js';
const MyMap = require('./MyMap.js');
const {imgFullscreen,hotelRowStyle,bodyStyle,backgroundImage,btnStyle,rowListViewStyle,listViewStyle,nameHotelStyle,detalleHotelStyle} = require('./styles.js');

const ThreeRowContainer = require('../reviews/threeRowContainer.js');
const RoomDescription = require('../mealPlanPicker/roomDescription.js');
const ImgRotator = require('../imgRotator/imgRotator.js');
import {ListenForId} from '../../lib/queries.js';


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
      hotel:this.props.navigation.state.params.hotel,
      id:this.props.navigation.state.params.hotel.id
    }
    //this.itemsRef = Firebase.database().ref('hoteles');
    //this.itemsRef = Firebase.database().ref();
  }
  componentWillMount(){
    ListenForId(this);
  }
  componentDidMount(){
    //this.listenForItems(this.itemsRef);
  }
  // listenForItems(itemsRef) {
  //   itemsRef.on('value',(hoteles)=>{
  //     var item = null;
  //     if(hoteles.val()){
  //       hoteles.val()['hoteles'].forEach((element)=>{
  //         if(this.state.id == element.id)item=element;
  //       });
  //       this.setState({
  //         hotel:item
  //       });
  //     }
  //   });
  //   // itemsRef.orderByChild('id').equalTo(this.state.id).on('child_added',(hoteles)=>{
  //   //   console.log(hoteles.val().name);
  //   //   this.setState({
  //   //     hotel: hoteles.val(),
  //   //     name:hoteles.val().name
  //   //   });
  //   // });
  // }
  render(){
    var latitude = this.state.hotel.location.x,longitude=this.state.hotel.location.y,latitudeDelta=0.0122,longitudeDelta=0.0121;
    var JSONInitRegion = new Object();
    JSONInitRegion.latitude=latitude;
    JSONInitRegion.longitude=longitude;
    JSONInitRegion.latitudeDelta=latitudeDelta;
    JSONInitRegion.longitudeDelta=longitudeDelta;
    return(
      <Image style={imgFullscreen} source={{uri:this.state.hotel.uri}}
      >
      {this.state.hotel!=null &&<ScrollView
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
            description={"It is a beautiful home, because is i live there :P"}
    />
      </MapView>
      <ImgRotator key={983} hotel={this.state.hotel} services={this.state.hotel.services} />
      <ThreeRowContainer key={984} hotel={this.state.hotel} typeContainer={'review'}/>
      <RoomDescription key={985} hotel={this.state.hotel} typeContainer={'room'} />
      <ThreeRowContainer key={986} hotel={this.state.hotel} typeContainer={'review'} />
      <View style={rowListViewStyle}
      borderBottomLeftRadius={10}
      borderBottomRightRadius={10}
      >

      </View>


      </ScrollView>}
          </Image>
    );
  }
}
module.exports = HotelDetail;
