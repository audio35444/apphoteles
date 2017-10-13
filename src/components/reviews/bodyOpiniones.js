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
const styles = require('./styles.js');
const TextDetail = require('../text/textDetail.js');
class BodyOpiniones extends Component{
  render(){
    var position = this.props.position?this.props.position:0;
    var positionMax = this.props.positionMax?this.props.positionMax:0;

    if(positionMax<position)position=positionMax=0;
    return(
      <View >
        <Text style={{fontSize:14,color:'#678D44',marginRight:5,marginTop:10,}}>Clasificado en el puesto nro. {position} de {positionMax}</Text>
        <TextDetail detail={this.props.categoryTitle?this.props.categoryTitle:'Test detail'} />
      </View>
    );
  }
}
module.exports = BodyOpiniones;
