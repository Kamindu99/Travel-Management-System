const express = require('express');
const Feedback = require('../models/Feedback');
 
const router =express.Router();
 
router.post('/add',(req,res)=>{
    let newFeedback=new Feedback(req.body);
 
    newFeedback.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Feedback added successfully"
});
    });
});
 
router.get('/',(req,res)=>{
    Feedback.find().exec((err,feedback)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedback:feedback
        });
    });
})
 
router.get('/:id',(req,res)=>{
    let feedbackId=req.params.id;
    Feedback.findById(feedbackId , (err,feedback)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            feedback
        });
    });
});




 
module.exports=router;