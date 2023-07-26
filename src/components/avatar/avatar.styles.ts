import {StyleSheet} from 'react-native';
import {globalColors} from '../../index.styles';

export const styles = StyleSheet.create({
  initials: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  initialsText: {
    color: 'white',
  },
  small: {
    width: 40,
    borderRadius: 50,
  },
  smallInitials: {
    fontSize: 16,
  },
  largeInitials: {
    fontSize: 75,
  },
  large: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: globalColors.lighter,
  },
});
