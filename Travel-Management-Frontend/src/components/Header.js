import React from "react";
import "../Styles/HeaderFooter.css";

function Header() {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <div class="wrapper">
      <div class="sidebar">

        <ul>
          <i class="fas fa-plane-departure" style={{ textDecoration: "none", color: "rgba(116, 116, 116, 0)", fontSize: "105px" }}> </i>
          <li>

            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <i class="fas fa-home"></i>Home
            </a>
          </li>
          <li>
            <a
              href="/travelpackages"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fas fa-car"></i>Travel Package
            </a>
          </li>
          <li>
            <a
              href="/hotelpackage"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fas fa-bed"></i>Room Package
            </a>
          </li>
          <li>
            <a href="/all" style={{ textDecoration: "none", color: "white" }}>
              <i class="fas fa-running"></i>Activity
            </a>
          </li>
          <li>
            <a
              href="/equipment"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fas fa-campground"></i>Equipment
            </a>
          </li>
          <li>
            <a
              href="/guide/all"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fas fa-home"></i>Guides
            </a>
          </li>
          <li>
            <a
              href="/feedback"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fas fa-comments"></i>FeedBack
            </a>
          </li>
          <li>
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              <i class="fas fa-exclamation-circle"></i>Inquiry
            </a>
          </li>

        </ul>
        <div class="social_media">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="main_content">

        <header class="fixed-top">

          <div class="header">


            <div>
              <div id="logott">

                <img src='https://www.freeiconspng.com/thumbs/travel-icon-png/plane-travel-flight-tourism-travel-icon-png-10.png' style={{ width: "100px", height: "100px",marginLeft:'30px' }} />

              </div>
              <div id="hname">
                <h1><b> Dream Travelers</b></h1>
              </div>


              <div id="dateandtime">
                <p>  {new Date().getFullYear()} : {new Date().getMonth()} : {new Date().getDate()} - {new Date().toLocaleTimeString()}</p>

              </div>

              <div id="login">
                {userInfo ?
                  <>
                    <a href="/user-account" style={{ textDecoration: "none", color: "white" }}>
                    <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_41_u2hisq.jpg" style={{objectFit:'cover', height:'60px',width:'60px',borderRadius:'50%'}} class="img-radius" alt="User-Profile-Image" />
                    </a>
                  </>
                  :
                  <>
                    <a href="/register" style={{ textDecoration: "none", color: "rgb(218, 213, 213)" }}>
                      <i class="fas fa-user-alt"></i>
                    </a>
                  </>
                }
              </div>
            </div>

            <div className="menupp" style={{ width: "100%" }}>
              <li className="menupp">
                <a></a>
              </li>


              <li className="menupp mr-0">
                <a></a>
              </li>

              <li class="menupp">
                <a class="actively" href="/aboutus">
                  About Us
                </a>
              </li>
              <li class="menupp">
                <a href="/services">Services</a>
              </li>
              <li class="menupp">
                <a href="/contactus">Contact Us</a>
              </li>
              <li class="menupp">
                <a href="/gallery">Gallery</a>
              </li>
            </div>
          </div>

        </header>
      </div>

    </div>
  );
}

export default Header;
