import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../../Styles/HotelRoomStyle.css'
import Header from '../Header';
import Footer from '../Footer';




export default function SearchBooking (){
   
  
	const [email,setemail] = useState("");
    const getData =async (e)=>{

        e.preventDefault();

        const email1 = email;
        const url="https://travelmanagement.onrender.com/hotelbooking/view/";

     
        const res = await axios.get(url+email1).then((res)=> {

        document.getElementById("roomType").innerHTML =res.data.roomType;
        document.getElementById("capacity").innerHTML =res.data.capacity;
        document.getElementById("name").innerHTML =res.data.name;
        document.getElementById("email").innerHTML =res.data.email;
        document.getElementById("arrivalDate").innerHTML =res.data.arrivalDate;
        document.getElementById("departureDate").innerHTML =res.data.departureDate;
        const mongoid=res.data.id;
          
       
           if(res=true) {
               
                window.location.replace("/UserHotelBookingDetails/" + mongoid)

           }
           else {
                window.location.replace("/hotelpackage")  
           }
           

            }).catch((err)=>{
            alert('Invalid Email.');
    })

    }



    
    
   
    
    return(

      <div>
        <Header/>
          <div className="info">
            <div class="parallax-window" data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
              <img src='https://www.livemint.com/lm-img/img/2023/04/21/600x338/Air_travel_1682103021468_1682103021608.jpg' alt="Logo" class="shimg" />
                <div class="tm-header">
                  <div class="tm-header-inner">
                    <div class="row" id="bokrow">
                      <div class="col-md-6 col-12">
                        <img src='https://www.livemint.com/lm-img/img/2023/04/21/600x338/Air_travel_1682103021468_1682103021608.jpg' alt="Logo" class="tm-site-logo" /> 
                          <div class="tm-site-text-box">
                            <h1 class="tm-site-title">My Reservation</h1>
                            <h6 class="tm-site-description" >Dream Travelers</h6>
                          </div>
                      </div>
                        <nav class="col-md-6 col-12 tm-nav">
                          <ul class="tm-nav-ul">
                            <li class="tm-nav-li"><a style={{textDecoration:'none' ,color:'white'}} href ={"/hotelpackage"} class="tm-nav-link ">Rooms</a></li>
                            <li class="tm-nav-li"><a style={{textDecoration:'none' ,color:'white'}} href ={"/userhotelbooking/View"} class="tm-nav-link active">My Booking</a></li>
                          </ul>
                        </nav>	
                    </div>
                  </div>
                </div>
            </div>
            <div class="bokpadding">                          
              <div class="hero-image">
                <div class="bokbox"> 
                  <form class="text-center">
                    <h3>Enter Your Email </h3>
                    <hr/>
                      <input style={{width: '300px'}} type="Email" id ="card" value={email} onChange={(e)=>{  setemail(e.target.value); }}/>
                      <br/>
                      <a>
                      <button  className="btn mt-3 btn-success"  style={{textDecoration:'none',color:'white'}} onClick={getData}>
                        Submit
                      </button>
                      </a>
                  </form>
                </div>
              </div>
            </div>

              <div style={{visibility: 'hidden'}} >
                <h1 id="roomType" ></h1>
                <h2 id="capacity" ></h2>
                <h2 id="name" ></h2>
                <h2 id="email" ></h2>
                <h2 id="arrivalDate" ></h2>
                <h2 id="departureDate"></h2>
              </div>
	        </div>
        <Footer/>
      </div>
    )
}