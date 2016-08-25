import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

const Reservations = new Mongo.Collection('reservations');

export const Reservation = Class.create({
    name: 'Reservation',
    collection: Reservations,
    secure: true,
    fields: {
        table: {
            type: String
        },
        arrivalTime: {
            type: String
        },
        customerId: {
            type: String
        },
        customerName: {
            type: String
        },
        customerEmail: {
            type: String
        },
        customerPicture: {
            type: String
        },
        customerLocation: {
            type: String
        },
        bookedAt: {
            type: Date
        },
        loc: {
            type: Object,
            default: function () {
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
        requestReservation(bookData, callback) {
            Meteor.call('requestReservation', bookData, (error, success) => {
                if (!error && _.isFunction(callback)) {
                    callback(success);
                }
            })
        }
    }
});