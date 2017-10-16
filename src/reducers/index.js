import {combineReducers} from 'redux';
import HotelReducer from './HotelReducer.js';

export default combineReducers({
  hoteles:HotelReducer
});
