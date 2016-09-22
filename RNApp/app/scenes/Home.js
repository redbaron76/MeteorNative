import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as s from '../styles/styles';
import {
    View,
    Text,
    ContainerWithMenu,
    Navbar,
    Button,
} from '../components';

// Verbose way to create Presentational components
class Home extends Component {

    _renderHelloMessage() {
        const message = (this.props.user) ? ", " + this.props.user.username : null;
        return (
            <Text style={s.styles.h1}>Welcome to MeteorNative{message}!</Text>
        );
    }

    _renderDummyLogin() {
        if (!this.props.user) {
            return (
                <Text style={s.styles.blackBox}>
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
                    textStyle={{color: s.color.link}}
                    onPress={ Actions.text }
                >
                    Long text scrolling
                </Button>
            );
        }
    }

    _renderLinkToFonts() {
        if (this.props.user) {
            return (
                <Button
                    block
                    transparent
                    textStyle={{color: s.color.link}}
                    onPress={ Actions.font }
                >
                    All available fonts
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
                    textStyle={{color: s.color.link}}
                    onPress={ Actions.list }
                >
                    Device infos
                </Button>
            );
        }
    }

    render() {

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
                <View style={s.styles.innerContainer}>
                    <View style={s.styles.sectionContainer}>
                        {this._renderHelloMessage()}
                    </View>
                    <View style={s.styles.sectionContainer}>
                        {this._renderLinkToText()}
                        {this._renderLinkToFonts()}
                        {this._renderLinkToList()}
                    </View>
                    <View style={[s.styles.sectionContainer, s.styles.withPadding(5), s.styles.onBottom]}>
                        <Text style={s.styles.jumboTron}>This is a boilerplate that aims to integrate together Meteor as backend, React Native as frontend and Redux as state manager.</Text>
                        {this._renderDummyLogin()}
                    </View>
                </View>
            </ContainerWithMenu>
        );
    }
 }

export default Home;