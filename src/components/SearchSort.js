import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {mediumFont} from '@utils/constants';
import {colors} from '../utils/constants';

const SearchAndSort = ({onPress, flag, changeText}) => {
  return (
    <View>
      <TextInput
        placeholder="Search Item"
        onChangeText={text => changeText(text)}
        style={styles.textInput}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          {flag ? (
            <Text style={styles.sortTextLow}>Sort price low to high</Text>
          ) : (
            <Text style={styles.sortTextLow}>Sort price high to low</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAndSort;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    padding: 10,
    borderColor: colors.greyDarker,
    borderWidth: 0.2,
    backgroundColor: colors.neutralGrey,
    borderRadius: 5,
  },
  container: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  sortText: {
    ...mediumFont(12, 14),
    color: colors.greyDarker,
  },
});
