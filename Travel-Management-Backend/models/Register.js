const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegSchema = new Schema({

    Name :{
        type: String,
        required: true

    },
    Email: {
        type: String,
        required: true

    },
    Password: {
        type: String,
        required: true

    },
    Num: {
        type: Number,
        required: true

    }

});

const Register = mongoose.model("Register",RegSchema);

module.exports = Register;