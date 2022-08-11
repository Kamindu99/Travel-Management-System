const mongoose = require('mongoose');
const guideSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    guideImage: {
        type: String,
        required: true, 
    }


});

module.exports = mongoose.model('guide',guideSchema);