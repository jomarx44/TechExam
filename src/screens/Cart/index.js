/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import CartFlatlist from '../../components/CartFlatlist';
import CartFooter from '../../components/CartFooter';
import EmptyCart from '../../components/EmptyCart';
import ToastMessage from '../../components/ToastMessage';
import {addToCart, clearCart} from '../../services/actions';
import {styles} from './style';

const Cart = () => {
  const {usersCart} = useSelector(state => state.shopReducer);
  const [isUsersCart, setUsersCart] = useState([]);
  const [isTotalItems, setTotalItems] = useState(0);
  const [isTotalAmount, setTotalAmount] = useState(0);
  const [isCartEmpty, setCartEmpty] = useState(false);
  const [isClearCartSuccess, setClearCartSuccess] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let totalItems = 0;
  let totalAmount = 0;
  useEffect(() => {
    if (usersCart.length > 0) {
      setUsersCart(usersCart);
    } else {
      setCartEmpty(true);
    }
  }, [navigation]);

  const onPressIncreDecre = (product, type) => {
    let newUserCart = [];
    isUsersCart.map((item, index) => {
      if (item.productName === product.productName) {
        let qty = type === 'add' ? item.quantity + 1 : item.quantity - 1;
        newUserCart.unshift({
          ...item,
          quantity: qty,
        });
      } else {
        newUserCart.push(item);
      }
    });
    setUsersCart(newUserCart);
    dispatch(addToCart(newUserCart));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    navigation.goBack();
  };
  const handleCheckoutPress = () => {
    dispatch(clearCart());
    Alert.alert('', 'Thank you for purchasing! XOXO', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  };
  const handleRemoveToCart = product => {
    let newUserCart = [];
    isUsersCart.map((item, index) => {
      if (item.productName !== product.productName) {
        newUserCart.push(item);
      }
    });
    if (isUsersCart.length === 1) {
      setCartEmpty(true);
    }
    setUsersCart(newUserCart);
    dispatch(addToCart(newUserCart));
  };
  return (
    <View style={styles.container}>
      <View style={styles.floatingHeader}>
        <Text style={styles.cartText}>My Cart</Text>
        <TouchableOpacity
          style={styles.closeButtonWrapper}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close" />
        </TouchableOpacity>
      </View>
      {!isCartEmpty && (
        <View style={styles.clearCartContainer}>
          <TouchableOpacity
            style={styles.clearCartButton}
            onPress={() => handleClearCart()}>
            <Text style={styles.clearCartText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>
      )}
      {isCartEmpty && <EmptyCart />}
      <View style={styles.flatlistContainer} />
      <FlatList
        data={isUsersCart}
        renderItem={({item, index}) => {
          let isLastIndex = isUsersCart.length - 1 === index;

          totalItems += parseInt(item.quantity);
          totalAmount += parseFloat(item.unitPrice * item.quantity);

          if (isLastIndex) {
            setTotalItems(totalItems);
            setTotalAmount(totalAmount);
          }

          return (
            <CartFlatlist
              item={item}
              onPressIncreDecre={onPressIncreDecre}
              onPressRemove={() => handleRemoveToCart(item)}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      {!isCartEmpty && (
        <CartFooter
          items={isTotalItems}
          amount={isTotalAmount}
          onPressCheckout={() => handleCheckoutPress()}
        />
      )}

      <ToastMessage
        visible={isClearCartSuccess}
        bottomPosition={10}
        message={'Clear cart success!'}
        setVisible={setClearCartSuccess}
      />
    </View>
  );
};

export default Cart;
