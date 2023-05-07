import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, mediumFont, regularFont} from '../utils/constants';
import {Image} from 'react-native';

const HomeFlatlist = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item?.imageUrl,
          }}
        />
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={3}>
          {item.description}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Text style={styles.unitPrice}>P {item.unitPrice}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
          <Text style={styles.addToCart}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.neutralGrey,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
    padding: 5,
    width: '100%',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {height: 70, width: 70},
  productContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,
    width: '50%',
  },
  productName: {...mediumFont(14, 17)},
  productCategory: {
    ...regularFont(10, 18),
    color: colors.greenDark,
  },
  description: {
    ...regularFont(11, 14),
    color: colors.greyDarker,
  },
  unitPrice: {
    ...mediumFont(18, 25),
    color: colors.primary,
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: colors.greenDark,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addToCart: {
    ...regularFont(10, 17),
    color: colors.white,
  },
});
