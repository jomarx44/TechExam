/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import AppScrollView from '@root/components/AppScrollView';
import {colors, mediumFont, regularFont} from '@utils/constants';

const BottomSheetCategories = ({isVisible, onDismiss, items, onPress}) => {
  const renderItems = (item, index) => {
    const isLastItem = index === items.length - 1;
    const itemOnPress = () => onPress(item, index);
    return (
      <TouchableOpacity key={index} style={styles.item} onPress={itemOnPress}>
        <Text style={styles.itemText}>{item}</Text>
        {!isLastItem && <View style={styles.itemSeparator} />}
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onDismiss}
      onSwipeComplete={onDismiss}
      style={styles.modal}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Categories</Text>
          <TouchableOpacity onPress={onDismiss} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleSeparator} />
        <AppScrollView style={{height: '30%'}}>
          {items?.map(renderItems)}
        </AppScrollView>
      </View>
    </Modal>
  );
};

export default BottomSheetCategories;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '30%',
  },
  closeButton: {
    color: colors.black,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  closeButtonText: {
    fontSize: 20,
    color: colors.greyDark,
    transform: [{scaleX: 1.2}],
  },
  titleSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  item: {
    paddingVertical: 12,
    padding: 24,
  },
  itemText: {
    ...regularFont(16, 16),
    color: colors.black,
  },
  itemSeparator: {
    paddingTop: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
  },
  title: {
    ...mediumFont(18, 18),
    color: colors.black,
  },
});
