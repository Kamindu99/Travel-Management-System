const mongoose = require('mongoose');
const packagebookingSchema = new mongoose.Schema ({

    packagename:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },
    
    name:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    joinplace:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('packagebooking',packagebookingSchema);