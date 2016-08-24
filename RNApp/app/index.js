import React, { Component } from 'react';

import settings from './config/settings';
import Meteor, { createContainer } from 'react-native-meteor';

import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import getStoreWithMiddleware from './store';
import scenes from './config/scenes';

import SideMenu from './containers/SideMenuContainer';

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

// Connect Router to Redux
const RouterWithRedux = connect(mapStateToProps)(Router);

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