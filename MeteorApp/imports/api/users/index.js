import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Class, Enum } from 'meteor/jagi:astronomy';

export const Role = Enum.create({
    name: 'Role',
    identifiers: {
        USER: 0,
        REGISTRED: 1,
        OWNER: 7,
        ADMIN: 9
    }
});

const Device = Class.create({
    name: 'Device',
    fields: {
        ip: {
            type: String,
            default: ''
        },
        uuid: {
            type: String,
            default: ''
        },
        model: {
            type: String,
            default: ''
        },
        serial: {
            type: String,
            default: ''
        },
        version: {
            type: String,
            default: ''
        },
        platform: {
            type: String,
            default: ''
        },
        manufacturer: {
            type: String,
            default: ''
        },
        carrierName: {
            type: String,
            default: ''
        },
        countryCode: {
            type: String,
            default: ''
        },
        position: {
            type: Object,
            default: function() {
                return {};
            }
        }
    }
});

export const UserProfile = Class.create({
    name: 'UserProfile',
    fields: {
        name: {
            type: String,
            validators: [{
                type: 'minLength',
                param: 1,
                message: 'name_must_set'
            }]
        },
        avatar: {
            type: String,
            default: ''
        },
        picture: {
            type: String,
            default: ''
        },
        role: {
            type: Role,
            default: Role.USER
        }
    }
});

export const User = Class.create({
    name: 'User',
    collection: Meteor.users,
    secure: true,
    fields: {
        createdAt: {
            type: Date,
            default: new Date()
        },
        emails: {
            type: [Object],
            default: function() {
                return [];
            }
        },
        profile: {
            type: UserProfile,
            default: function() {
                return {};
            }
        }
    },
    methods: {

    }
});

if (Meteor.isServer) {
    User.extend({
        fields: {
            services: Object
        }
    });
}