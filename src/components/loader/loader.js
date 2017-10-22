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
  Animated,
  Dimensions
} from 'react-native';
const Circle = require('./circle.js');
const {width,height}= Dimensions.get('window');
const timerValue = 700;
class Loader extends Component{
  constructor(props){
    super(props);
    this.state={
      word:['L','o','a','d','i','n','g'],
      animated1:new Animated.Value(1),
      animated2:new Animated.Value(1),
      animated3:new Animated.Value(1),
      animated4:new Animated.Value(1),
      animated5:new Animated.Value(1),
      animated6:new Animated.Value(1),
      animated7:new Animated.Value(1),
      animatedXY8:new Animated.ValueXY({x:0,y:1}),
      animatedXY9:new Animated.ValueXY({x:0,y:1}),
      animatedXY10:new Animated.ValueXY({x:0,y:1}),
    }
  }
  setAnimationType(callThis,animateInterpolate,animatedXY,inputRange,outputRange){
    callThis[animateInterpolate] = callThis.state[animatedXY].x.interpolate({
      inputRange:inputRange,
      outputRange:outputRange
    });
  }
  runAnimation(){
    var arrAnimateds = [];
    var i=1;
    for(;i<8;i++){
      arrAnimateds.push(Animated.timing(this.state['animated'+i],{
        toValue:0.1,
        duration:timerValue
      }));
    }
    //los puntos
    for(;i<11;i++){
      arrAnimateds.push(Animated.timing(this.state['animatedXY'+i],{
        toValue:{x:-50 ,y:.5},
        duration:timerValue/2
      }));
      arrAnimateds.push(Animated.timing(this.state['animatedXY'+i],{
        toValue:{x:0 ,y:.1},
        duration:timerValue/2
      }));
    }
    /////
    // arrAnimateds.push(Animated.timing(this.state.animatedXY,{
    //   toValue:{x:-50 ,y:.5},
    //   duration:timerValue/2
    // }));
    // arrAnimateds.push(Animated.timing(this.state.animatedXY,{
    //   toValue:{x:0 ,y:.1},
    //   duration:timerValue/2
    // }));
    ////
    var i=1;
    for(;i<8;i++){
      arrAnimateds.push(Animated.timing(this.state['animated'+i],{
        toValue:1,
        duration:timerValue
      }));
    }
    //los puntos
    for(;i<11;i++){
      arrAnimateds.push(Animated.timing(this.state['animatedXY'+i],{
        toValue:{x:-50 ,y:.5},
        duration:timerValue/2
      }));
      arrAnimateds.push(Animated.timing(this.state['animatedXY'+i],{
        toValue:{x:0 ,y:1},
        duration:timerValue/2
      }));
    }
    // arrAnimateds.push(Animated.timing(this.state.animatedXY,{
    //   toValue:{x:-50 ,y:.5},
    //   duration:timerValue/2
    // }));
    // arrAnimateds.push(Animated.timing(this.state.animatedXY,{
    //   toValue:{x:0 ,y:1},
    //   duration:timerValue/2
    // }));
    Animated.sequence(arrAnimateds).start(() => this.runAnimation());
  }
  componentWillMount(){
    this.runAnimation();
  }
  render(){
    var render=[];
    var i=1;
    for(;i<8;i++){
      var radius=7;
    //  if(i%2===0)radius=5
      render.push(<Circle key={'circle'+i} colorText={'white'} width={35} height={35} bgColor={'#DF6800'} radius={radius} animateInterpolate={this.state['animated'+i]} text={this.state.word[i-1]}/>);
    }
    for(;i<11;i++){
      var radius=25;
    //  if(i%2===0)radius=5
      render.push(<Circle  key={'circle'+i} colorText={'white'}  width={30} height={30} bgColor={'#DF6800'} radius={radius} animateInterpolate={this.state['animatedXY'+i].y} x={this.state['animatedXY'+i].x}  text={'.'}/>);
    }
    return(
<View style={{
  flex:1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}}>
      {render}</View>
    );
  }
}
module.exports = Loader;
