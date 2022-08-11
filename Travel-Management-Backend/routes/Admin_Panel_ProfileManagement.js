const router = require("express").Router();
const deleteUser = require("../models/Register");


router.route("/Details").get((req,res)=>{

    
    deleteUser.find().exec((err,Registers)=>{
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

// This part is Admin can suspend or delete Users 
router.route("/delete/:id").delete((req,res)=>{
    let Deleteclent= req.params.id;
     
     deleteUser.findByIdAndDelete(Deleteclent).then(()=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err.message);
        res.json("Err");
    })
})

router.route("/search/:Email").get((req,res)=>{
    let Email= req.params.Email;
     
    
        deleteUser.find({Email:Email}).exec((err,Registers)=>{
            if (err){
                return res.status(400).json({
                    error:"d"
                    
                })
               
            }
            return res.status(200).json({
                success:true,
                SearchData:Registers
    
            })
    
    })
})



 
module.exports =router;