import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {View, Text} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { loginWithFacebook, logout } from '../actions/authActions';
import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

import styles from '../styles/SideMenuStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
const SideMenuContent = (props) => {
    console.log('SideMenuContent:', props);
    return (!!props.user) ? <View style={styles.container}>
        <Text>SideMenu Content!</Text>
    </View> : null;
};

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state, props) => {
    return {
        user: state.authState.user,
        connected: state.authState.connected,
        loggingIn: state.authState.loggingIn,
    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openSideMenu,
        closeSideMenu,
        loginWithFacebook,
        logout
    }, dispatch);
};

// export default SideMenuContent;
export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContent);