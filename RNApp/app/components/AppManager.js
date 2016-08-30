import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import SideMenu container
import SideMenu from '../containers/SideMenuContainer';

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
                return null;

            // Loggin in user
            case (this.props.loggingIn):
                return null;

            // Connected - run router
            default:
                // Dispach first user status
                store.dispatch(loadUser());
                // Render the application
                return <Provider store={store}>
                    <SideMenu>
                        <RouterWithRedux scenes={scenes}/>
                    </SideMenu>
                </Provider>;
        }
    }
}

export default AppManager;