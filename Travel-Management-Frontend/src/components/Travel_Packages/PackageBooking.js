import React, { useReducer, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";
import "../../Styles/TravelPackage.css";
import Header from "../Header";
import Footer from "../Footer";

const PackageBooking = () => {

  const [validated, setValidated] = useState(false);

  const [tpackage, viewPackage] = useState({
    packageName: "",
    destination: "",
    discription: "",
    date: "",
    noofdays: "",
    noofnights: "",
    vehical: "",
    perperson: "",
  });

  const { id } = useParams();

  const loadPackage = async () => {
    const res = await axios.get(
      `https://travelmanagement.onrender.com/travelpackages/admin/${id}`
    );
    viewPackage(res.data.post);
  };
  useEffect(() => {
    loadPackage();
  });

  let history = useHistory();

  const [post, addPost] = useState({
    packagename: "",
    price: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    joinplace: "",
  });
  const { packagename, price, name, phone, address, email, joinplace } = post;

  const onInputChange = (e) => {
    addPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }
else{
    e.preventDefault();
    const { packagename, price, name, phone, address, email, joinplace } = post;
    const { packageName, perperson } = tpackage;

    const data = {
      packagename: packageName,
      price: perperson,
      name: name,
      phone: phone,
      address: address,
      email: email,
      joinplace: joinplace,
    };

    await axios.post("https://travelmanagement.onrender.com/packagebooking/add", data);
    alert("Booking Added Successfull. Click Ok to Pay");
    history.push(`/payment/add-package/${id}`);
  }
  setValidated(true);
  };
  
  
  const userInfo=localStorage.getItem('userInfo');
  if(userInfo==null){
     alert("You are not Authorized User. Please sign in first.")
   window.location.replace("/register")}


  const { packageName, perperson } = tpackage;
  return (
    <div>
      <Header />
      <div className="infotr">
        <hr/>
        <div className="bodyaa" style={{ paddingTop: "10px" }}>
          <div className="bodybb">
            <div className="container">
              <div className="w-70 mx-auto shadow p-3">
                <div className="bodycc">
                  <h2 className="text- mb-10">
                    <b>Booking Travel Package</b>
                  </h2>
                </div>
                <hr />

                <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
                  <div class="row">
                    <div class="col">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="basic-addon1"
                            style={{
                              backgroundColor: "hsl(0,0%,0%,0.3)",
                              color: "white",
                            }}
                          >
                            Package Name
                          </span>
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          name="packagename"
                          value={packageName}
                          onChange={(e) => onInputChange(e)}
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="basic-addon1"
                            style={{
                              backgroundColor: "hsl(0,0%,0%,0.3)",
                              color: "white",
                            }}
                          >
                            Price
                          </span>
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          value={perperson}
                          onChange={(e) => onInputChange(e)}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                 
                 
                 
                  <div class="d-flex flex-row align-items-center mb-2">
                          <div class="form-outline mb-2 mr-5" style={{width:"50%"}}>
                     
                      <b>Name</b>
                   
                          <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      name="name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid Name
            </Form.Control.Feedback>
                            </div>
                            <div class="form-outline mb-2" style={{width:"50%"}}>
                           
                      <b>Phone Number</b>
                    
                        <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid Phone Number
            </Form.Control.Feedback>
                            </div>
                            
                            </div>

                  <div className="form-group form-grouptr">
                    <label>
                      <b>Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Address"
                      name="address"
                      value={address}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid Address
            </Form.Control.Feedback>
                  </div>
                  <div className="form-group form-grouptr">
                    <label>
                      <b>Email</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter E-mail"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid Email
            </Form.Control.Feedback>
                  </div>
                  <div className="form-group form-grouptr">
                    <label>
                      <b>Join Place</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where do you join"
                      name="joinplace"
                      value={joinplace}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
              Please provide a valid Place
            </Form.Control.Feedback>
                  </div>


 <div class="col-12">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="invalidCheck"
        required
      />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>


                  <br />

                  <button type="submit" class="btn btn-danger btn-block">
                    {" "}
                    Book Now
                  </button>
                </Form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackageBooking;
