const mongoose = require('mongoose');
const guiderequestSchema = new mongoose.Schema ({

    guidename:{
        type:String,
        required:true
    },

    guidelanguage:{
        type:String,
        required:true
    },

    guideusername:{
        type:String,
        required:true
    },

    uname:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    tourdate:{
        type:String,
        required:true
    },
    noofdates:{
        type:String,
        required:true
    },
    requestdate:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('guiderequest',guiderequestSchema);