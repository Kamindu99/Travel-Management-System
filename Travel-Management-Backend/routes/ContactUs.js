const express = require('express');
const ContactUs = require('../models/ContactUs');
 
const router =express.Router();
 
router.post('/add',(req,res)=>{
    let newContactUs=new ContactUs(req.body);
 
    newContactUs.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Message added successfully"
});
    });
});
 
router.get('/',(req,res)=>{
    ContactUs.find().exec((err,ContactUs)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingContactUs:ContactUs
        });
    });
})
 
router.get('/:id',(req,res)=>{
    let ContactUsId=req.params.id;
    ContactUs.findById(ContactUsId , (err,ContactUs)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            ContactUs
        });
    });
});




 
module.exports=router;