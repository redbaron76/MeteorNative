import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import ReactNative from 'react-native';
const { Dimensions } = ReactNative;

// import SideMenu content component
import { SideMenuContent } from '../components';

// import SideMenu module
const SideMenu = require('react-native-side-menu');

const deviceScreen = Dimensions.get('window');

// Compact way to create Container -> connect creates container by default

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state, props) => {
    return {
        menu: <SideMenuContent/>,
        menuPosition: "right",
        disableGestures: false,
        isOpen: state.sideMenuState,
        onChange: (isOpen) => {
            if (isOpen) {
                props.onOpen();
            } else {
                props.onClose();
            }
        },
        openMenuOffset: deviceScreen.width - 50
    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

// this wraps the dumb component (Home is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);