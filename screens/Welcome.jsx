import React, { useRef, useState } from 'react';
import { theme } from '../constants';
import { Button, AppText, Block } from '../components';
import { Animated, Dimensions, FlatList, Image, Modal, StyleSheet, useWindowDimensions } from 'react-native';
import AppModal from '../components/AppModal';

//const { width, height } = Dimensions.get('window');

export function Welcome({ navigation }) {

  const [showTerms, setShowTerms] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width, height } = useWindowDimensions();
  const  illustrations = [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") }
  ];

  function renderIllustrations() {
    return(
      <FlatList 
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        
        extraData={showTerms}
        data={illustrations}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image 
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: 'visible', alignSelf: 'flex-end'}}
          />
        )}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX }} }],
            {useNativeDriver: false}
          )
        }
      />
    );
  }

  function renderSteps() {
    const stepPosition = Animated.divide(scrollX, width);
    return(
      <Block row middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp'
          });
          return (
            <Block 
              animated 
              flex={false} 
              key={`step-${index}`} 
              color="gray" 
              style={[ styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  return (
    <Block>
      
      <Block center bottom flex={0.35}>
        <AppText h1 center bold>
          Yout Home.
              <AppText h1 primary>Greener.</AppText>
        </AppText>
        <AppText h3 gray style={{ marginTop: theme.sizes.padding / 2 }}>
          Enjoy the experience.
        </AppText>
      </Block>

      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>

      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        
        <Button gradient onPress={() => navigation.navigate('Login')}>
          <AppText center semibold white>Login</AppText>
        </Button>
        
        <Button shadow onPress={() => navigation.navigate('Signup')}>
          <AppText center semibold>Signup</AppText>
        </Button>
        
        <Button onPress={() => { /* setShowTerms(true);  */}}>
          <AppText center caption gray>Terms of Service</AppText>
        </Button>

      </Block>

      <AppModal showTerms={showTerms} setShowTerms={setShowTerms}/>

    </Block>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    //borderWidth: 1, borderColor: 'black',
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});