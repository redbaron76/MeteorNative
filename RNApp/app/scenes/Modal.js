import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import NavigationBar from 'react-native-navbar';
import NavbarButton from '../components/NavbarButton';

import styles from '../styles/PageStyle';

// Verbose way to create Presentational components
class Modal extends Component {

    constructor(props) {
        super(props);
    }

    static renderNavigationBar(props) {
        return (
            <View style={styles.navigationBarWrapper}>
                <NavigationBar
                    title={{title:props.title}}
                    statusBar={{hideAnimation:'slide', showAnimation:'slide'}}
                    rightButton={<NavbarButton {...props} role="back" icon="ios-close"/>}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Modal page</Text>
            </View>
        );
    }
 }

export default Modal;