const express = require('express');
const PackageBooking = require('../models/Packagebooking');

const router =express.Router();
router.post('/add',(req,res)=>{
    let newBooking=new PackageBooking(req.body);

    newBooking.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Package Booking successfully"
});
    });
});

router.get('/allbookings/',(req,res)=>{
    PackageBooking.find().exec((err,posts)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            allBookings:posts
        });
    });
})


module.exports=router;

