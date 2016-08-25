import { Meteor } from 'meteor/meteor';

import { Table } from  '../tables/tables';
import { Reservation } from  './reservations';

Meteor.methods({
    requestReservation(bookData) {
        const customer = Meteor.user();

        // console.log(bookData, customer);

        // check table availability
        const table = Table.findOne({
            _id: bookData.restaurantId,
            online: true
        });

        if (table && table.tables[bookData.tableId] > 0) {

            // decrement table availability
            table.tables[bookData.tableId] --;
            table.save();
            
            // add reservation request
            const res = new Reservation();
            res.table = bookData.tableId;
            res.arrivalTime = bookData.bookTime;
            res.customerId = bookData.restaurantId;
            res.customerName = customer.profile.name;
            res.customerEmail = customer.profile.email;
            res.customerPicture = customer.profile.picture;
            res.customerLocation = bookData.location;
            res.bookedAt = new Date();
            res.loc = bookData.position;

            res.validate({
                stopOnFirstError: true,
                simulation: false
            }, (error) => {
                if (error && error.reason) {
                    throw new Meteor.Error(403, error.reason);
                } else {
                    res.save();
                }
            });
            
            // Push notification to restaurantId


            return true;
        }

        return false;
    }
});