import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container } from 'native-base';
import Navbar from '../components/Navbar';

import styles from '../styles/PageStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
/*const Home = (props) => {

    console.log('Home', props);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome!</Text>
            <View>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={ Actions.list }>
                    Go to List
                </Button>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.text} >This is a boilerplate that aims to integrate Meteor, React Native and Redux.</Text>
            </View>
        </View>
    );
};*/


// Verbose way to create Presentational components
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Home props', this.props);

        const left = {
            label: "Login",
            onPress: Actions.login
        };

        const right = {
            icon: "ios-menu",
        };

        return (
            <Container>
                <Navbar role="header" title="Home Page" left={left} right={right} />
                {/*<Content style={styles.content}>*/}
                    <View style={styles.container}>
                        <View style={styles.subContainer}>
                            <Text style={styles.heading}>Welcome MeteorNative!</Text>
                        </View>
                        <View style={[styles.subContainer, {justifyContent: 'flex-start'}]}>
                            <Text style={[styles.text, {backgroundColor: '#b3b3b3', padding: 5}]}>This is a boilerplate that aims to integrate together Meteor as backend, React Native as frontend and Redux for managing state.</Text>
                            <Text style={[styles.text, {marginTop: 10, padding: 4, backgroundColor: '#000000'}]}>Login with: test / test</Text>
                        </View>
                    </View>
                {/*</Content>*/}
            </Container>
        );
    }
 }

export default Home;