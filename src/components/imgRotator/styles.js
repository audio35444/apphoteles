import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textInfo:{
    color:'rgba(0,0,0,0.54)',
    fontSize:25,
    margin:5,
  },
  textBlue:{
    color:'#335692',
    fontSize:14,
    margin:5,
  },
  infoContainer:{
    alignSelf:'stretch',
    width: null,
    height:250,
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    paddingTop:25,
    borderWidth:2,
    borderRadius:3,
    borderColor:'rgba(0,0,0,0.32)',
    backgroundColor:'rgba(0,0,0,0.1)'
  },
  rowListViewStyle:{
    flexDirection: 'row',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderTopWidth:1,
    backgroundColor:'#335692',
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
  });
module.exports = styles;
