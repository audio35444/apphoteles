import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  bodyStyle:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  hotelRowStyle:{
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white',
    backgroundColor:'rgba(0,0,0,0)'
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
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  imgViewStyle:{
    height:50,
    width:50
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
    height:20,
  },
  navBarC: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:50,
  },
  nameHotelStyle:{
    fontSize:14,
    marginBottom:8,
    textAlign:'left',
    color:'#335692'
  },
  backgroundImage:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    marginTop:3,
    marginLeft:3,
    marginRight:3,
    height:50,
    width:50
  },
  rowListViewStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:0,
    borderColor:'rgba(0,0,0,0)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  listViewStyle:{
    alignSelf:'stretch',
    backgroundColor:'rgba(52,52,52,0)',
  },
  detalleHotelStyle:{
    fontSize:12,
    textAlign:'center',
    color:'rgba(0,0,0,0.54)'
  },
  btnStyle:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:'rgba(52,52,52,0)',
    overflow:'hidden'
  }
});
module.exports = styles;
