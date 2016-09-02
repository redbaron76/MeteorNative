import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, List, Button } from 'native-base';
import Navbar from '../components/Navbar';

import { InputInlineLabel } from '../components/FormFields';

import styles from '../styles/PageStyle';


// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
let Register = (props) => {

    const left = {
        label: "Back",
        icon: "ios-arrow-back",
        onPress: Actions.pop
    };

    return (
        <Container>
            <Navbar role="header" title="Register" left={left} />

            <View style={styles.content}>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Sign-up now!</Text>
                </View>

                <View style={[styles.subContainer, {flex: 2, justifyContent: 'flex-start'}]}>

                    <List style={styles.listLogin}>

                        <Field
                            inlineLabel
                            name="name"
                            placeholder="Your name"
                            label="NAME"
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            name="email"
                            placeholder="your@email.com"
                            keyboardType="email-address"
                            label="E-MAIL"
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            secureTextEntry
                            name="password"
                            type="password"
                            label="PASSWORD"
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            secureTextEntry
                            name="check_password"
                            type="password"
                            label="CONFIRM IT"
                            component={ InputInlineLabel }
                        />


                        <Button
                            block
                            style={{marginTop: 21}}
                            onPress={ props.handleSubmit((data) => {
                                props.registerByEmail(data)
                            }) }
                        >
                            Register
                        </Button>
                    </List>

                </View>

            </View>

        </Container>
    );
};

// Decorate Register component with reduxForm wrapper
// Use 'let' to define the dumb component
Register = reduxForm({
    form: 'registerForm',
    // validate -> validation function name to define with (values) as parameters
})(Register);

export default Register;