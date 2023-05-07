import React from 'react';
import {View, Modal, StyleSheet, Text, ActivityIndicator} from 'react-native';

export default function Loader({isShown}) {
  return isShown ? (
    <View style={styles.mainContainer}>
      <Modal animationType="none" transparent>
        <View style={styles.contentContainer}>
          <ActivityIndicator color="#000" />
        </View>
      </Modal>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
