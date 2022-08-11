const router = require("express").Router();
const User = require("../models/Register");


router.route("/Details/:id").get((req,res)=>{
    const id = req.params.id;
    User.findById(id).exec((err,Registers)=>{
        if (err){
            return res.status(400).json({
                error:err
               
            })
            
        }
        return res.status(200).json({
            success:true,
            BackendData:Registers
   
        })

        })
})




router.route("/Update/:id").put((req,res)=>{

    let id = req.params.id;

    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Num = req.body.Num;

    const UpdateUser = {

        Name,
        Email,
        Password,
        Num
    }

    const Update = User.findByIdAndUpdate(id,UpdateUser)
    .then((Registers)=>{
       
        success:true
        return res.status(200).json({
            success:true,
          

        })
        
    }).catch((err)=>{
        res.json("Can't Updated");

    })
   
})


module.exports = router;