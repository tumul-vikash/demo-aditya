/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import CartItem from '../../components/CartItem';

import {styles} from './styles';

const Cart = () => {
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('CART ITEMS').then(async res => {
      const data = await JSON.parse(res);
      console.log(data);
      setCartItems(data);
    });
  }, []);

  return CartItems === [] || CartItems == null ? (
    <Text
      style={{
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
      }}>
      No items available
    </Text>
  ) : (
    <FlatList
      data={CartItems}
      renderItem={({item}) => <CartItem item={item} />}
      numColumns={2}
      style={styles.container}
    />
  );
};

export default Cart;
