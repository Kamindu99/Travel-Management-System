const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema ({
    fullName:{
        type:String,
        required:true
    },
 
    email:{
        type:String,
        required:true
    },
    feedBack:{
        type:String,
        required:true
    },
 
});
 
module.exports = mongoose.model('feedback',feedbackSchema);