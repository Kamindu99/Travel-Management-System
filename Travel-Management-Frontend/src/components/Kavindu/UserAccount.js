import '../../Styles/UserManagement.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sub from './goldpack';

function UserAccount() {

    const [View, setView] = useState();

    const logout = () => {
        if (window.confirm("You Want To LogOut ")) {
            const dat = localStorage.removeItem("userInfo");
            if (dat == null) {
                alert("log  Out Success ");
                window.location.replace("/")
            }
        }
    }

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        //alert (userInfo);
        if (userInfo == null) {
            alert("You Are Not Authorized User")
            window.location.replace("/register")
        }

        var line = [];

        for (var i = 7, p = 0; i !== 31; i++, p++) {
            line.push(userInfo[i]);
        }

        const mongoid = line.join('');
        const url = "https://travelmanagement.onrender.com/user/Details/";

        axios.get(url + mongoid).then(res => {

            if (res.data.success) {
                setView(res.data.BackendData);
                //console.log(res.data.BackendData);
            }
            else (
                console.log("cant")
            )

        })
    }, [])

    return (
        <div>
            <Header />
            <div className='infotr' style={{ marginTop: "100px" }}>
                <Sub />
                <div className='userAccountcss'>
                    <div >
                        <div class="padding">
                            <div class="row container d-flex justify-content-center">
                                <div class="col-xl-6 col-md-12">
                                    <div class="card user-card-full">
                                        <div class="row m-l-0 m-r-0">
                                            <div class="col-sm-4 bg-c-lite-green user-profile">
                                                <div class="card-block text-center text-white">
                                                    <div class="m-b-25 mt-4">
                                                    <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_41_u2hisq.jpg" style={{objectFit:'cover', height:'80px',width:'80px',borderRadius:'50%'}} class="img-radius" alt="User-Profile-Image" />
                                                    </div>
                                                    <h6 class="f-w-600">{View?.Name}</h6>
                                                    <p>{View?.Email}</p>
                                                    <i class=" fa fa-pencil-square-o mt-5" style={{ cursor: 'pointer' }} onClick={()=>{window.location.replace('edit/' + View._id)}}></i>
                                                    <i class=" fa fa-ban mt-5 ms-3" style={{ cursor: 'pointer' }} onClick={logout}></i>
                                                </div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="card-block">
                                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Frist Name</p>
                                                            <h6 class="text-muted f-w-400">{View?.Name}</h6>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Last Name</p>
                                                            <h6 class="text-muted f-w-400">{" Gayantha"}</h6>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Email</p>
                                                            <h6 class="text-muted f-w-400">{View?.Email}</h6>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Phone</p>
                                                            <h6 class="text-muted f-w-400">{View?.Num}</h6>
                                                        </div>
                                                    </div>
                                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 mt-5">Your Booking Details</h6>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Travel</p>
                                                            <h6 class="text-muted f-w-400">Sigiri - Dambulu</h6>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Hotel</p>
                                                            <h6 class="text-muted f-w-400">Galadari</h6>
                                                        </div>
                                                    </div>
                                                    <center>
                                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="fa fa-facebook-square feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="fa fa-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="fa fa-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserAccount