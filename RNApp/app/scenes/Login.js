import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, List, Button } from 'native-base';
import Navbar from '../components/Navbar';

import { InputIconLabel } from '../components/FormFields';

import styles from '../styles/PageStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
let Login = (props) => {

    // console.log('Login', props);

    const right = {
        icon: "ios-close",
        onPress: Actions.pop
    };

    return (
        <Container>
            <Navbar role="header" title="Login" right={right} />

            <View style={styles.content}>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Login now!</Text>
                </View>

                <View style={[styles.subContainer, {justifyContent: 'flex-start'}]}>

                    <List style={styles.listLogin}>
                        <Field
                            name="email"
                            placeholder="E-MAIL"
                            iconName="ios-person"
                            component={ InputIconLabel }
                        />

                        <Field
                            name="password"
                            placeholder="PASSWORD"
                            iconName="ios-unlock"
                            secureTextEntry={true}
                            component={ InputIconLabel }
                        />

                        <Button
                            block
                            style={{marginTop: 21}}
                            onPress={ props.handleSubmit((data) => {
                                props.loginWithEmail(data)
                            }) }
                        >
                            Submit
                        </Button>
                    </List>

                </View>

                <View style={[styles.subContainer, {justifyContent: 'flex-end'}]}>
                    <Button
                        block
                        warning
                        transparent
                        style={{marginTop: 21}}
                        textStyle={{color: '#007AFF'}}
                        onPress={ Actions.register }
                    >
                        Not a member? Create an account
                    </Button>
                </View>

            </View>

        </Container>
    );
};

Login = reduxForm({
    form: 'loginForm',
    // validate -> validation function name to define with (values) as parameters
})(Login);

export default Login;