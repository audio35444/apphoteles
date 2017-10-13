import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{width:0,height:20},
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'
  },
  titleStyle:{
    fontSize:20,
    color:'white'
  },
  subtitleStyle:{
    fontSize:15,
    color:'white'
  },
  textContainer:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerContainer:{
    backgroundColor:'rgba(223, 104, 0, 0)',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  headerSearch:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  imgViewStyle:{
    height:23,
    width:23,
    margin:1
  }
});
module.exports = styles;
