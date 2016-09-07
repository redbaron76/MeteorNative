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

const Email = Class.create({
    name: 'Email',
    fields: {
        address: {
            type: String,
            validators: [{
                type: 'email',
                message: 'E-mail address is not valid'
            }]
        },
        verified: {
            type: Boolean
        }
    }
});

export const UserProfile = Class.create({
    name: 'UserProfile',
    fields: {
        name: {
            type: String,
            default: ''
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
            type: Email
        },
        username: {
            type: String,
            validators: [{
                type: 'minLength',
                param: 2,
                message: 'Username must be at least 2 chars long'
            }]
        },
        profile: {
            type: UserProfile,
            validators: [{
                type: 'object'
            }]
            /*default: function() {
                return {};
            }*/
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