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
    width:250,
    marginLeft:10,
    marginRight:10
  },
  leftContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightContainer1: {
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
    marginTop:10,
    marginBottom:10
  },
  navBarR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:50,
  },
  navBarR1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
module.exports = styles;
