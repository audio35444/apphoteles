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
  ScrollView
} from 'react-native';
import {ListenForId} from '../../lib/queries.js';
const {rowListViewStyle,leftContainer,rightContainer,centerContainer} = require('./styles.js');
const ImgElement = require('./imgElement.js');

const iconLst =[
  {icoName:'suitcase',text:'Maleta'},
  {icoName:'signal',text:'Wifi'},
  {icoName:'phone',text:"Teléfono"},
  {icoName:'camera',text:'Camara'},
  {icoName:'game-controller',text:'Video Juego'},
  {icoName:'print',text:'Impresora'},
  {icoName:'suitcase',text:'Maleta'},
  {icoName:'signal',text:'Wifi'},
  {icoName:'phone',text:"Teléfono"},
];

class ImgRotator extends Component{
  constructor(props){
    super(props);
    this.state={
      btnLeftColor:'gray',
      btnRightColor:'white',
      iconLst:this.props.services,
      _scrollToBottomX:0,
      _scrollToBottomY:0,
      _scrollStateX:0
    };
  }

  render(){
    var callThis=this;
    var renderIcons=[];
    if(this.state.iconLst)
      this.state.iconLst.forEach((icon)=>{
        renderIcons.push(<ImgElement key={this.state.iconLst.indexOf(icon)+14} icoName={icon.icoName} color={'white'} text={icon.text} positionElement={'center'} marginValue={30}/>);
      });

    return(
      <View style={rowListViewStyle}>
      <TouchableHighlight key={116} onPress={()=>{
        var _scrollToBottomX=this.state._scrollToBottomX;
        _scrollToBottomX=0;
        this.setState({_scrollToBottomX:_scrollToBottomX});
        this.refs.myScrollView.scrollTo({x:_scrollToBottomX,y:0,animated:true});
        this.setState({btnLeftColor:'gray',btnRightColor:'white'});
      }} >
                <ImgElement key={111} icoName={'chevron-left'}  color={this.state.btnLeftColor} positionElement={'left'} marginValue={20}/>
              </TouchableHighlight>
        <ScrollView ref='myScrollView' horizontal={true} scrollEventThrottle={16}
        onScroll={(eventObj)=>{
          this.setState({_scrollStateX:eventObj.nativeEvent.contentOffset.x})
        }}
        scrollEnabled={false}
        onContentSizeChange={(contentWidth, contentHeight)=>{
          console.log('valor: '+contentWidth);
        }}
        >
        {renderIcons}
        </ScrollView>
        <TouchableHighlight key={112} onPress={()=>{
                  var _scrollToBottomX=this.state._scrollToBottomX;
                  if(this.state._scrollStateX>=this.state._scrollToBottomX){
                    _scrollToBottomX=_scrollToBottomX+80;
                    this.setState({_scrollToBottomX:_scrollToBottomX});
                    this.refs.myScrollView.scrollTo({x:_scrollToBottomX,y:0,animated:true});
                  }else this.setState({btnRightColor:'gray',btnLeftColor:'white'});
                }}>
          <ImgElement icoName={'chevron-right'} color={this.state.btnRightColor} positionElement={'right'} marginValue={20}/>
        </TouchableHighlight>
      </View>
    );
  }
}
module.exports = ImgRotator;
