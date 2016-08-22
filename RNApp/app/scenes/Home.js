import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import NavigationBar from 'react-native-navbar';
import NavbarButton from '../components/NavbarButton';

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

    static renderNavigationBar(props) {
        return (
            <View style={styles.navigationBarWrapper}>
                <NavigationBar
                    title={{title:props.title}}
                    statusBar={{hideAnimation:'slide', showAnimation:'slide'}}
                    leftButton={<NavbarButton {...props} role="left" icon="ios-menu" onPress={() => alert('Side Menu')}/>}
                    rightButton={<NavbarButton {...props} role="right" text="Modal" onPress={Actions.modal}/>}
                />
            </View>
        )
    }

    render() {
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
    }
 }

export default Home;