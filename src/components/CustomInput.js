import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CustomInput = props => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name={props.iconName} size={20} color="#000" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#000'}
        onChangeText={data => props.onChangeText(data)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    marginHorizontal: 20,
    padding: 5,
    //backgroundColor: '#f2f2f2',
    borderRadius: 20,
    borderColor: '#8400ff',
    marginTop: 20,
  },
  input: {
    color: '#000',
    fontWeight: '400',
    width: '93%',
  },
});

export default CustomInput;
