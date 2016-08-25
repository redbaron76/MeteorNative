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

export const OwnerProfile = Class.create({
    name: 'OwnerProfile',
    fields: {
        name: {
            type: String,
            validators: [{
                type: 'minLength',
                param: 1,
                message: 'restaurant_name_must_set'
            }]
        },
        email: {
            type: String,
            validators: [{
                type: 'email',
                message: 'email_not_valid'
            }]
        },
        telephone: {
            type: String,
            validators: [{
                type: 'regexp',
                param: /^\+?[0-9\s]+$/,
                message: 'telephone_must_be_a_number'
            }]
        },
        location: {
            type: String,
            default: '',
            validators: [{
                type: 'minLength',
                param: 1,
                message: 'location_must_set'
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
            default: Role.OWNER
        },
        device: {
            type: Device,
            default: function() {
                return {};
            }
        }
    }
});

export const Owner = Class.create({
    name: 'Owner',
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
            type: OwnerProfile,
            default: function() {
                return {};
            }
        }
    },
    methods: {
        createOwnerUser(formData, callback) {
            Accounts.createUser({
                email: formData.email,
                username: Lastaurant.device.uuid,
                password: Lastaurant.device.uuid,
                profile: {
                    role: Role.OWNER,
                    name: formData.name,
                    email: formData.email,
                    location: formData.location,
                    telephone: formData.telephone,
                    avatar: '',
                    picture: '',
                    device: {
                        ip: Lastaurant.device.ip || '',
                        uuid: Lastaurant.device.uuid || '',
                        model: Lastaurant.device.model || '',
                        serial: Lastaurant.device.serial || '',
                        version: Lastaurant.device.version || '',
                        platform: Lastaurant.device.platform || '',
                        manufacturer: Lastaurant.device.manufacturer || '',
                        carrierName: Lastaurant.device.carrierName || '',
                        countryCode: Lastaurant.device.countryCode || '',
                        position: Lastaurant.device.position || {}
                    }
                }
            }, (error) => {
                if (error && error.reason) {
                    Lastaurant.notifyError(error.reason);
                } else {
                    if (_.isFunction(callback)) {
                        callback();
                    }
                }
            });
        },
        updateOwnerUser(formData, callback) {
            Meteor.call('updateOwnerUser', formData, (error, success) => {
                if (error && error.reason) {
                    Lastaurant.notifyError(error.reason);
                } else {
                    if (success && _.isFunction(callback)) {
                        callback();
                    }
                }
            });
        }
    }
});

if (Meteor.isServer) {
    Owner.extend({
        fields: {
            services: Object
        }
    });
}