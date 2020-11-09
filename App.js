
import 'react-native-gesture-handler';
import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import { useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { theme } from './constants';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  // caching all the images
  // for better performance on the app
  async function _cacheResourceAsync() {

    const images = [
      require("./assets/icons/back.png"),
      require("./assets/icons/plants.png"),
      require("./assets/icons/seeds.png"),
      require("./assets/icons/flowers.png"),
      require("./assets/icons/sprayers.png"),
      require("./assets/icons/pots.png"),
      require("./assets/icons/fertilizers.png"),
      require("./assets/images/plants_1.png"),
      require("./assets/images/plants_2.png"),
      require("./assets/images/plants_3.png"),
      require("./assets/images/explore_1.png"),
      require("./assets/images/explore_2.png"),
      require("./assets/images/explore_3.png"),
      require("./assets/images/explore_4.png"),
      require("./assets/images/explore_5.png"),
      require("./assets/images/explore_6.png"),
      require("./assets/images/illustration_1.png"),
      require("./assets/images/illustration_2.png"),
      require("./assets/images/illustration_3.png"),
      require("./assets/images/avatar.png")
    ];  

    const cacheImages = images.map(image=> {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={_cacheResourceAsync}
        onError={error => console.error(error)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <NavigationContainer theme={defaultTheme}>
      <MyStack />
    </NavigationContainer>
  );
}

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: theme.colors.white
  }
};