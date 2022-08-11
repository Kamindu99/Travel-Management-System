import React from "react";
import "../Styles/AdminHeader.css";

function HeaderAdmin() {
  return (
    <div>
      <div class="sidebar-container sidebar-containeradh">
        <div class="sidebar-logo sidebar-logoadh">
          <i
            class="fas fa-plane-departure"
            aria-hidden="true"
            style={{
              fontSize: "70px",
              marginLeft: "25px",
              paddingBottom: "20px",
            }}
          ></i>
        </div>
        <ul class="sidebar-navigation sidebar-navigationadh">
        <center>  <h2
            class="headerad"
            style={{ fontSize: "17px", color: "black", paddingTop: "15px" }}
          >
            <b>Dream Travelers</b>
          </h2></center>
          <li>
            <a href="/adminhome">
              <i class="fa fa-home" aria-hidden="true"></i> Homepage
            </a>
          </li>
          <li>
            <a href="/travelpackages/admin">
              <i class="fa fa-car" aria-hidden="true"></i> Travel Package
            </a>
          </li>

          <li>
            <a href="/adminhotelpackage">
              <i class="fa fa-hotel" aria-hidden="true"></i> Room Package
            </a>
          </li>
          <li>
            <a href="/activities">
              <i class="fa fa-swimmer" aria-hidden="true"></i> Activity
            </a>
          </li>
          <li>
            <a href="/guide">
              <i class="fa fa-user" aria-hidden="true"></i> Guide
            </a>
          </li>

          <li>
            <a href="/equipment/admin">
              <i class="fa fa-campground" aria-hidden="true"></i> Equipment
            </a>
          </li>
          <li>
            <a href="/feedbacks/admin">
              <i class="fa fa-comments" aria-hidden="true"></i> FeedBack
            </a>
          </li>
          <li>
            <a href="/adView">
              <i class="fa fa-inbox" aria-hidden="true"></i> Inquiry
            </a>
          </li>
          <li>
            <a href="/contactus/admin">
              <i class="fa fa-envelope" aria-hidden="true"></i> Messages
            </a>
          </li>
          <li>
            <a href="/get">
              <i class="fa fa-user" aria-hidden="true"></i> User
              Management
            </a>
          </li>
          <li>
            <a href="/payment">
              <i class="fa fa-cc-visa" aria-hidden="true"></i> Payment
            </a>
          </li>
        </ul>
      </div>

      <div class="main_content">
        <div class="headerh" style={{ height: "111px" }}>
          <div id="hnamed">
            <h1
              style={{
                paddingTop: "20px",
                paddingLeft: "80px",
                color: "white",
              }}
            >
              {" "}
              Dream Travelers Admin DashBord
            </h1>
          </div>

          <div id="loginah">
            <a
              href="/register"
              style={{ textDecoration: "none", color: "hsl(0,0%,70%,0.9)" }}
            >
              {" "}
              <i class="fas fa-user-alt"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
