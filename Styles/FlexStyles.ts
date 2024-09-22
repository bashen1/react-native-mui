import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

let FlexStyles = StyleSheet.create({
  winWidth: {
    width: width,
  },
  winHeight: {
    height: height,
  },
  //flex布局
  flexColumn: {
    flexDirection: 'column',
  },

  flexRow: {
    flexDirection: 'row',
  },

  flexItemsMiddle: {
    alignItems: 'center',
  },

  flexItemsTop: {
    alignItems: 'flex-start',
  },

  flexItemsBottom: {
    alignItems: 'flex-end',
  },

  flexItemsLeft: {
    justifyContent: 'flex-start',
  },

  flexItemsCenter: {
    justifyContent: 'center',
  },

  flexItemsRight: {
    justifyContent: 'flex-end',
  },

  flexSelfTop: {
    alignSelf: 'flex-start',
  },

  flexSelfMiddle: {
    alignSelf: 'center',
  },

  flexSelfBottom: {
    alignSelf: 'flex-end',
  },

  flexItemsAround: {
    justifyContent: 'space-around',
  },

  flexItemsEvenly: {
    justifyContent: 'space-evenly',
  },

  flexItemsBetween: {
    justifyContent: 'space-between',
  },

  flexNoWrap: {
    flexWrap: 'nowrap',
  },

  flexWrap: {
    flexWrap: 'wrap',
  },
});

export default FlexStyles;
