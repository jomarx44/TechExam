import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, regularFont} from '../utils/constants';

const CartFooter = ({items, amount, onPressCheckout}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <Text>Total Items</Text>
        <Text>{items}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text>Total Amount</Text>
        <Text>{amount}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={onPressCheckout}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: colors.greyDarker,
    elevation: 5,
    height: '20%',
    justifyContent: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  checkoutButton: {
    backgroundColor: colors.greenDark,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkoutText: {
    ...regularFont(12, 17),
    color: colors.black,
  },
});
