import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';


import styles from '../styles/PageStyle';

class List extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>List Page</Text>
                <View>

                </View>
            </View>
        );
    }
}

export default List;