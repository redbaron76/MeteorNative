import { Meteor } from 'meteor/meteor';
import { FacebookInit } from './accounts-config';
import Uploader from '../../../both/classes/uploader';

Meteor.startup(() => {

    // Config Facebook Service Login
    FacebookInit();
    
    // Uploader init
    const uploader = new Uploader();
    uploader.init();

    // Append Uploader instance to Meteor
    Meteor.Uploader = uploader;

});