const express = require('express');
const HotelBooking = require('../models/HotelBooking');

const router =express.Router();


router.post('/add',(req,res)=>{
    let newPost=new HotelBooking(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"HotelBooking saved successfully"
});
    });
});


router.get('/',(req,res)=>{
    HotelBooking.find().exec((err,posts)=>{
    if (err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingBooking:posts
    });
});
}) 

router.get('/admin',(req,res)=>{
    HotelBooking.find().exec((err,posts)=>{
    if (err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingBooking:posts
    });
});
}) 


router.get('/read/:id',(req,res)=>{
    let hotelBookingId=req.params.id;
    HotelBooking.findById(hotelBookingId , (err,hotelBooking)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            hotelBooking
        });
    });
});


router.put('/update/:id',(req,res)=>{
    HotelBooking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,hotelBooking)=>{
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
    HotelBooking.findByIdAndRemove(req.params.id).exec((err,deletedhotelBooking)=>{
        if(err) return res.status(400).json({
          message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete succesful"
        });
    });
})

router.route("/view/:email").get((req,res)=>{

    const email = req.params.email;
    

    HotelBooking.findOne({email:email}).then((HotelBooking)=>{
        
       if (HotelBooking == null){

        success:false;

       }else{
           success:true;
          
          res.json({
            id:HotelBooking._id,
            roomType:HotelBooking.roomType,
            capacity:HotelBooking.capacity,
            name:HotelBooking.name,
            email:HotelBooking.email,
            arrivalDate:HotelBooking.arrivalDate,
            departureDate:HotelBooking.departureDate,   
        });
        } 

    }).catch((err)=>{
       
        res.json("You Havent made any Booking");
    })
})


module.exports=router;