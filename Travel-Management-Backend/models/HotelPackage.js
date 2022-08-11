const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelPackageSchema = new Schema({

    roomType: {
        type: String,
        required: true

    },
    details: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true

    },
    size: {
        type: String,
        required: true

    },
    maxCapacity: {
        type: String,
        required: true

    },
    packageImage:{
        type:String,
        required:true
    }

});

const hotelPackage = mongoose.model("hotelpackage",hotelPackageSchema);

module.exports = hotelPackage;