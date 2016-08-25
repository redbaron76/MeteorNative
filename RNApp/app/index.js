import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import App settings
import settings from './config/settings';

// Import Meteor bridge
import Meteor, { createContainer } from 'react-native-meteor';

// Import store with middleware
import getStoreWithMiddleware from './store';

// Import scenes for the router
import scenes from './config/scenes';

// Import SideMenu container
import SideMenu from './containers/SideMenuContainer';

// Import Router wrapped by Redux connect
import RouterWithRedux from './config/router';

// Create a store with middleware
const store = getStoreWithMiddleware();

// Connect Meteor DDP server
Meteor.connect(settings.METEOR_URL);

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