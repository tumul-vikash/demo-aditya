/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

import styles from './styles';

const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Message, setMessage] = useState('');

  const onPress = () => {
    if (Email === '') {
      setMessage('Email cannot be empty');
    } else if (Password === '') {
      setMessage('Password cannot be empty');
    } else if (!Email.includes('@') || !Email.includes('.com')) {
      setMessage('Invalid Email');
    } else {
      if (Email === 'someone@example.com' && Password === 'pass123') {
        navigation.navigate('Home');
      } else {
        setMessage('Incorrect email or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#8400ff'} />
      <View style={styles.logo}>
        <Icon name="opencart" size={80} color="#000" />
        <Text
          style={{
            color: '#000',
            marginVertical: 10,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Ecomm Demo
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: -10,
          color: 'red',
        }}>
        {Message}
      </Text>
      <View style={styles.inputs}>
        <CustomInput
          iconName={'email'}
          placeholder={'Email'}
          onChangeText={email => setEmail(email)}
        />
        <CustomInput
          iconName={'lock'}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={password => setPassword(password)}
        />
        <CustomButton title="Signin" onPress={() => onPress()} />
      </View>
    </View>
  );
};

export default Login;
