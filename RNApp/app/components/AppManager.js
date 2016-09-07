import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import scenes for the router
import scenes from '../config/scenes';

// Import Router wrapped by Redux connect
import RouterWithRedux from '../config/router';

// Import store with middleware
import getStoreWithMiddleware from '../store';

// Create a store with middleware
const store = getStoreWithMiddleware();

import { userData } from '../actions/authActions';

// @todo: build Views for loading/not connected
import { View, Text } from './';

// Verbose way to create Presentational components
class AppManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // dispatch userData to authState
        // using store as MiniMongo
        store.dispatch(userData(this.props.user));

        switch (true) {

            // Not connected with the server
            case (!this.props.connected):
                return <Text>Not connected to the server!</Text>;

            // Connected - run router
            default:
                // Render the application
                return <Provider store={store}>
                    <RouterWithRedux scenes={scenes}/>
                </Provider>;
        }
    }

}

export default AppManager;