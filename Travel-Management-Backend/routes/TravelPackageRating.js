const express = require('express');
const ReviewData = require('../models/TravelPackageRating');

const router =express.Router();

router.post('/',async(req, res) =>
{
    let newdata = new ReviewData(req.body);
    await newdata.save();
    return res.json(newdata);
})

module.exports = router
