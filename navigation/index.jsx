import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Settins" component={Settings} />
    </Stack.Navigator>
  );
}

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'papayawhip',
  },
  headerBackImage: {},//<Image />
  headerBackTitle: null,
  haaderLeftContainerStyle: {},
  headerRightContainerStyle: {}
}

