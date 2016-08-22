import React, { Component } from 'react';
import Button from 'react-native-button';

import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';

import NavigationBar from 'react-native-navbar';
import NavbarButton from '../components/NavbarButton';

import styles from '../styles/PageStyle';

class List extends Component {

    constructor(props) {
        super(props);
    }

    static renderNavigationBar(props) {
        return (
            <View style={styles.navigationBarWrapper}>
                <NavigationBar
                    title={{title:props.title}}
                    statusBar={{hideAnimation:'slide', showAnimation:'slide'}}
                    leftButton={<NavbarButton {...props} role="back" text="Back" icon="ios-arrow-back"/>}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>List Page</Text>
                <View>
                    <Button
                        style={{fontSize: 20, color: 'green'}}
                        styleDisabled={{color: 'red'}}
                        onPress={Actions.pop}>
                        Back Home
                    </Button>
                </View>
            </View>
        );
    }
}

export default List;