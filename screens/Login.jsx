import React from 'react'
import { StyleSheet } from 'react-native'
import { AppText, Block, Input } from '../components'
import { theme } from '../constants'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Block>
            <Block bottom padding={[theme.sizes.base, theme.sizes.base * 2]} flex={0.1}>
                <AppText h1>Login</AppText>
            </Block>
            <Block>
                <Input
                    label="Email"
                    defaultValue={email}
                    onChangeText={text => setEmail(text)}
                />

                <Input
                    label="Password"
                    defaultValue={password}
                    onChangeText={text => setPassword(text)}
                />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({

})
