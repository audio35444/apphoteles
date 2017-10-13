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


class MealPlanPicker extends Component{
  constructor(props){
    super(props);
    this.state={
      collapse:true,
      indexSelected:0,
      heightValue:50,
      mealPlantList:this.props.mealPlantList,
      text:'Este texto se va a cambiar',
      animate:new Animated.Value(50),
      animateXY:new Animated.ValueXY({x:0,y:0})
    };

    //var sizeAnimated=!this.state.collapse?50:0;
    this.state.mealPlantList.forEach((element)=>{
      this.state[element.nameValue]=this.state.collapse?element.selected?50:0:50;

      //{animateHidden:new Animated.Value(element.selected?50:sizeAnimated),animateShow:new Animated.Value(element.selected?50:sizeAnimated),subList:this.state.mealPlantList.filter((item)=>{return item.nameValue!=element.nameValue})}
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
          renderMPP.push(<TouchableHighlight style={{height:callBackThis.state[element.nameValue]}} onPress={()=>{
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
                if(callBackThis.state.collapse) callBackThis.setState({collapse:false});
                else callBackThis.setState({collapse:true});
                }}>
            <MealPlan key={mealPlantList.indexOf(element)} isSelected={callBackThis.state.mealPlantList[mealPlantList.indexOf(element)].selected} nameValue={element.nameValue} colorValue={element.colorValue} textValue={element.textValue} collapse={callBackThis.state.collapse}/>
          </TouchableHighlight>)

      });

    return(
        <View style={{flexDirection:'column'}}>
        <Animated.View
          style={{width:150,height:this.state.animate,backgroundColor:'rgba(0,0,0,0.4)'}}
        >
        <Text>Hola mundo</Text>
        </Animated.View>
        <View><TouchableHighlight onPress={()=>{
          Animated.timing(this.state.animate,{
            toValue:0,
            duration:300
          }).start();
        }}><Text>OK</Text></TouchableHighlight></View>
        <View><Text>{this.state.text}</Text></View>
          {renderMPP}
          { this.state.status &&
            <Text >
            I am dynamic text View
            </Text>
            }

<Text style={{height:this.state['heightValue']}}>Hola soy juan emmanuel y estoy viendo si funciona esto</Text>
          <View><TouchableHighlight onPress={()=>{
              if(this.state.heightValue>0){
                this.setState({text:'esto se cambio y funciona bien',status:false,heightValue:0});}
              else this.setState({text:'esto se cambio y funciona bien',status:false,heightValue:50});
            }
          }><Text style={{fontSize:35}}>HOLAAAAA</Text></TouchableHighlight></View>

        </View>
    );
  }
}
module.exports = MealPlanPicker;
