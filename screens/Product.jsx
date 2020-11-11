import React from 'react';
import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AppText, Block, Divider } from '../components';
import { mocks, theme } from '../constants';

const { width, height } = Dimensions.get('window');

function Gallery({ product }) {
    return (
        <FlatList 
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            data={product.images}
            keyExtractor={(item, index) => `${item}`}
            renderItem={({item}) => (
                <Image source={item} resizeMode="contain" style={{ width, height: height / 2.8}}/>
            )}
        />
    )
}

export default function Product({ navigation, ...props }) {
    const { product } = props;
    return (
        <Block>
            <Block flex={false} center row space="between" style={styles.header}>
                {/* <Image /> */}

            </Block>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Gallery product={product} />

                <Block style={[styles.product, styles.root]}>
                    <AppText h2>{product.name}</AppText>
                    <Block flex={false} row margin={[theme.sizes.base, 0]}>
                        {product.tags.map(tag => (
                            <AppText gray key={`tag-${tag}`} caption style={styles.tag}>{tag}</AppText>
                        ))}
                    </Block>
                    <AppText gray light height={22}>{product.description}</AppText>
                </Block>

                <Divider margin={[theme.sizes.padding * 0.9, 0]}/>

                <Block style={styles.root}>
                    <AppText semibold>Gallery</AppText>
                    <Block row margin={[theme.sizes.padding * 0.9, 0]}>
                        {product.images.slice(1, 3).map(
                            (image, index) => (
                                <Image 
                                    key={`gallery-${index}`}
                                    source={image}
                                    style={styles.image}
                                />
                            )
                        )}
                        <Block style={styles.more} flex={false} card center middle color="rgba(197, 204, 214, 0.20)">
                            <AppText gray>+{product.images.slice(3).length}</AppText>
                        </Block>
                    </Block>
                </Block>
            </ScrollView>
        </Block>
    )
}

Product.defaultProps = {
    product: mocks.products[0]
}

const styles = StyleSheet.create({
    root: {
        paddingTop: theme.sizes.base,
        paddingHorizontal: theme.sizes.base * 2
    },
    header: {
        paddingVertical: theme.sizes.base * 2
    },
    product: {

    },
    tag: {
        borderColor: theme.colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base * 0.95,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.base / 2,
        marginRight: theme.sizes.base * 0.625,
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base
    },
    more: {
        width: 55,
        height: 55
    }
})
