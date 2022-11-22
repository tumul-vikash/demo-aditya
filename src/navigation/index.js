/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Cart from '../containers/cart';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Ecomm Demo',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#8400ff',
          },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
