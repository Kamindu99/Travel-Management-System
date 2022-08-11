const express = require('express');
const inquiry = require('../models/inquiry');
const router = express.Router();

router.post('/add',(req,res)=>{
    let newInq=new inquiry(req.body);
  
    newInq.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
    success:"Inquiry Added"
});
    });
});

router.get('/',(req,res)=>{
    inquiry.find().exec((err,posts)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            allinq:posts
        });
    });
});

router.delete('/delete/:id',(req,res)=>{
    inquiry.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
          message:"Inquiry Delete unsuccesful",err
        });
        return res.json({
            message:"Inquiry Delete succesful",deletedPost
        });
    });
});

router.put('/update/:id',(req,res)=>{
    inquiry.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Inquiry Update Successfull"
            });
        }
    );
});

router.get("/:id",(req,res) =>{

    let inqID = req.params.id;

    inquiry.findById(inqID,(err,post) => {
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            post
        });

    });

});




router.route("/view").post((req,res)=>{

    const name = req.body.name;
    const nic = req.body.nic;
   

    
    inquiry.findOne({name:name , nic:nic}).then((post)=>{
        
       if (post == null){

        success:false;

        

       }else{
           success:true;
          
          res.json({
            id:post._id,
            name:post.name,
            nic:post.nic,
            email:post.email,
            phone:post.phone,
            inq:post.inq,
           
           
        });
        } 

    }).catch((err)=>{
       
        res.json("You Havent Created an inquiry");
    })
})

router.route("/view/:nic").get((req,res)=>{

    const nic = req.params.nic;

    inquiry.findOne({nic:nic}).then((post)=>{
        
       if (post == null){

        success:false;
       
        

       }else{
           success:true;
          
          res.json({
            id:post._id,
            name:post.name,
            nic:post.nic,
            email:post.email,
            phone:post.phone,
            inq:post.inq,
           
           
        });
        } 

    }).catch((err)=>{
       
        res.json("You Havent Created an inquiry");
    })
})


router.route("/log").post((req,res)=>{

    const nic = req.body.nic;
    
    
    inquiry.findOne({nic:nic}).then((post)=>{
        
       if (post == null){

        res.json("Login Fail");

       }else{
        res.json("Login Success");
    }

    }).catch((err)=>{
        console.log(err);
        res.json("Validation Faild");
    })

    
})

router.route("/details").get((req,res)=>{

    inquiry.find().then((allinq)=>{

        res.json(allinq);

    }).catch((err)=>{
        res.json(err);
    })

})

module.exports = router;