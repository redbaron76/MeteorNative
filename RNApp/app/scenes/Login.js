import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content } from 'native-base';
import Navbar from '../components/Navbar';

import styles from '../styles/PageStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
const Login = (props) => {

    const right = {
        icon: "ios-close",
        onPress: Actions.pop
    };

    return (
        <Container>
            <Navbar role="header" title="Login" right={right} />
            {/*<Content style={styles.content}>*/}
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Text style={styles.heading}>Login now!</Text>
                    </View>
                    <View style={[styles.subContainer, {justifyContent: 'flex-start'}]}>
                        <Text style={[styles.text]}>Form here</Text>
                    </View>
                </View>
            {/*</Content>*/}
        </Container>
    );
};

export default Login;