import React from "react";
import "../Styles/HeaderFooter.css";

function Footer() {
  return (
    <div className="mainfooter">
      <div className="ftr">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Visit Us</h4>
            <h6 className="list-unstyled">
              <li>26/D</li>
              <li>Malabe</li>
              <li>Kaduwela</li>
              <li>Colombo</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Terms</h4>
            <h6 className="list-unstyled gg">
              <li data-toggle="modal" data-target="#staticBackdrop">Pay visa</li>
              <li data-toggle="modal" data-target="#staticBackdrop2">Copy Right</li>
              <li data-toggle="modal" data-target="#staticBackdrop3">Must Agree</li>
              <li data-toggle="modal" data-target="#staticBackdrop4"> Must Read</li>
            </h6>
          </div>
          {/* Column3 */}
          <div className="col abcs">
            <h4>Services</h4>
            <h6 className="list-unstyled">
              <li><a href="/travelpackages" >Trip Packages</a> </li>
              <li><a href="/hotelpackage" >Rooms Packages</a></li>
              <li><a href="/all" >Activity</a></li>
              <li><a href="/equipment" >Equipments</a></li>
            </h6>
          </div>
        </div>
      </div>

      <hr />
      <div className="down">
        <div className="row">
          <p className="col-sm">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-facebook-f" style={{ color: "#adadad" }}></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-twitter" style={{ color: "#adadad" }}></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-instagram" style={{ color: "#adadad" }}></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            &copy;{new Date().getFullYear()} Dream Travelers | All rights
            reserved | Terms Of Service | Privacy
          </p>


<div class="modal custom-fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body ftmodal-body ">
                <div class="text-right"> <i class="fa fa-close close ftclose" data-dismiss="modal"></i> </div>
                <div class="row">
                    <div class="col-md-5">
                      <br/>
                        <div class="text-center mt-5"> <img src="https://ht.visa.com/dam/VCOM/regional/lac/ENG/Default/Pay%20With%20Visa/Find%20a%20Card/Prepaid%20Cards/landing-cards/travelmoney-eng-640x404.png" width="200"/> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-white mt-4"> <span class="intro-1 ftintro-1">Only For Online Payment</span>
                            <div class="mt-2"> <span class="intro-2">An e-commerce payment system facilitates the acceptance of electronic payment for online transactions. Also known as a subcomponent of electronic data interchange, e-commerce payment systems have become increasingly popular due to the widespread use of the internet-based shopping and banking.</span> </div>
                            <div class="mt-4 mb-5"> <button class="btn ftbtn-primary btn-primary"  data-dismiss="modal"><i class="fa fa-close"></i> Close</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="modal custom-fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body ftmodal-body ">
                <div class="text-right"> <i class="fa fa-close close ftclose" data-dismiss="modal"></i> </div>
                <div class="row">
                    <div class="col-md-5">
                      <br/>
                        <div class="text-center mt-5"> <img src="https://onextrapixel.com/wp-content/uploads/2013/09/copyright-laws-180.jpg" width="200"/> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-white mt-4"> <span class="intro-1 ftintro-1">Do not Copy Right</span>
                            <div class="mt-2"> <span class="intro-2">Our Dream Travel Company website do not copy. Website copywriting is the process of writing digital content for landing pages, product pages, blog posts, and everything in between. Compelling copy can keep your website visitors engaged and lead them to take actions that are both important to you and meaningful to them.</span> </div>
                            <div class="mt-4 mb-5"> <button class="btn ftbtn-primary btn-primary"  data-dismiss="modal"><i class="fa fa-close"></i> Close</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal custom-fade" id="staticBackdrop3" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body ftmodal-body ">
                <div class="text-right"> <i class="fa fa-close close ftclose" data-dismiss="modal"></i> </div>
                <div class="row">
                    <div class="col-md-5">
                      <br/>
                        <div class="text-center mt-4"> <img src="https://starmusicradio.com/wp-content/uploads/2020/01/CEC3FE1F-AAE3-40FB-A35F-119491C65325.jpeg" width="200"/> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-white mt-4"> <span class="intro-1 ftintro-1">You have to Agree with Condition</span>
                            <div class="mt-2"> <span class="intro-2">In this case, agreed on its own means "It is accepted". agree is the verb form. If you use a verb on its own, it is an imperative: telling somebody to do something. So, if you simply say agree, you are telling the other person to agree with you.</span> </div>
                            <div class="mt-4 mb-5"> <button class="btn ftbtn-primary btn-primary"  data-dismiss="modal"><i class="fa fa-close"></i> Close</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal custom-fade" id="staticBackdrop4" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body ftmodal-body ">
                <div class="text-right"> <i class="fa fa-close close ftclose" data-dismiss="modal"></i> </div>
                <div class="row">
                    <div class="col-md-5">
                      <br/>
                        <div class="text-center mt-5"> <img src="https://onmywaytosparta.files.wordpress.com/2013/12/must-read.jpg" width="200"/> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-white mt-4"> <span class="intro-1 ftintro-1">Must Read Each and Every Fields</span>
                            <div class="mt-2"> <span class="intro-2">Meaning of must-read in English. something that many people want to read or that a particular group of people should read: His quick wit and dazzling writing style have made his column a must-read. The book is a must-read for anyone interested in Cold War diplomacy.</span> </div>
                            <div class="mt-4 mb-5"> <button class="btn ftbtn-primary btn-primary"  data-dismiss="modal"><i class="fa fa-close"></i> Close</button> </div>
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
  );
}

export default Footer;
