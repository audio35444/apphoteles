import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
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
  navBarC: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  });
module.exports = styles;
