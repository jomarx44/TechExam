/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheetCategories from '../../components/BottomSheetModal';
import HomeShopHeader from '../../components/Header';
import HomeFlatlist from '../../components/HomeFlatlist';
import SearchAndSort from '../../components/SearchSort';
import ToastMessage from '../../components/ToastMessage';
import {addToCart} from '../../services/actions';
import {CategoryList} from '../../utils/items';
import {styles} from './style';

const Home = () => {
  const {usersCart} = useSelector(state => state.shopReducer);
  const [isCategory, setCategory] = useState([]);
  const [isSelectedCategory, setSelectedCategory] = useState(0);
  const [isLowtoHigh, setLowtoHigh] = useState(true);
  const [isBottomSheetEnabled, setBottomSheetEnabled] = useState(false);
  const [isArrList, setArrList] = useState([]);
  const [isMyCart, setMyCart] = useState(usersCart);
  const [isAddToCartSuccess, setAddToCartSuccess] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isCategory?.length <= 0 || isArrList?.length <= 0) {
      let list = [];
      CategoryList.map((item, idx) => {
        if (!list.includes(item.category)) {
          list.push(item.category);
        }
      });
      list.unshift('All items');
      setCategory(list);
      setArrList(CategoryList);
    }
  }, []);
  useEffect(() => {
    setMyCart(usersCart);
  }, [usersCart]);

  const handleSortByCategories = category => {
    let tempArr = [];
    CategoryList.map((item, idx) => {
      if (item.category === category) {
        tempArr.push(item);
      } else if (category === 'All items') {
        tempArr.push(item);
      }
    });
    setArrList(tempArr);
  };

  const handleAddToCart = ({id, imageUrl, productName, unitPrice}) => {
    let myCart = [];
    if (isMyCart.length > 0) {
      let existing = false;
      isMyCart.map((items, idx) => {
        const isLastIndex = isMyCart.length - 1 === idx;
        if (items.productName === productName) {
          myCart.push({
            id: items?.id,
            imageUrl: items.imageUrl,
            productName: items.productName,
            unitPrice: items.unitPrice,
            quantity: items.quantity + 1,
          });
          existing = true;
        } else {
          myCart.push({
            id: items?.id,
            imageUrl: items.imageUrl,
            productName: items.productName,
            unitPrice: items.unitPrice,
            quantity: items.quantity ? items.quantity : 1,
          });
          if (isLastIndex && !existing) {
            myCart.unshift({
              id,
              imageUrl,
              productName,
              unitPrice,
              quantity: 1,
            });
          }
        }
      });
    } else {
      myCart.push({
        id,
        imageUrl,
        productName,
        unitPrice,
        quantity: 1,
      });
    }
    setAddToCartSuccess(true);
    setMyCart(myCart);
    dispatch(addToCart(myCart));
  };
  const handleChangeText = text => {
    let searchArr = CategoryList.filter(items =>
      items.productName.toLowerCase().includes(text.toLowerCase()),
    );
    setArrList(searchArr);
  };
  return (
    <View style={styles.container}>
      <HomeShopHeader
        badgeCount={usersCart.length}
        arrCategory={isCategory}
        elementCategory={isSelectedCategory}
        onPress={() => setBottomSheetEnabled(true)}
      />
      <SearchAndSort
        changeText={handleChangeText}
        onPress={() => setLowtoHigh(!isLowtoHigh)}
        flag={isLowtoHigh}
      />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={isArrList.sort((a, b) =>
            a.unitPrice > b.unitPrice
              ? isLowtoHigh
                ? 1
                : -1
              : isLowtoHigh
              ? -1
              : 1,
          )}
          renderItem={({item, index}) => (
            <HomeFlatlist
              key={index}
              item={item}
              onPress={() => handleAddToCart(item)}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <ToastMessage
        visible={isAddToCartSuccess}
        bottomPosition={10}
        message={'Add to cart success!'}
        setVisible={setAddToCartSuccess}
      />
      <BottomSheetCategories
        onDismiss={() => setBottomSheetEnabled(false)}
        isVisible={isBottomSheetEnabled}
        items={isCategory}
        onPress={(item, idx) => {
          setSelectedCategory(idx);
          handleSortByCategories(item);
          setBottomSheetEnabled(false);
        }}
      />
    </View>
  );
};

export default Home;
