import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import SideMenu content component
import SideMenuContent from '../components/SideMenuContent';

// import dumb component to be wrapped by container
const SideMenu = require('react-native-side-menu');

// Compact way to create Container -> connect creates container by default

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {
        menu: <SideMenuContent/>,
        menuPosition: "right",
        disableGestures: false,
        isOpen: state.sideMenuState
    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

// this wraps the dumb component (Home is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);