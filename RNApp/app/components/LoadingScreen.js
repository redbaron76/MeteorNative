import React, { Component } from 'react';
import styles from '../styles/PageStyle';
import { Container, View, Text } from './';

const LoadingScreen = ({message}) => {

    return (
        <Container>
            <View style={styles.content}>
                <View style={styles.subContainer}>
                    <Text style={styles.heading}>{message}</Text>
                </View>
            </View>
        </Container>
    );

};

export default LoadingScreen;