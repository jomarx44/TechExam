/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, mediumFont} from '../utils/constants';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';

const CartFlatlist = ({item, onPressRemove, onPressIncreDecre}) => {
  let colorButton = colors.greyDarker;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={onPressRemove}>
          <Icon name="close" size={15} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: item.imageUrl,
            }}
          />
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.unitPrice}>P {item.unitPrice}</Text>
        </View>
        <View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              disabled={item.quantity === 1}
              onPress={() => onPressIncreDecre(item, 'sub')}>
              <View
                style={{
                  ...styles.quantityChanger,
                  borderColor: item.quantity === 1 ? '#D9DBE0' : colorButton,
                }}>
                <Text
                  style={{
                    ...styles.quantityChangerText,
                    color: item.quantity === 1 ? '#D9DBE0' : colorButton,
                  }}>
                  -
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.itemLabel}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => onPressIncreDecre(item, 'add')}>
              <View
                style={{
                  ...styles.quantityChanger,
                  borderColor: colorButton,
                }}>
                <Text
                  style={{
                    ...styles.quantityChangerText,
                    color: colorButton,
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartFlatlist;

const styles = StyleSheet.create({
  itemLabel: {
    backgroundColor: '#fff',
    ...mediumFont(14, 18),
    color: colors.black,
    paddingHorizontal: 5,
    marginHorizontal: 8,
  },
  container: {justifyContent: 'center', alignItems: 'center'},
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.neutralGrey,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    padding: 5,
    width: '97%',
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  img: {height: 70, width: 70},
  productContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,
    width: '50%',
  },
  productName: {...mediumFont(14, 17)},
  unitPrice: {
    ...mediumFont(16, 18),
    color: colors.primary,
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityChanger: {
    borderRadius: 6,
    borderWidth: 1.25,
    paddingHorizontal: 8,
    paddingVertical: -8,
  },
  quantityChangerText: {
    fontSize: 14,
    lineHeight: 23,
  },
});
