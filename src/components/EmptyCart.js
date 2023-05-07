import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mediumFont} from '../utils/constants';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty cart</Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {...mediumFont(20, 24)},
});
