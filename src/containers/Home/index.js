/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import ProductsCard from '../../components/ProductsCard';

import {data} from '../../utils/productsData';

import {styles} from './styles';

const Home = ({navigation}) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => <ProductsCard item={item} />}
        numColumns={2}
        style={styles.container}
      />
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={styles.CartButton}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.CartText}>Go To Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
