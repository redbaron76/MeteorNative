import { Meteor } from 'meteor/meteor';
import { User } from '../index';

// Publish Meteor.user() current user
Meteor.publish('currentUser', function(currentUserId) {
    if (currentUserId) {
        return User.find(currentUserId);
    }
    return this.ready();
});