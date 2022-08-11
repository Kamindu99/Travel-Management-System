const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    reference: {
        type: String,
        required: true

    },
    name: {
        type: String,
        required: true

    },

    method: {
        type: String,
        required: true

    },
    card: {
        type: Number,
        required: true

    },
    time: {
        type: String,
        required: true

    },
    no: {
        type: Number,
        required: true

    },
    amount: {
        type: Number,
        required: true
    },
    payf:{
        type:String,
        required: true
    },
    pdate:{
        type:Date,
        default:Date.now
    },
   
})

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;