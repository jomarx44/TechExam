import React from 'react';
import {vs} from '@utils/scalingUtils';
import {regularFont, colors} from '@utils/constants';
import {StyleSheet, Text, View} from 'react-native';

const ToastMessage = ({
  visible,
  bottomPosition,
  message,
  setVisible,
  timeout = 2000,
}) => {
  React.useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible, setVisible, timeout]);

  if (visible) {
    return (
      <View style={{...styles.ToastWrapper, bottom: bottomPosition}}>
        <View style={styles.ToastContainer}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  ToastWrapper: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  ToastContainer: {
    margin: 20,
    backgroundColor: colors.greyDarker,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
  },
  text: {
    ...regularFont(12, 18),
    height: vs(18),
    color: colors.white,
  },
});
export default ToastMessage;
