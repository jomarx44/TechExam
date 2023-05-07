/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Online Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
