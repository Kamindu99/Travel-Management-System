const mongoose = require('mongoose');
const inquirySchema = new mongoose.Schema ({

    name: {
        type : String,
        required : true
    },
    nic: {
        type : String,
        required : true
    },
    phone: {
        type : Number,
        required : true
    },
    email: {
        type : String,
        required : true
      
    },
    inq: {
        type : String,
        required : true
    },
    adrep:{
        type : String,
        default : "Our team will response to your inquiry soon"
    }
})



module.exports = mongoose.model('Inquiry',inquirySchema);