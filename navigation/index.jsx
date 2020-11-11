import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { Image, TouchableHighlight } from 'react-native';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Signup from '../screens/Signup';
import { theme } from '../constants';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const defaultNavigationOptions = {
  headerStyle: {
    height: theme.sizes.base * 5,
    //borderWidth: 1, borderColor: 'red',
    backgroundColor: theme.colors.white,
    borderBottomColor: "transparent",
    elevation: 0, //android
    shadowOffset: { height: 0, width: 0 }
  },
  //headerBackImage: () => (<Image source={require('../assets/icons/back.png')} />),
  headerLeft: ({ canGoBack, onPress }) => (
    canGoBack && (
      <TouchableHighlight onPress={onPress} style={{ borderWidth: 1, borderColor: 'green'}}>
        <Image source={require('../assets/icons/back.png')} />
      </TouchableHighlight>
    )
  ),
  title: null,
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    alignItems: 'center',
    marginLeft: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 3,
    paddingRight: theme.sizes.base
  },
  headerRightContainerStyle: {},
};

const withoutHeader = {
  ...defaultNavigationOptions,
  //headerShown: false
};