import {StyleSheet} from 'react-native';
import {colors, mediumFont, regularFont} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  floatingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '10%',
    padding: 16,
    zIndex: 1,
    shadowColor: colors.black,
    backgroundColor: '#4C4C50',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5.46,
    elevation: 12,
  },
  cartText: {
    ...mediumFont(18, 18),
  },
  clearCartContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
    bottom: -12,
  },
  clearCartButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  clearCartText: {
    ...regularFont(12, 17),
    color: colors.white,
  },
  flatlistContainer: {margin: 5},
});
