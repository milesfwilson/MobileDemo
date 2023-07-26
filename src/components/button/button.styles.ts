import {StyleSheet} from 'react-native';
import {globalColors} from '../../index.styles';

export const styles = StyleSheet.create({
  pressable: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: globalColors.secondary,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: globalColors.white,
  },
  pressed: {
    backgroundColor: globalColors.light,
  },
});
