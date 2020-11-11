import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText, Block } from '../components'
import { theme } from '../constants'

export default function Explore() {
    return (
        <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
            <Block bottom flex={0.1}>
                <AppText h1>Explore</AppText>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({})
