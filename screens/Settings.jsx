import React from 'react';
import { Image } from 'react-native';
import Slider from 'react-native-slider';
import { AppText, Block, Button, Divider, SwitchInput } from '../components';
import { StyleSheet } from 'react-native';
import { mocks, theme } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function Settings({ navigation, ...props }) {
    const [budget, setBudget] = useState(850);
    const [monthlyCap, setMonthlyCap] = useState(1700);
    const [notify, setNotify] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const { profile } = props;

    return (
        <Block style={styles.root}>
            <Block flex={false} center space="between" row style={styles.header}>
                <AppText h1>Settings</AppText>
                <Button
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Image
                        source={profile.avatar}
                        style={styles.avatar}
                    />
                </Button>
            </Block>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Block style={styles.inputs}>

                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <AppText gray2 style={{ marginBottom: 10}}>Username</AppText>
                            <AppText bold>Iakimova Daria</AppText>
                        </Block>
                        <AppText medium secondary>
                            Edit
                        </AppText>
                    </Block>

                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <AppText gray2 style={{ marginBottom: 10}}>Location</AppText>
                            <AppText bold>Russian, Chita</AppText>
                        </Block>
                        <AppText medium secondary>
                            Edit
                        </AppText>
                    </Block>

                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <AppText gray2 style={{ marginBottom: 10}}>E-mail</AppText>
                            <AppText bold>iakim.daria@gmail.com</AppText>
                        </Block>
                        <AppText medium secondary>
                            Edit
                        </AppText>
                    </Block>

                </Block>

                <Divider />

                <Block style={styles.sliders}>
                    <Block margin={[10, 0]}>
                        <AppText gray2 style={{ marginBottom: 10}}>Budget</AppText>
                        <Slider 
                            minimumValue={0}
                            maximumValue={1000}
                            style={{ height: 19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{ height: 6, borderRadius: 6}}
                            value={budget}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor="rgba(156, 163, 180, 0.10)"
                            onValueChange={setBudget}
                        />
                        <AppText caption gray2 right>${budget.toFixed(0)}</AppText>
                    </Block>

                    <Block margin={[10, 0]}>
                        <AppText gray2 style={{ marginBottom: 10}}>Monthly Cap</AppText>
                        <Slider 
                            minimumValue={0}
                            maximumValue={5000}
                            style={{ height: 19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{ height: 6, borderRadius: 6}}
                            value={monthlyCap}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor="rgba(156, 163, 180, 0.10)"
                            onValueChange={setMonthlyCap}
                        />
                        <AppText caption gray2 right>${monthlyCap.toFixed(0)}</AppText>
                    </Block>

                    <Divider />

                    <Block style={styles.toggles}>
                        <Block row center space="between" margin={[0, 0, 20, 0]}>
                            <AppText size={16} gray2>Notifications</AppText>
                            <SwitchInput
                                value={notify}
                                onValueChange={setNotify}
                            />
                        </Block>

                        <Block row center space="between" margin={[0, 0, 20, 0]}>
                            <AppText size={16} gray2>Newsletter</AppText>
                            <SwitchInput
                                value={newsletter}
                                onValueChange={setNewsletter}
                            />
                        </Block>
                    </Block>

                </Block>

            </ScrollView>
        </Block>
    )
}

Settings.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories
};

const styles = StyleSheet.create({
    root: {
        paddingVertical: theme.sizes.base * 2,
    },
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    inputs: {
        marginTop: theme.sizes.base * 0.6,
        paddingHorizontal: theme.sizes.base * 2
    },
    inputRow: {
        alignItems: 'flex-end'     
    },
    sliders: {
        marginTop: theme.sizes.base * 0.6,
        paddingHorizontal: theme.sizes.base * 2
    },
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: theme.colors.secondary
    },
    toggles: {
        
    }
});