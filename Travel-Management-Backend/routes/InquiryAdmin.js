const express = require('express');
const InquiryAdmin = require('../models/InquiryAdmin');

const router =express.Router();

router.post('/add',(req,res)=>{
    let newRep=new InquiryAdmin(req.body);
  
    newRep.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
    success:"Reply Added"
});
    });
});

router.delete('/delete/:id',(req,res)=>{
    InquiryAdmin.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
          message:"Reply Delete unsuccesful",err
        });
        return res.json({
            message:"Reply Delete succesful",deletedPost
        });
    });
});


router.put('/update/:id',(req,res)=>{
    InquiryAdmin.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Reply Update Successfull"
            });
        }
    );
});




module.exports = router;