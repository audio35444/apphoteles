import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imgFullscreen:{
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.4)',
    height:65,
    width:350,
    borderColor:'rgba(0,0,0,0)',
    borderWidth:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    textShadowColor:'#585858',
    textShadowOffset:{width: 2, height: 2}
  },
  titleHotel: {
    fontSize: 50,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    color:'white',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.6)',
    height:85,
    width:380,
    borderColor:'rgba(0,0,0,0)',
    borderWidth:1,
    textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1}
  },
});

module.exports = styles;
