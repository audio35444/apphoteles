/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/home/HomeScreen';
import FullList from './src/components/fullList/FullList';
import HotelDetail from './src/components/detail/hotelDetail.js';
const App = StackNavigator({
  Home: { screen: HomeScreen },
  FullList:{screen:FullList},
  HotelDetail:{screen:HotelDetail}
});

export default App;
