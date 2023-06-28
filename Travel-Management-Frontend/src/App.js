import PackageDetails from './components/Travel_Packages/TravelPackageDetails';
import PackageDetailsAdmin from './components/Travel_Packages/TravelPackageDetailsAdmin';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import AllPackagesAdmin from './components/Travel_Packages/TravelPackagesAdmin';
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import EditPackage from './components/Travel_Packages/EditTravelPackage';
import HomePage from './components/Home/HomePage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import AllBooking from './components/Travel_Packages/BookingAllDetails';
import adminhotelbooking from './components/HotelRooms/AdminHotelBooking';
import hotelbookingdetails from './components/HotelRooms/HotelBookingDetails';
import addnewhotelbooking from './components/HotelRooms/AddNewHotelBooking';
import edithotelbooking from './components/HotelRooms/EditHotelBooking';
import hotelpackage from './components/HotelRooms/HotelPackage';
import adminhotelpackage from './components/HotelRooms/AdminHotelPcakage';
import adminaddhotelpackage from './components/HotelRooms/AdminAddHotelPackage';
import adminedithotelpackage from './components/HotelRooms/AdminEditHotelPackage';
import adminhotelpackagedetails from './components/HotelRooms/AdminHotelPackageDetails';
import DeletePackage from './components/Travel_Packages/DeleteTravelPackage'
import Display from './components/Kavindu/adminProfileView'
import admin from './components/Kavindu/adminLogin'
import EditDetails from './components/Kavindu/edit'
import UserProfile from './components/Kavindu/userprofile'
import RegisterUser from './components/Kavindu/RegForm';
import UserRepo from './components/Kavindu/ReportUsers';
import EditEquipment from './components/Travel_Equipments/EditEquipment';
import AddEquipment from './components/Travel_Equipments/AddEquipment';
import AdminEquipment from './components/Travel_Equipments/AdminEquipment';
import UserEquipment from './components/Travel_Equipments/UserEquipment';
import AddFeedback from './components/Feedback/AddFeedback';
import AllFeedback from './components/Feedback/AdminFeedback';
import Gallery from './components/Home/Gallery';
import Aboutus from './components/Home/AboutUs';
import ContactUs from './components/Home/Contactus';
import ContactUsAdmin from './components/Home/ContactUsAdmin';
import AllPayments from './components/Payment/AllPayments';
import EditPayment from './components/Payment/EditPayment';
import PaymentDetails from './components/Payment/PaymentDetails';
import AdminHome from './components/Home/AdminHome';
import hotelpackagedetails from './components/HotelRooms/HotelPackageDetails';
import EquipmentReport from './components/Travel_Equipments/EquipmentReport';
import AddGuide from './components/Guide/AddGuide';
import AllGuideDetails from './components/Guide/AllGuideDetails';
import EditGuide from './components/Guide/EditGuide';
import GuideLogin from './components/Guide/GuideLogin';
import SelectGuide from './components/Guide/SelectGuide';
import GuideConfirm from './components/Guide/GuideConfirm';
import GuideRequest from './components/Guide/GuideRequest';
import AllRequests from './components/Guide/AllRequests';
import Services from './components/Home/Services';
import Activities from "./components/Activity/Activities";
import Activity from "./components/Activity/Activity";
import AddActivity from "./components/Activity/AddActivity";
import EditActivity from "./components/Activity/EditActivity";
import AllActivity from './components/Activity/AllActivity';
import ViewActivity from './components/Activity/ViewActivity';
import ActivityDetails from './components/Activity/ActivityDetails';
import ActivitySelect from './components/Activity/ActivitySelect';
import ActivityUser from './components/Activity/ActivityUser';
import PayForRoom from './components/Payment/PayForRoom';
import PayForActivity from './components/Payment/PayForActivity';
import PayForEquipment from './components/Payment/PayForEquipment';
import PayForTP from './components/Payment/PayForTP';
import PaymentConfirm from './components/Payment/PaymentComplete';
import forget from './components/Kavindu/ForgetPass';
import resetpass from './components/Kavindu/resetpass';
import CreateInquiry from './components/Inquiry/CreateInquiry';
import EditInquiry from './components/Inquiry/EditInquiry';
import InquiryAll from './components/Inquiry/InquiryAll';
import AdminRep from './components/Inquiry/AdminReply';
import InqDetails from './components/Inquiry/InqDetails';
import InqView from './components/Inquiry/InqView';
import AdminView from './components/Inquiry/AdminView';
import ComponentToPrint from './components/Inquiry/InqReport';
import ComponentToPrint1 from './components/Inquiry/userDoc'
import Inqmail from './components/Inquiry/inqmail';
import AdminDetails from './components/Inquiry/AdminDetails';
import PaymentView from './components/Payment/PayView';
import SearchHotelBooking from './components/HotelRooms/SearchHotelBooking';
import UserHotelBookingDetails from './components/HotelRooms/UserHotelBookingDetails';
import EditTPackage from './components/Travel_Packages/EditPackage2';
import pay from './components/Kavindu/pay';
import UserAccount from './components/Kavindu/UserAccount';
import NotFound from './components/NotFoundPage';

import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/bookingpackage/:id" exact component={PackageBooking}></Route>
        <Route path="/travelpackages/admin" exact component={AllPackagesAdmin}></Route>
        <Route path="/travelpackage/admin/add" exact component={CreatePackage}></Route>
        <Route path="/travelpackages/travelpackage/:id" exact component={PackageDetails}></Route>
        <Route path="/travelpackages/travelpackage/admin/:id" exact component={PackageDetailsAdmin}></Route>
        <Route path="/travelpackage/admin/edit/:id" exact component={EditPackage}></Route>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/travelpackages" exact component={AllPackages}></Route>
        <Route path="/allbooking" exact component={AllBooking}></Route>
        <Route path="/adminhotelbooking" exact component={adminhotelbooking}></Route>
        <Route path="/userhotelbooking/hotelbookingdetails/:id" exact component={hotelbookingdetails}></Route>
        <Route path="/addnewhotelbooking/:id" exact component={addnewhotelbooking}></Route>
        <Route path="/edithotelbooking/:id" exact component={edithotelbooking}></Route>
        <Route path="/hotelpackage" exact component={hotelpackage}></Route>
        <Route path="/adminhotelpackage" exact component={adminhotelpackage}></Route>
        <Route path="/adminaddhotelpackage" exact component={adminaddhotelpackage}></Route>
        <Route path="/adminedithotelpackage/:id" exact component={adminedithotelpackage}></Route>
        <Route path="/adminhotelpackagedetails/:id" exact component={adminhotelpackagedetails}></Route>
        <Route path="/travelpackage/admin/delete/:id" exact component={DeletePackage}></Route>
        <Route path="/Register" exact component={RegisterUser} />
        <Route path="/get" exact component={Display} />
        <Route path="/admin" exact component={admin} />
        <Route path="/Profile" exact component={UserProfile} />
        <Route path="/edit/:id" exact component={EditDetails} />
        <Route path="/rep" exact component={UserRepo} />
        <Route path="/equipment/add" exact component={AddEquipment} />
        <Route path="/equipment/edit/:id" exact component={EditEquipment} />
        <Route path="/equipment/admin" exact component={AdminEquipment} />
        <Route path="/equipment" exact component={UserEquipment} />
        <Route path="/feedback" exact component={AddFeedback} />
        <Route path="/feedbacks/admin" exact component={AllFeedback} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/contactus/admin" exact component={ContactUsAdmin} />
        <Route path="/payment/add-package/:id" exact component={PayForTP} />
        <Route path="/payment/add-room/:id" exact component={PayForRoom} />
        <Route path="/payment/add-equipment/:id" exact component={PayForEquipment} />
        <Route path="/payment/add-activity/:id" exact component={PayForActivity} />
        <Route path="/payment/" exact component={AllPayments} />
        <Route path="/payment/edit/:id" exact component={EditPayment} />
        <Route path="/payment/details/:id" exact component={PaymentDetails} />
        <Route path="/confirm/payment/" exact component={PaymentConfirm} />
        <Route path="/payment/view/" exact component={PaymentView} />
        <Route path="/adminhome" exact component={AdminHome} />
        <Route path="/hotelpackagedetails/:id" exact component={hotelpackagedetails} />
        <Route path="/equipment/report" exact component={EquipmentReport} />
        <Route path="/guide" exact component={AllGuideDetails} />
        <Route path="/guide/add" exact component={AddGuide} />
        <Route path="/guide/edit/:id" exact component={EditGuide} />
        <Route path="/guide/login" exact component={GuideLogin} />
        <Route path="/guide/all" exact component={SelectGuide} />
        <Route path="/guide/handle/:id" exact component={GuideConfirm} />
        <Route path="/guide/request/:id" exact component={GuideRequest} />
        <Route path="/guide/allrequests" exact component={AllRequests} />
        <Route path="/services" exact component={Services} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/all" exact component={AllActivity} />
        <Route path="/activity/:id" exact component={Activity} />
        <Route path="/activity-details" exact component={ActivityDetails} />
        <Route path="/view-activity/:id" exact component={ViewActivity} />
        <Route path="/update/:id" exact component={EditActivity} />
        <Route path="/add-activity" exact component={AddActivity} />
        <Route path="/activity-user/:id" exact component={ActivityUser} />
        <Route path="/activity-select" exact component={ActivitySelect} />
        <Route path="/forget" exact component={forget} />
        <Route path="/reset/:id" exact component={resetpass} />
        <Route path="/add" exact component={CreateInquiry}></Route>
        <Route path="/editinq/:id" component={EditInquiry}></Route>
        <Route path="/allinq" component={InquiryAll}></Route>
        <Route path="/admin/:id" component={AdminRep}></Route>
        <Route path="/inqD/:id" component={InqDetails}></Route>
        <Route path="/view" component={InqView}></Route>
        <Route path="/adView/" component={AdminView}></Route>
        <Route path="/report" component={ComponentToPrint}></Route>
        <Route path="/userDoc/:id" component={ComponentToPrint1}></Route>
        <Route path="/subscribe" component={pay}></Route>
        <Route path="/userhotelbooking/View" exact component={SearchHotelBooking}></Route>
        <Route path="/UserHotelBookingDetails/:id" exact component={UserHotelBookingDetails}></Route>
        <Route path="/edittpackage/:id" component={EditTPackage}></Route>
        <Route path="/inqmail/:id" component={Inqmail}></Route>
        <Route path="/adminDet/:id" component={AdminDetails}></Route>
        <Route path="/user-account" component={UserAccount}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
