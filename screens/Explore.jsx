import React, { useRef, useState } from 'react'
import { Dimensions, StyleSheet, Image, Animated, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AppText, Block, Button, Input } from '../components'
import { mocks, theme } from '../constants'
//mport { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');

function Sercher({ searching, setSearching }) {
    const searchFocus = useRef(new Animated.Value(0.6)).current;
    const isEditing = searchFocus && searching;

    function handleSearchFocus(status) {
        Animated.timing(
            searchFocus,
            {
                toValue: status ? 0.8 : 0.6,
                duration: 150,
                useNativeDriver: false
            }
        ).start()
    }

    return (
        <Block animated middle flex={searchFocus} style={styles.search}>
            <Input
                style={styles.searchInput}
                placeholder="Search"
                placeholserTextColor={theme.colors.gray}
                onChangeText={setSearching}
                onFocus={() => handleSearchFocus(true)}
                onBlur={() => handleSearchFocus(false)}
                onRightPress={() => isEditing ? setSearching(null) : null}
                value={searching}
                rightStyle={styles.searchRight}
                rightLabel={
                    <FontAwesome 
                        name={isEditing ? "close" : "search"}
                        size={theme.sizes.base / 1.6}
                        color={theme.colors.gray2}
                        backgroundColor="transparent"
                        style={styles.searchIcon}
                    >
                    </FontAwesome>
                }
            />
        </Block>
    );
}

function AppImage({ img, navigation }) {
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - (theme.sizes.base * 4);
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 72 ? fullWidth : sizes.width * 1.1;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Product')}
        >
            <Image 
                source={img} 
                style={[
                    styles.image, 
                    { minWidth: imgWidth, maxWidth: imgWidth}
                ]} 
            />
        </TouchableOpacity>
    );
}

function Explorer({ navigation, ...props }) {
    const { images } = props;
    const mainImage = images[0];
    return (
        <Block style={{ marginBottom: height / 2.5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <Image source={mainImage} style={[styles.image, styles.mainImage]} />
            </TouchableOpacity>
            <Block row space="between" wrap>
                { images.slice(1).map((img, index) => <AppImage key={index} img={img} navigation={navigation}/>)}
            </Block>
        </Block>
    );
}

Explorer.defaultProps = {
    images: mocks.explore
}

function Footer() {
    return (
        <LinearGradient 
            locations={[0, 0.6]}
            style={styles.footer}
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 30)']}
        >
            <Button gradient style={{ width: width / 3}}> 	
                <AppText bold white center>Filters</AppText> 
            </Button>
        </LinearGradient>
    );
}

export default function Explore({ navigation }) {
    const [searching, setSearching] = useState(null);

    return (
        <Block style={styles.root}>
            <Block flex={false} center row space="between" style={styles.header}>
                <AppText h1 center>Explore</AppText>
                <Sercher searching={searching} setSearching={setSearching}/>
            </Block>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Explorer navigation={navigation} />
            </ScrollView>

            <Footer />
        </Block>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingTop: theme.sizes.base,
        paddingHorizontal: theme.sizes.base * 2
    },
    header: {
        paddingVertical: theme.sizes.base * 2
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: 'transparent'
    },
    searchIcon: {
        position: 'absolute',
        right: theme.sizes.base / 1.3,
        top: theme.sizes.base / 1.6
    },
    explore: {
        marginHorizontal: theme.sizes.base * 2
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - (theme.sizes.base * 2),
        marginBottom: theme.sizes.padding,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - (theme.sizes.base * 2),
        maxHeight: width - (theme.sizes.base * 2)
    },  
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        width,
        paddingBottom: theme.sizes.base * 4
    }
})
