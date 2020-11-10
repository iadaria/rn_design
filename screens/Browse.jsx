import React, { useState } from 'react';
import { AppText, Badge, Block, Button, Card } from '../components';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { mocks, theme } from '../constants';
import { categories } from '../constants/mocks';

export default function Browse({ navigation, ...props }) {
    const [active, setActive] = useState("Products");
    const { profile } = props;
    const tabs = ['Products', 'Inspirations', 'Shop'];

    function renderTab(tab) {
        const isActive = active === tab;

        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => setActive(tab)}
                style={[
                    styles.tab,
                    isActive ? styles.active : null
                ]}
            >
                <AppText size={16} medium gray={!isActive} secondary={isActive}>
                    {tab}
                </AppText>
            </TouchableOpacity>
        )
    }

    return (
        <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
            <Block flex={false} center space="between" row>
                <AppText h1 bold>Browse</AppText>
                <Button
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Image
                        source={profile.avatar}
                        style={styles.avatar}
                    />
                </Button>
            </Block>

            <Block flex={false} row style={styles.tabs}>
                {tabs.map(tab => renderTab(tab))}
            </Block>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: theme.sizes.base * 2 }}
            >
                <Block flex={false} row space="between" style={styles.categories}>
                    {categories.map(category => {
                        return (
                            <TouchableOpacity
                                key={category.name}
                                onPress={() => navigation.navigate('Explore', { category })}
                            >
                                <Card center middle shadow style={styles.category}>
                                    <Badge margin={[0, 0, 15]} size={50} color="rgba(41, 216, 143, 0.20)">
                                        <Image
                                            source={category.image}
                                        />
                                    </Badge>
                                    <AppText medium height={20}>{category.name}</AppText>
                                    <AppText gray caption>{category.count} products</AppText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })}
                </Block>

            </ScrollView>

        </Block>
    );
}

Browse.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3
    },
    categories: {
        flexWrap: 'wrap',
        paddingHorizontal: theme.sizes.base,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        width: 150,
        height: 150
    }
});