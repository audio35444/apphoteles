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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSearch:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  imgViewStyle:{
    height:50,
    width:50
  },
  txtSearchStyle:{
    borderRadius:3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
    margin:10
  }
});
module.exports = styles;
