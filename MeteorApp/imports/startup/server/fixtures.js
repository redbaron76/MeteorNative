import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from '../../api/users';

const inDevelopment = function () {
    return process.env.NODE_ENV === "development";
};

const inProduction = function () {
    return process.env.NODE_ENV === "production";
};

if (inDevelopment()) {

    // Create test user on startup
    if (User.find().count() == 0) {
        console.log('running fixtures...');

        const userId = Accounts.createUser({
            email: 'test@test.com',
            username: 'test',
            password: 'test'
        });

        console.log('User created: ', userId);
    }

}