import React, { Component } from 'react';

// Import the AppManager component
import AppManager from './components/AppManager';

// Import App settings
import settings from './config/settings';

// Import Meteor bridge
import Meteor, { createContainer } from 'react-native-meteor';

// Connect Meteor DDP server
Meteor.connect(settings.METEOR_URL);

// exported container to be imported
// in index.ios e index.android as App
export default createContainer(() => {

    return  {
        user: Meteor.user(),
        connected: Meteor.status().connected,
    };

}, AppManager);