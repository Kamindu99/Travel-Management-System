const express = require('express');
const multer = require("multer")
const Guide = require('../models/Guide');

const router =express.Router();

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../Travel-management-Frontend/public/uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

const upload=multer({storage:storage});


router.post('/add', upload.single("guideImage") ,(req,res)=>{
    const newGuide = new Guide({
        name: req.body.name,
        address: req.body.address,
        language: req.body.language,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        guideImage: req.file.originalname,  
    });
    newGuide
    .save()
    .then(()=>res.json("Guide Added Successfully!"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    Guide.find().exec((err,guides)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingGuide:guides
        });
    });
})

router.get('/:id',(req,res)=>{
    let guideId=req.params.id;
    Guide.findById(guideId , (err,guide)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            guide
        });
    });
});

router.put('/update/:id', (req,res)=>{
    Guide.findByIdAndUpdate(req.params.id)
    .then((guide) => {
        guide.name = req.body.name;
        guide.address = req.body.address;
        guide.language = req.body.language;
        guide.email = req.body.email;
        guide.phone = req.body.phone;
        guide.username = req.body.username;
        guide.password = req.body.password;

        guide
        .save()
        .then(()=>res.json("Guide Updated Successfully!"))
        .catch((err)=>res.status(400).json(`Error:${err}`));
    })
    .catch((err) => res.status(400).json(`Error:${err}`));    
});


router.delete('/delete/:id',(req,res)=>{
    Guide.findByIdAndRemove(req.params.id).exec((err,deletedGuide)=>{
        if(err) return res.status(400).json({
          message:"Guide Delete unsuccesful",err
        });
        return res.json({
            message:"Guide Delete succesful",deletedGuide
        });
    });
});



module.exports=router;