import React, { Component } from 'react';

// Import App settings
import settings from './config/settings';

// Import Meteor bridge
import Meteor, { createContainer } from 'react-native-meteor';

import AppManager from './components/AppManager';

// Connect Meteor DDP server
Meteor.connect(settings.METEOR_URL);

// exported container to be imported
// in index.ios e index.android as App
export default createContainer(() => {
    return  {
        user: Meteor.user(),
        loggingIn: Meteor.loggingIn(),
        connected: Meteor.status().connected,
    };
}, AppManager);