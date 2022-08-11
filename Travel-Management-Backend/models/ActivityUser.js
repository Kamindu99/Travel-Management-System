const mongoose = require('mongoose');
const activityuserSchema = new mongoose.Schema ({

    aName:{
        type:String,
        required:true
    },

    aprice:{
        type:Number,
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
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('Activityselect',activityuserSchema);