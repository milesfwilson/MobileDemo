import {StyleSheet} from 'react-native';
import {globalColors} from '../../index.styles';

export const styles = StyleSheet.create({
  contactCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    margin: 15,
    padding: 20,
    borderRadius: 10,
  },
  contactMethods: {
    marginTop: 15,
    width: '100%',
  },
});
