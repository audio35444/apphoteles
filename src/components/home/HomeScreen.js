import React from 'react';
import { Text,TouchableHighlight,View,StyleSheet,Image } from 'react-native';

const styles = require('./styles.js');
var wallpaperImg=require('./wallpaper.jpg');
export default class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
      style={styles.imgFullscreen}
      source={wallpaperImg}>
        <View style={styles.container}>
          <TouchableHighlight onPress={()=>navigate('FullList',{name:'Juan Emmanuel Diaz 2017'})}>
            <Text style={styles.welcome}>
             Welcome To
             </Text>
         </TouchableHighlight>
         <TouchableHighlight onPress={()=>navigate('FullList',{name:'Juan Emmanuel Diaz 2017'})}>
           <Text style={styles.titleHotel}>
              {"HotelCenter"}
            </Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

// module.exports = HomeScreen;
