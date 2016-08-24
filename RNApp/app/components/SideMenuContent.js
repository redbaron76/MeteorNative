import React from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles/SideMenuStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
const SideMenuContent = (props) => {

    return (
        <View style={styles.container}>
            <Text>SideMenu Content!</Text>
        </View>
    );
};

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state, props) => {
    return {

    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

// export default SideMenuContent;
export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContent);