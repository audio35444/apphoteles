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
const {imgViewStyle,headerContainer} = require('./styles.js');

class Point extends Component{
  render(){
    var size = this.props.size?this.props.size:23;
    var stylesImg='{"height":'+size+',"width":'+size+',"margin":1}';
    var JSONStylesImg=JSON.parse(stylesImg);
    return(
      <View style={headerContainer}>
        <Text>{this.props.count?this.props.count:''}</Text>
        <Image  style={JSONStylesImg} source={this.props.uriImg?this.props.uriImg:require('./empty.png')}/>

      </View>
    );
  }
}
module.exports = Point;

//
// render(){
//   return(
//     <View style={headerContainer}>
//       <Text>{this.props.count?this.props.count:''}</Text><Image style={imgViewStyle} source={this.props.uriImg?this.props.uriImg:require('./empty.png')}/>
//     </View>
//   );
// }
