import { Meteor } from 'meteor/meteor';

import { Owner } from '../users/users';
import { Table } from './tables';

Meteor.methods({
    addTablesAvailability(formData, position) {
        //const owner = Owner.findOne(Meteor.userId());
        const owner = Meteor.user();

        // disable old tables
        Table.update({ ownerId: Meteor.userId() }, { $set: { online: false } }, { multi: true });

        // convert tables to numeric values
        const tables = {};
        _.each(formData, (value, key) => {
            tables[key] = parseInt(value);
        });

        if (owner.profile.location) {
            position.location = owner.profile.location;
        }

        // create new table entry
        const update = new Table();
        update.ownerId = Meteor.userId();
        update.restaurant = owner.profile.name;
        update.avatar = owner.profile.avatar;
        update.picture = owner.profile.picture;
        update.email = owner.profile.email;
        update.telephone = owner.profile.telephone;
        update.position = position;
        update.tables = tables;
        update.publishedAt = new Date();
        update.online = true;
        update.loc = {
            type: 'Point',
            coordinates: [
                position.coords.longitude,
                position.coords.latitude
            ]
        };
        
        update.validate({
            stopOnFirstError: true,
            simulation: false
        }, (error) => {
            if (error && error.reason) {
                throw new Meteor.Error(403, error.reason);
            } else {
                update.save();
            }
        });

        return update.publishedAt;
    },
    removeTablesAvailability() {
        return Table.update({ ownerId: Meteor.userId() }, { $set: { online: false } }, { multi: true });
    }
});