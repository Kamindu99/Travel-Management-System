const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelBookingSchema = new Schema({

    roomType: {
        type: String,
        required: true

    },
    capacity: {
        type: String,
        required: true

    },
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    arrivalDate: {
        type: String,
        required: true

    },
    departureDate: {
        type: String,
        required: true
    },
});

const hotelBooking = mongoose.model("hotelbooking",hotelBookingSchema);

module.exports = hotelBooking;