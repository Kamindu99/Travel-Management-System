const express = require('express');
const Payment = require("../models/Payment");

 
const router =express.Router();
 
router.post('/payment/add',(req,res)=>{
    let newPayment=new Payment(req.body);
 
    newPayment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Payment saved successfully"
});
    });
});
 
router.get('/payment',(req,res)=>{
    Payment.find().exec((err,Payment)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPayment:Payment
        });
    });
})
 
router.get('/payment/:id',(req,res)=>{
    let paymentId=req.params.id;
    Payment.findById(paymentId , (err,payment)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            payment
        });
    });
});
 
router.put('/payment/update/:id',(req,res)=>{
    Payment.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,payment)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfull"
            });
        }
    );
});
 
router.delete('/payment/delete/:id',(req,res)=>{
    Payment.findByIdAndRemove(req.params.id).exec((err,deletedpayment)=>{
        if(err) return res.status(400).json({
          message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete succesful",deletedpayment
        });
    });
});
 

router.route("/payment/view/:card").get((req,res)=>{

    const card = req.params.card;
    

    Payment.findOne({card:card}).then((payment)=>{
        
       if (payment == null){

        success:false;

       }else{
           success:true;
          
          res.json({
            id:payment._id,
            reference:payment.reference,
            name:payment.name,
            method:payment.method,
            card:payment.card,
            time:payment.time,
            amount:payment.amount,
            payf:payment.payf,
            no:payment.no,
           
        });
        } 

    }).catch((err)=>{
       
        res.json("You Havent made any payment");
    })
})



module.exports=router;