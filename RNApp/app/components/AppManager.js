import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import scenes for the router
import scenes from '../config/scenes';

// Import Router wrapped by Redux connect
import RouterWithRedux from '../config/router';

// Import action to dispach authActions
import { loadUser } from '../actions/authActions';

// Import store with middleware
import getStoreWithMiddleware from '../store';

// Create a store with middleware
const store = getStoreWithMiddleware();

// TEMP
import { View, Text } from 'react-native';

// Verbose way to create Presentational components
class AppManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // Dispach first user status
        // store.dispatch(loadUser());

        switch (true) {

            // Not connected with the server
            case (!this.props.connected):
                return <Text>Not connected to the server!</Text>;

            // Loggin in user
            case (this.props.loggingIn):
                return <Text>Logging in...</Text>;

            // Connected - run router
            default:
                // Dispach first user status
                store.dispatch(loadUser());
                // Render the application
                return <Provider store={store}>
                    <RouterWithRedux scenes={scenes}/>
                </Provider>;
        }
    }
}

export default AppManager;