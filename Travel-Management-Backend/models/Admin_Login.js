const mongoose = require ("mongoose");

const adminlogSchema = mongoose.Schema({

    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true

    }

})

const adminlog = mongoose.model("Admin_Login",adminlogSchema);

module.exports = adminlog;