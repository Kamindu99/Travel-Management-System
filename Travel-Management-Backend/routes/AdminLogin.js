const router = require("express").Router();
const Reg = require("../models/Admin_Login");

router.route("/login").get((req,res)=>{

    const Username = req.body.Username;
    const Password = req.body.Password;

   if(Username == "admin" && Password == "admin"){
        res.json("Success")
   }else{
        res.json("Invalid login");
    }

})

module.exports =router;
