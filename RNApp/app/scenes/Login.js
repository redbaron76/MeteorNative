import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { Form, Field } from '../components/Form';
import * as s from '../styles/styles';
import {
    Container,
    Button,
    InputIconLabel,
    Navbar,
    View,
    Text,
} from '../components';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
class Login extends Component {

    render() {

        const right = {
            role: 'close',
            onPress: Actions.pop
        };

        return (
            <Container loading={this.props.loading}>
                <Navbar title={this.props.title} right={right} />
                <View style={s.styles.innerContainer}>
                    <View style={s.styles.sectionContainer}>
                        <Text style={s.styles.h1}>Login now!</Text>
                    </View>
                    <View style={[s.styles.sectionContainer, s.styles.onTop]}>
                        <Form errorMessage={this.props.responseSubmit}>
                            <Field
                                name="email"
                                placeholder="E-MAIL"
                                iconName="ios-person"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                component={ InputIconLabel }
                            />
                            <Field
                                name="password"
                                placeholder="PASSWORD"
                                iconName="ios-unlock"
                                secureTextEntry={true}
                                component={ InputIconLabel }
                            />
                            <Button block onPress={this.props.handleSubmit(this.props.loginWithEmail)}>
                                Submit
                            </Button>
                        </Form>
                    </View>
                    <View style={[s.styles.sectionContainer, s.styles.onBottom]}>
                        <Button
                            block
                            transparent
                            textStyle={{color: s.color.link}}
                            onPress={ Actions.register }
                        >
                            Not a member? Create an account
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }

    componentDidMount() {
        // Recover session when reload
        if (this.props.user) {
            Actions.pop();
        }
    }

}

const LoginForm = reduxForm({
    form: 'loginForm',
    // validate -> validation function name to define with (values) as parameters
})(Login);

export default LoginForm;