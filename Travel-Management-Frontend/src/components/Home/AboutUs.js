import React from "react";
import "../../Styles/AboutUS.css";
import Header from "../Header";
import Footer from "../Footer";

const Aboutus = () => {
  return (
    <div>
      <Header />
      <div className="info">
        <body>
          <div class="team-boxed">
            <div class="container">
              <div class="intro">
                <h2 class="text-center">About Us </h2>
                <p class="text-center">
                  We are the Best Travel Company in Sri Lanka. Since 2018, Us
                  the "Dream travellers" has been committed to bring the
                  travellers the best experience and value for their travel
                  arrangements. We are passionate about travel and providing
                  corporate travellers high-touch services to facilitate their
                  travel needs and sharing the world's wonders best experience
                  on the leisure travel side. On behalf of that we offer
                  valuable and time reliable offers for the best prices for our
                  customers.
                </p>
              </div>
              <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
                    <h3 class="name">Our Vision</h3>
                    <p class="title">Dream Travelers</p>
                    <p class="description">
                      Sri Lanka’s best Leading Outbound Travel Agency. Sri
                      Lanka’s best Leading Outbound Travel Agency.Sri Lanka’s
                      best Leading Outbound Travel Agency.
                    </p>
                    <div class="social">
                      <a href="#">
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
                    <h3 class="name">Our Mission</h3>
                    <p class="title">Dream Travelers</p>
                    <p class="description">
                      {" "}
                      To Venture Beyond Our Clients’ Expectations, by Providing
                      Innovative & Value-Added Services, To Be The Most
                      Professional & Efficient Travel Facilitator, Whilst Being
                      An Ethical And Socially Responsible Corporate Citizen.{" "}
                    </p>
                    <div class="social">
                      <a href="#">
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
                    <h3 class="name">Our Service</h3>
                    <p class="title">Dream Travelers</p>
                    <p class="description">
                      We are passionate about travel and providing corporate
                      travellers high-touch services to facilitate their travel
                      needs and sharing the world's wonders best experience on
                      the leisure travel side. On behalf of that we offer
                      valuable and time reliable offers for the best prices for
                      our customers.{" "}
                    </p>
                    <div class="social">
                      <a href="#">
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
