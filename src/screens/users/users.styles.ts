import {StyleSheet} from 'react-native';
import {globalColors} from '../../index.styles';

export const styles = StyleSheet.create({
  userItem: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: globalColors.tertiary,
    borderBottomWidth: 1,
    backgroundColor: globalColors.white,
  },
  pressed: {
    backgroundColor: globalColors.light,
  },
});
