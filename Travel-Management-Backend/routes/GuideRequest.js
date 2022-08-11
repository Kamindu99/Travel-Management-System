const express = require('express');
const GuideRequest = require('../models/GuideRequest');
const router =express.Router();

router.post('/add',(req,res)=>{
    let newRequest=new GuideRequest(req.body);

    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Request sent successfully"
});
    });
});

router.get('/allrequests/',(req,res)=>{
    GuideRequest.find().exec((err,posts)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            allRequests:posts
        });
    });
})


router.get('/:id',(req,res)=>{
    let guideId=req.params.id;
    GuideRequest.findById(guideId , (err,guide)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            guide
        });
    });
});


router.route("/view/:guideusername").get((req,res)=>{

    const guideusername = req.params.guideusername;
    

    GuideRequest.findOne({guideusername:guideusername}).then((guide)=>{
        
       if (guide == null){

        success:false;

       }else{
           success:true;
          
          res.json({
            id:guide._id,
            guidename:guide.guidename,
            guidelanguage:guide.guidelanguage,
            guideusername:guide.guideusername,
            uname:guide.uname,
            phone:guide.phone,
            email:guide.email,
            destination:guide.destination,
            tourdate:guide.tourdate,
            noofdates:guide.noofdates
           
        });
        } 

    }).catch((err)=>{
       
        res.json("You are not registered!");
    })
})

module.exports=router;

