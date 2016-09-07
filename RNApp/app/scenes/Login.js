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
    InputIconLabel,
    Navbar,
    View,
    Text,
} from '../components';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
class Login extends Component {

    constructor(props) {
        super(props);
        //console.log('Login', props);
    }

    render() {

        const right = {
            role: 'close',
            // onPress: Actions.pop
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

                            <Button
                                block
                                style={{marginTop: 21}}
                                primary={errorColor(this.props.responseSubmit, 'primary')}
                                danger={errorColor(this.props.responseSubmit, 'danger')}
                                onPress={this.props.handleSubmit(this.props.loginWithEmail)}
                            >
                                {errorMessage(this.props.responseSubmit, "Submit")}
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