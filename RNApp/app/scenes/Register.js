import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';

import { errorMessage, errorColor } from '../utils';
import styles from '../styles/PageStyle';

import {
    Container,
    List,
    Button,
    Field,
    InputInlineLabel,
    Navbar,
    View,
    Text,
} from '../components';

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
            <Navbar title={props.title} left={left} />

            <View style={styles.content}>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Sign-up now!</Text>
                </View>

                <View style={[styles.subContainer, {flex: 2, justifyContent: 'flex-start'}]}>

                    <List style={styles.listLogin}>

                        <Field
                            inlineLabel
                            name="username"
                            placeholder="Username"
                            label="USERNAME"
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            name="email"
                            label="E-MAIL"
                            placeholder="your@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            name="password"
                            type="password"
                            label="PASSWORD"
                            secureTextEntry={true}
                            component={ InputInlineLabel }
                        />

                        <Field
                            inlineLabel
                            name="checkPassword"
                            type="password"
                            label="CONFIRM IT"
                            secureTextEntry={true}
                            component={ InputInlineLabel }
                        />

                        <Button
                            block
                            style={{marginTop: 21}}
                            primary={errorColor(props.responseSubmit, 'primary')}
                            danger={errorColor(props.responseSubmit, 'danger')}
                            onPress={props.handleSubmit(props.registerByEmail)}
                        >
                            {errorMessage(props.responseSubmit, "Register")}
                        </Button>
                    </List>

                </View>

            </View>

        </Container>
    );
};

// Decorate Register component with reduxForm wrapper
// Use 'let' to define the dumb component
const RegisterForm = reduxForm({
    form: 'registerForm',
    // validate -> validation function name to define with (values) as parameters
})(Register);

export default RegisterForm;