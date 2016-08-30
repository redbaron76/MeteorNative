import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';

import styles from '../styles/PageStyle';

class Profile extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Profile Page</Text>
                <View>

                </View>
            </View>
        );
    }
}

export default Profile;