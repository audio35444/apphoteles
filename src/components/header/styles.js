import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  leftContainer: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarR: {
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:60,
  },
  navBarR1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:20,
  },
  navBarC: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:50,
  },
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
    color:'white',
    marginLeft:10
  },
  subtitleStyle:{
    fontSize:15,
    color:'white',
    marginLeft:10
  },
  textContainer:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerContainer:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  headerSearch:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  imgViewStyle:{
    height:50,
    width:50,
  }
});
module.exports = styles;
