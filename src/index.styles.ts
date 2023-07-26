import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#6B9080',
  secondary: '#A4C3B2',
  tertiary: '#CCE3DE',
  light: '#EAF4F4',
  lighter: '#F6FFF8',
  white: 'white',
  black: 'black',
};

export const globalStyles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxShadow: {
    shadowColor: globalColors.black,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  header: {
    fontWeight: '500',
    fontSize: 16,
  },
});
