import React, { Component } from 'react';

import settings from './config/settings';
import Meteor, { createContainer } from 'react-native-meteor';

import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getStoreWithMiddleware from './store';
import scenes from './config/scenes';

// import SideMenu container and wrap router
import SideMenu from './containers/SideMenuContainer';
import { openSideMenu, closeSideMenu } from './actions/sideMenuActions';

// Connect Meteor DDP server
Meteor.connect(settings.METEOR_URL);

// Create a store with middleware
const store = getStoreWithMiddleware();

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {
        user: state.authState.user,
        loggingIn: state.authState.loggingIn,
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

// Connect Router to Redux
const RouterWithRedux = connect(mapStateToProps, mapDispatchToProps)(Router);

// Main App to be imported in index.ios e index.android
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SideMenu>
                    <RouterWithRedux scenes={scenes} />
                </SideMenu>
            </Provider>
        );
    }
}

export default App;