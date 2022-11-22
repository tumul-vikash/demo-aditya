import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableHighlight
      underlayColor={'none'}
      style={styles.button}
      onPress={() => props.onPress()}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8400ff',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CustomButton;
