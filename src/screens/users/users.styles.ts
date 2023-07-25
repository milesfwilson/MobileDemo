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
  initials: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    marginRight: 20,
    borderRadius: 50,
    aspectRatio: 1,
  },
  initialsText: {
    color: 'white',
  },
  searchInput: {
    padding: 10,
    fontSize: 16,
    borderRadius: 30,
    margin: 10,
    backgroundColor: globalColors.white,
  },
});
