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
import Icon from 'react-native-vector-icons/FontAwesome';
const {headerContainer,txtSearchStyle,navBarR1,centerContainer,leftContainer,rightContainer} = require('./styles.js');

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render(){
    return(
      <View style={navBarR1}>
        <View style={leftContainer}></View>
        <View style={centerContainer}>
        <Icon key={41871} name='search' color={'gray'} size={25}/>
          <TextInput
            style={txtSearchStyle}
            onChangeText={(text) => this.props.filterSearch(text)}
            value={this.props.text}
            placeholder='Search Hotel'
            underlineColorAndroid='transparent'
            />
<Icon key={87451} name='microphone' color={'gray'} size={25}/>
        </View>
        <View style={rightContainer}></View>
      </View>

    );
  }

}
module.exports = Search;
