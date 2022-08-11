const express = require('express');
const ActivityUser = require('../models/ActivityUser');

const router =express.Router();
router.post('/add',(req,res)=>{
    let newSelect=new ActivityUser(req.body);

    newSelect.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Activity Select successfully"
});
    });
});

router.get('/allselects/',(req,res)=>{
    ActivityUser.find().exec((err,posts)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            allselects:posts
        });
    });
})



module.exports=router;