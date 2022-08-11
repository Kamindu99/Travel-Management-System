const express = require('express');
const TravelPackage = require('../models/travelpackages');
const ReviewData = require('../models/TravelPackageRating')
const multer = require("multer")
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


router.post('/admin/add', upload.single("packageImage") ,(req,res)=>{
    const newTravelPackage=new TravelPackage({
        packageName:req.body.packageName,
        destination:req.body.destination,
        discription:req.body.discription,
        date:req.body.date,
        noofdays:req.body.noofdays,
        noofnights:req.body.noofnights, 
        vehical:req.body.vehical,
        perperson:req.body.perperson,
        packageImage:req.file.originalname,
    });
    newTravelPackage
    .save()
    .then(()=>res.json("New Travel Package Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',async(req,res)=>{
    try{
    const data = await TravelPackage.find()
    const dataMapping = await data?.map(async da=>{

    const reviews = await ReviewData.find({packageId: da._id})
   
        return {
            "packageName":da.packageName,
            "id":da._id,
            "destination":da.destination,
            "discription":da.discription,
            "date":da.date,
            "noofdays":da.noofdays,
            "noofnights":da.noofnights,
            "vehical":da.vehical,
            "perperson":da.perperson,
            "packageImage":da.packageImage,
            reviewsAvg:reviews.length === 0 ? 0 : reviews.map(re => re.rating).reduce((a,b)=>(a+ b))/reviews.length
        }

    })

    const promiseMappedData = await Promise.all(dataMapping)
        return res.json({
            success:true,
            existingPackage:promiseMappedData,
        })

    }catch (err){
        
        return res.status(400).json({
            error:err
        });
    }
   
});






router.get('/admin/:id',(req,res)=>{
    let packageId=req.params.id;
    TravelPackage.findById(packageId , (err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

router.put('/admin/update/:id' , upload.single("packageImage"),(req,res)=>{
    TravelPackage.findByIdAndUpdate(req.params.id)
    .then((package )=> {
        package.packageName=req.body.packageName;
        package.destination=req.body.destination;
        package.discription=req.body.discription;
        package.date=req.body.date;
        package.noofdays=req.body.noofdays;
        package.noofnights=req.body.noofnights; 
        package.vehical=req.body.vehical;
        package.perperson=req.body.perperson;
        

        package
            .save()
            .then(() => res.json("The Package is UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    TravelPackage.findByIdAndRemove(req.params.id).exec((err,deletedTravelPackage)=>{
        if(err) return res.status(400).json({
          message:"TravelPackage Delete unsuccesful",err
        });
        return res.json({
            message:"TravelPackage Delete succesful",deletedTravelPackage
        });
    });
});




module.exports=router;