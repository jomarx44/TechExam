import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, mediumFont} from '../utils/constants';
import {useNavigation} from '@react-navigation/core';
import {Icon, withBadge} from 'react-native-elements';

const HomeShopHeader = ({
  onPress,
  arrCategory,
  elementCategory,
  badgeCount,
}) => {
  const navigation = useNavigation();
  const BadgedIcon = withBadge(badgeCount)(Icon);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
        <Text
          style={{
            ...mediumFont(16, 18),
          }}>
          {arrCategory[elementCategory]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.cartButton}>
        <BadgedIcon name="shopping-cart" size={35} />
      </TouchableOpacity>
    </View>
  );
};
export default HomeShopHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.greyDarker,
    height: '13%',
    paddingTop: 30,
  },
  categoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutralGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cartButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
