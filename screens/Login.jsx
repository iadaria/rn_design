import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Platform, Keyboard, ActivityIndicator} from 'react-native'
import { AppText, Block, Button, Input } from '../components'
import { theme } from '../constants'
import { useState } from 'react';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("jadarya@gmail.ru");
    const [password, setPassword] = useState("password");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        const errors = [];
        setErrors([]); setLoading(true);

        Keyboard.dismiss();

        setTimeout(() => {
            if (email !== "jadarya@gmail.ru") {
                errors.push('email');
            }
    
            if (password !== "password") {
                errors.push('password');
            }
    
            if (errors.length) {
                setErrors(errors);
                setLoading(false);
            } else {
                navigation.navigate("Browse");
                setLoading(false);
            }
        }, 2000);

    }

    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
    return (
        <KeyboardAvoidingView style={styles.login} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
                <Block bottom flex={0.1}>
                    <AppText h1>Login</AppText>
                </Block>
                <Block middle>
                    <Input
                        error={errors.includes('email')}
                        style={[styles.input, hasErrors('email')]}
                        label="Email"
                        defaultValue={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <Input
                        secure
                        error={errors.includes('password')}
                        style={[styles.input, hasErrors('password')]}
                        label="Password"
                        defaultValue={password}
                        onChangeText={text => setPassword(text)}
                    />
                    
                    <Button gradient onPress={handleLogin}>
                        {loading ?
                            <ActivityIndicator size="small" color="white"/> :
                            <AppText bold white center>Login</AppText>
                        }
                    </Button>

                    <Button onPress={() => navigation.navigate('Forgot')}>
                        <AppText gray caption center style={{ textDecorationLine: 'underline'}}>
                            Forgot your password?
                        </AppText>
                    </Button>
                </Block>
            </Block>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});
