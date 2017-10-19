/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Body from '../body/HotelList.js';

const Header = require('../header/header.js');
//const Body = require('../body/HotelList.js');
const Search = require('../search/search.js');


var dateTime = new Date().toDateString();
console.log(dateTime);

export default class FullList extends Component<{}> {
  static navigationOptions={
    title:'Select your Hotel',
    headerTitleStyle:{color:'#000'},
    headerTintColor: 'red'
  };
  constructor(props){
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
      <Header headerText={'HotelList'} dateTime={dateTime}/>
        <Body  detailFunction={(hotel)=>navigate('HotelDetail',{hotel:hotel})}/>
      </View>
    );
  }
}
