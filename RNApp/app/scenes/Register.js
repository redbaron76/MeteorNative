import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { Form, Field } from '../components/Form';
import * as s from '../styles/styles';

import {
    Container,
    Button,
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
        <Container loading={props.loading}>
            <Navbar title={props.title} left={left} />
            <View style={s.styles.innerContainer}>
                <View style={s.styles.sectionContainer}>
                    <Text style={s.styles.h1}>Sign-up now!</Text>
                </View>
                <View style={[s.styles.sectionContainer, s.styles.onTop, { flex: 2 }]}>
                    <Form errorMessage={props.responseSubmit}>
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
                            onPress={props.handleSubmit(props.registerByEmail)}
                        >
                            Register
                        </Button>
                    </Form>
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