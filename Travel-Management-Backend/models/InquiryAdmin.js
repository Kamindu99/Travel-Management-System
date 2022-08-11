const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquiryAdminSchema = new Schema({
    
    reply: {
        type : String,
        required : true
    }

})

const InquiryAdmin = mongoose.model("InquiryAdmin",inquiryAdminSchema);

module.exports = InquiryAdmin;


