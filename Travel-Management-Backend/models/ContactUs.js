const mongoose = require('mongoose');
const contactusSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
 
    message:{
        type:String,
        required:true
    },
 
});
 
module.exports = mongoose.model('contactus',contactusSchema);