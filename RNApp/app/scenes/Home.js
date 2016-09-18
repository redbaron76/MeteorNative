import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import styles from '../styles/PageStyle';

import {
    View,
    Text,
    ContainerWithMenu,
    Navbar,
    Button,
} from '../components';

// Verbose way to create Presentational components
class Home extends Component {

    constructor(props) {
        super(props);
    }

    _renderHelloMessage() {
        const message = (this.props.user) ? ", " + this.props.user.username : null;
        return (
            <Text style={styles.heading}>Welcome to MeteorNative{message}!</Text>
        );
    }

    _renderDummyLogin() {
        if (!this.props.user) {
            return (
                <Text
                    style={[styles.text, {marginTop: 10, padding: 4, backgroundColor: '#000000'}]}
                >
                    Login with: test / test
                </Text>
            );
        }
    }

    _renderLinkToText() {
        if (this.props.user) {
            return (
                <Button
                    block
                    transparent
                    style={undefined}
                    textStyle={{color: '#007AFF'}}
                    onPress={ Actions.text }
                >
                    Show long text scrolling
                </Button>
            );
        }
    }

    _renderLinkToList() {
        if (this.props.user) {
            return (
                <Button
                    block
                    transparent
                    style={undefined}
                    textStyle={{color: '#007AFF'}}
                    onPress={ Actions.list }
                >
                    Show device infos
                </Button>
            );
        }
    }

    render() {

        // console.log('Home user', this.props.user);

        const left = {
            role: "login",
            onPress: (this.props.user) ? this.props.logout : Actions.login
        };

        const right = {
            role: "menu",
            onPress: this.props.openSideMenu
        };

        return (
            <ContainerWithMenu>
                <Navbar title={this.props.title} left={left} right={right} user={this.props.user} />
                <View style={styles.content}>
                    <View style={styles.subContainer}>
                        {this._renderHelloMessage()}
                    </View>
                    {this._renderLinkToText()}
                    {this._renderLinkToList()}
                    <View style={[styles.subContainer, {justifyContent: 'flex-end'}]}>
                        <Text style={[styles.text, {backgroundColor: '#b3b3b3', padding: 5}]}>This is a boilerplate that aims to integrate together Meteor as backend, React Native as frontend and Redux as state manager.</Text>
                        {this._renderDummyLogin()}
                    </View>
                </View>
            </ContainerWithMenu>
        );
    }
 }

export default Home;