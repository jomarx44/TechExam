import {StyleSheet} from 'react-native';
import {boldFont, colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {
    ...boldFont(25, 28),
  },
});
