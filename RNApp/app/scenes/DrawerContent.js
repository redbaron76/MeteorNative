import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles/DrawerStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
const DrawerContent = (props) => {

    return (
        <View>
            <View>
                <Text>Drawer Content!</Text>
            </View>
        </View>
    );
};

export default DrawerContent;