import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import faker from 'faker';

import { Owner } from '../../api/users/users';
import { Table } from '../../api/tables/tables';

const inDevelopment = function () {
    return process.env.NODE_ENV === "development";
};

const inProduction = function () {
    return process.env.NODE_ENV === "production";
};

// 45.805047
// 13.533173
const getRandomInRange = function (from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
};

if (inDevelopment()) {

    if (Owner.find().count() == 0) {
        console.log('running fixtures...');

        // Create 100 owners
        _.each(_.range(50), (i) => {

            const email = faker.internet.email();
            const uuid = faker.finance.account();
            // const image = faker.image.imageUrl(375, 220, 'food');
            const image = 'https://media-cdn.tripadvisor.com/media/photo-s/06/ae/bd/c6/l-ingresso.jpg';
            const lat = getRandomInRange(44, 46, 6);
            const lon = getRandomInRange(12, 14, 6);
            const city = faker.address.city();
            const restaurant = faker.company.companyName();
            const telephone = faker.phone.phoneNumberFormat();

            const position = {
                coords: {
                    latitude: lat,
                    longitude: lon
                },
                location: city,
                timestamp: new Date().getTime()
            };

            const ownerId = Accounts.createUser({
                email: email,
                username: uuid,
                password: uuid,
                profile: {
                    role: 7,
                    name: restaurant,
                    email: email,
                    location: 'Monfalcone',
                    telephone: telephone,
                    avatar: image,
                    picture: image,
                    device: {
                        ip: faker.internet.ip(),
                        uuid: uuid,
                        model: '',
                        serial: '',
                        version: '',
                        platform: '',
                        manufacturer: '',
                        carrierName: '',
                        countryCode: '',
                        position: position
                    }
                }
            });

            const table = new Table();
            table.ownerId = ownerId;
            table.restaurant = restaurant;
            table.avatar = image;
            table.picture = image;
            table.email = email;
            table.telephone = telephone;
            table.position = position;
            table.publishedAt = new Date();
            table.online = true;
            table.tables = {
                x2: _.random(0, 3),
                x4: _.random(0, 3),
                x6: _.random(0, 2),
                x8: _.random(0, 1),
                x10: _.random(0, 1)
            };
            table.loc = {
                type: 'Point',
                coordinates: [
                    lon,
                    lat
                ]
            };

            table.save();

        });

    }
}