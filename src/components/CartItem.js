/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width;

const ProductsCard = props => {
  const {item} = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.images.medium.url,
        }}
        style={styles.image}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={styles.productName}>{item.binding}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#8400ff',
    margin: 10,
    borderRadius: 10,
    paddingBottom: 5,
  },
  image: {
    width: WIDTH / 2 - 30,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  productName: {
    color: '#000',
    margin: 5,
    fontSize: 15,
    fontWeight: '600',
    width: 100,
  },
});

export default ProductsCard;
