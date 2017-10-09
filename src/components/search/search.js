'use strict'

import React, { Component } from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View,
  BackHandler,
  TextInput
} from 'react-native';
const {headerContainer,txtSearchStyle} = require('./styles.js');

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render(){
    return(

      <TextInput
        style={txtSearchStyle}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder='Search Hotel'
        underlineColorAndroid='transparent'
      />
    );
  }
}
module.exports = Search;
