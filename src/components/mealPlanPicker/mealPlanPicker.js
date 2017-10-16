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
  Animated
} from 'react-native';
const styles = require('./styles.js');
const MealPlan = require('./mealPlan.js');
const FooterRoom = require('./footerRoom.js');


class MealPlanPicker extends Component{
  constructor(props){
    super(props);
    this.state={
      collapse:true,
      indexSelected:0,
      heightValue:50,
      mealPlantList:this.props.mealPlantList2,
      text:'Este texto se va a cambiar',
      animate:new Animated.Value(50),
      animateXY:new Animated.ValueXY({x:0,y:0})
    };
    console.log('desde el MealPlanPicker');
    console.log(this.props.mealPlantList2);

    //var sizeAnimated=!this.state.collapse?50:0;
    this.state.mealPlantList.forEach((element)=>{
      this.state[element.nameValue]=this.state.collapse?element.selected?50:0:50;
      if(element.selected)this.state.price=element.price;
    });
    this.state['status'] = true;
    this.state['getRender']=(objthis,elementValue)=>{
      if(objthis.state.collapse)return objthis.state[elementValue].animateShow;
      else return objthis.state[elementValue].animateHidden;
    };
  }
  onClickSelected=()=>{
    this.setState({collapse:false,indexSelected:0});
    this.render();

  }
  componentWillMount(){

  }
  onSelectedMPP(keyMPP){
    var result=[];
    this.state.mealPlantList.forEach((element)=>{
      if(this.state.mealPlantList.indexOf(element)!=keyMPP){
        element.selected = false;
        result.push(element);
      }else{
        element.selected = true;
        result.push(element);
      }
    });
  }
  render(){
    var renderMPP = [];
    var callBackThis=this;
    var sizeButton=0;
    var mealPlantList = this.state.mealPlantList
      mealPlantList.forEach((element)=>{
          renderMPP.push(<TouchableHighlight key={mealPlantList.indexOf(element)+'471'} style={{height:callBackThis.state[element.nameValue]}} onPress={()=>{

              var  resultLst = mealPlantList.map((x)=>{
                  if(x.nameValue==element.nameValue)x.selected=true;
                  else x.selected=null;
                });
                callBackThis.setState({mealPlantList:resultLst});
                mealPlantList.forEach((element2)=>{
                    if(element2.nameValue!=element.nameValue){
                      var objAct = callBackThis.state;
                      objAct[element2.nameValue] = objAct[element2.nameValue]==50?0:50;
                    callBackThis.setState(objAct);}
                });
                callBackThis.setState({price:element.price});
                if(callBackThis.state.collapse) callBackThis.setState({collapse:false});
                else callBackThis.setState({collapse:true});
                }}>
            <MealPlan key={mealPlantList.indexOf(element)+'521'} isSelected={callBackThis.state.mealPlantList[mealPlantList.indexOf(element)].selected} nameValue={element.nameValue} colorValue={element.colorValue} textValue={element.textValue} collapse={callBackThis.state.collapse}/>
          </TouchableHighlight>)
      });

    return(
        <View style={{flexDirection:'column'}}>
        <View
        style={{borderBottomColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 1,marginTop:5,marginBottom:2}}
        />
          {renderMPP}
        <View
          style={{borderBottomColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 1,marginTop:2,marginBottom:5}}
          />
          <FooterRoom price={this.state.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}/>
        </View>
    );
  }
}
module.exports = MealPlanPicker;
