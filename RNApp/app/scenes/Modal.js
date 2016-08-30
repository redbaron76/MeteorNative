import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/PageStyle';

// Verbose way to create Presentational components
class Modal extends Component {

    constructor(props) {
        super(props);
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