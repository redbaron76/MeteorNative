import React, { Component } from 'react';
import { Container, View, Text } from './';
import * as s from '../styles/styles';

const LoadingScreen = ({message}) => {

    return (
        <Container>
            <View style={s.styles.innerContainer}>
                <View style={s.styles.sectionContainer}>
                    <Text style={s.styles.h1}>{message}</Text>
                </View>
            </View>
        </Container>
    );

};

export default LoadingScreen;