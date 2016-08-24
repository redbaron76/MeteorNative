import React, { Component } from 'react';
import Button from 'react-native-button';

import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';

import NavigationBar from 'react-native-navbar';
import NavbarButton from '../components/NavbarButton';

import styles from '../styles/PageStyle';

class Profile extends Component {

    constructor(props) {
        super(props);

        console.log('profile constructor', props);
    }

    static renderNavigationBar(props) {
        console.log('profile', props);
        return (
            <View style={styles.navigationBarWrapper}>
                <NavigationBar
                    title={{title:props.title}}
                    statusBar={{hideAnimation:'slide', showAnimation:'slide'}}
                    leftButton={<NavbarButton {...props} role="back" icon="ios-arrow-back" text="Back"/>}
                    rightButton={<NavbarButton {...props} role="right" icon="ios-menu" onPress={() => alert('Toggle menu')}/>}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Profile Page</Text>
                <View>
                    <Button
                        style={{fontSize: 20, color: 'green'}}
                        styleDisabled={{color: 'red'}}
                        onPress={Actions.pop}>
                        Back to List
                    </Button>
                </View>
            </View>
        );
    }
}

export default Profile;