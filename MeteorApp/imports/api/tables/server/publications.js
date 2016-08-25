import { Meteor } from 'meteor/meteor';
import { Table } from '../tables.js';

// Publish last Table update
Meteor.publish('lastUpdate', function() {
    return Table.find({
        ownerId: this.userId
    }, {
        sort: { publishedAt: -1 },
        limit: 1
    });
});

// Publish nearest table
Meteor.publish('countNearestTables', function(params) {
    const { state } = params;
    // Meteor._sleepForMs(2 * 1000);
    return Table.find({
        online: true,
        loc: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [ state.lon, state.lat ]
                },
                $minDistance: 0,                    // meters
                $maxDistance: state.range * 1000    // meters
            }
        }
    });
});

Meteor.publish('publishedRestaurant', function(params) {
    const { pubId } = params;
    //Meteor._sleepForMs(2 * 1000);
    return Table.find(pubId);
});