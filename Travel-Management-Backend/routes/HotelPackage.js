const express = require('express');
const HotelPackage = require('../models/HotelPackage');
const router =express.Router();

router.post('/add' , (req,res)=>{
    const newHotelPackage=new HotelPackage({
        roomType:req.body.roomType,
        details:req.body.details,
        price:req.body.price,
        size:req.body.size,
        maxCapacity:req.body.maxCapacity,
        packageImage:req.body.packageImage
    });
    newHotelPackage
    .save()
    .then(()=>res.json("New Hotel Package Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});




router.get('/',(req,res)=>{
    HotelPackage.find().exec((err,posts)=>{
    if (err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingPackage:posts
    });
});
}) 



router.get('/read/:id',(req,res)=>{
    let hotelPackageId=req.params.id;
    HotelPackage.findById(hotelPackageId , (err,HotelPackage)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            HotelPackage
        });
    });
});


router.put('/update/:id',(req,res)=>{
    HotelPackage.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,HotelPackage)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfull"
            });
        }
    );
});


router.delete('/delete/:id',(req,res)=>{
    HotelPackage.findByIdAndRemove(req.params.id).exec((err,deletedhotelPackage)=>{
        if(err) return res.status(400).json({
          message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete succesful"
        });
    });
});


module.exports=router;