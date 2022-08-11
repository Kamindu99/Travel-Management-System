const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
 require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!");
})

const equipmentRouter = require("./routes/equipment.js");
app.use("/equipment",equipmentRouter);

const AddRouter = require("./routes/Registers.js");
app.use("/Register",AddRouter);

const paymentRouter = require("./routes/payments.js");
app.use(paymentRouter);

const travelPackageRouter=require("./routes/travelPackage.js");
app.use("/travelpackages",travelPackageRouter);

const inquiryRouter=require("./routes/inquiry.js");
app.use("/inquiry",inquiryRouter);

const inquiryAdminRouter=require("./routes/InquiryAdmin.js");
app.use("/inquiryAdmin",inquiryAdminRouter);

const UserRoute = require("./routes/UserProfile.js");
app.use("/User",UserRoute);

const adminlogRouter = require("./routes/AdminLogin");
app.use("/Admin",adminlogRouter);

const deleteuserrouter = require("./routes/Admin_Panel_ProfileManagement");
app.use("/access",deleteuserrouter);

const hotelBookingRouter = require("./routes/HotelBooking");
app.use("/hotelbooking",hotelBookingRouter);

const packageBookingRouter=require("./routes/Packagebooking.js");
app.use("/packagebooking",packageBookingRouter);

const hotelPackageRouter = require("./routes/HotelPackage");
app.use("/hotelpackage",hotelPackageRouter);

const GuideRouter = require("./routes/Guide");
app.use("/guide",GuideRouter);

const activityRouter = require("./routes/Activity");
app.use("/activities",activityRouter);

const activityuserRouter = require("./routes/ActivityUser");
app.use("/activityselect",activityuserRouter);

const feedbackRouter = require("./routes/Feedback");
app.use("/feedback",feedbackRouter);

const contactUsRouter = require("./routes/ContactUs");
app.use("/contactus",contactUsRouter);

const guideRequestRouter = require("./routes/GuideRequest");
app.use("/guiderequest",guideRequestRouter);

const TravlPackagereviewRoutes = require('./routes/TravelPackageRating');
app.use('/travelpackage/review', TravlPackagereviewRoutes);


app.listen(PORT, () =>{
    console.log(`The port is : ${PORT}`);
})
