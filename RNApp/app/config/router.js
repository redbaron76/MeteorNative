// import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from 'react-native-router-flux';

import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {
        user: state.authState.user,
    };
};

// pass Actions creators as props to Router as 'rootProps' in scenes
// used by onChange callback in SideMenuContainer for triggering Redux change state
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openSideMenu,
        closeSideMenu
    }, dispatch);
};

// export default Router;
export default connect(mapStateToProps, mapDispatchToProps)(Router);