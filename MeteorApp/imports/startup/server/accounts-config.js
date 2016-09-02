import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Accounts } from 'meteor/accounts-base';

import { Role, User } from '../../api/users';

const settings = Meteor.settings.oauth.facebook;

export const FacebookInit = () => {
    if (!settings) return;
    ServiceConfiguration.configurations.upsert(
        { service: 'facebook' },
        {
            $set: {
                appId: settings.appId,
                secret: settings.secret,
                loginStyle: settings.loginStyle
            }
        }
    );
};


Accounts.validateNewUser((newUser) => {

    const loginWithPassword = !!newUser.services.password;

    if (loginWithPassword) {

        console.log('newUser', newUser);

        const user = new User();

        user.validate({
            fields: [
                'name',
                'email'
            ],
            stopOnFirstError: false,
            simulation: false           // simulate on the client
        }, (error) => {
            if (error && error.reason) {
                throw new Meteor.Error(403, error.reason);
            }
        });

    }

    return true;
});


Accounts.onCreateUser((options, user) => {
    // console.log('options', options, 'user', user);

    // create profile obj
    const profile = {};

    if (user.services.facebook) {
        // Login Users
        profile.id = user.services.facebook.id;
        profile.name = user.services.facebook.name;
        profile.link = user.services.facebook.link;
        profile.email = user.services.facebook.email;
        profile.locale = user.services.facebook.locale;
        profile.ageRange = user.services.facebook.age_range;
        profile.gender = user.services.facebook.gender;
        profile.picture = `http://graph.facebook.com/${profile.id}/picture`;
        profile.role = Role.USER;

    } else {
        // Login Owners
        profile.name = options.name;
    }

    // assign profile to user.profile
    user.profile = profile;

    // console.log('USER: ', user);

    return user;
});