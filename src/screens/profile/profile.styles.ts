import {StyleSheet} from 'react-native';
import {globalColors} from '../../index.styles';

export const styles = StyleSheet.create({
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: globalColors.lighter,
    backgroundColor: globalColors.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 75,
    color: globalColors.white,
  },
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
