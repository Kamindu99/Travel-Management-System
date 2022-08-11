const express = require("express")
const router = express.Router();
const multer = require("multer")
const Activities = require('../models/Activity');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../Travel-management-Frontend/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//REQUEST GET ALL ACTIVITIES
router.get('/', (req, res) => {
    Activities.find()
    .then(Activity => res.json(Activity))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW ACTIVITIES
router.post('/add', upload.single("activityImage"), (req, res) => {
    const newActivity = new Activities({
        aname: req.body.aname,
        category: req.body.category,
        mindescription: req.body.mindescription,
        description: req.body.description,
        price: req.body.price,
        activityImage: req.file.originalname,
    });

    newActivity
    .save()
    .then(() => res.json("The new Article posted successfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


//REQUEST FIND ACTIVITY BY ID
router.get("/:id", (req, res) => {
    Activities.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ACTIVITY BY ID AND UPDATE
router.put('/update/:id',  upload.single("activityImage"), (req, res) => {
    Activities.findById(req.params.id)
    .then(activity => {
        activity.aname = req.body.aname;
        activity.category = req.body.category;
        activity.mindescription = req.body.mindescription;
        activity.description = req.body.description;
        activity.price = req.body.price;
        activity.activityImage = req.file.originalname

        activity
            .save()
            .then(() => res.json("The Activity is UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ACTIVITY BY ID AND DELETE
router.delete('/delete/:id', (req, res) => {
    Activities.findByIdAndDelete(req.params.id)
        .then(() => res.json("The Article is DELETED"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});




module.exports = router;