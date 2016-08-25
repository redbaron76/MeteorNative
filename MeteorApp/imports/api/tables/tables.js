import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

export const Loc = Class.create({
    name: 'Loc',
    fields: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: function() {
                return [];
            }
        }
    }
});

const Tables = new Mongo.Collection('tables');

export const Table = Class.create({
    name: 'Table',
    collection: Tables,
    secure: true,
    fields: {
        ownerId: {
            type: String
        },
        restaurant: {
            type: String
        },
        avatar: {
            type: String,
            default: ''
        },
        picture: {
            type: String,
            default: ''
        },
        email: {
            type: String
        },
        telephone: {
            type: String
        },
        position: {
            type: Object,
            default: function () {
                return {};
            }
        },
        tables: {
            type: Object,
            default: function () {
                return {
                    x2: 0,
                    x4: 0,
                    x6: 0,
                    x8: 0,
                    x10: 0
                };
            }
        },
        publishedAt: {
            type: Date
        },
        online: {
            type: Boolean
        },
        loc: {
            type: Loc,
            default: function() {
                return {};
            }
        }
    },
    indexes: {
        sphere: {
            fields: {
                loc: "2dsphere"
            }
        }
    },
    methods: {
        _checkData(formData) {
            for (let prop in formData) {
                if (parseInt(formData[prop]) > 0) {
                    return true;
                }
            }
            return false;
        },
        addTablesAvailability(formData, pos, callback) {

            const position = {
                coords: {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                },
                location: pos.city,
                timestamp: pos.timestamp
            };

            if (this._checkData(formData)) {
                Meteor.call('addTablesAvailability', formData, position, (error, publishedAt) => {
                    if (!error && _.isFunction(callback)) {
                        callback(publishedAt);
                    }
                });
            } else {
                Meteor.call('removeTablesAvailability', (error, success) => {
                    if (!error && _.isFunction(callback)) {
                        callback(success);
                    }
                });
            }
        }
    }
});