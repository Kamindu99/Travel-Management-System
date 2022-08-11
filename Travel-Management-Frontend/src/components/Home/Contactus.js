import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

const ContactUs = () => {
  let history = useHistory();

  const [contactus, addContactus] = useState({
    name: "",
    message: "",
  });
  const { name, message } = contactus;
  const onInputChange = (e) => {
    addContactus({ ...contactus, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8070/contactus/add", contactus);
    history.push("/");
    alert(" We will reply you soon");
  };

  return (
    <div>
      <Header />
      <div className="bodycn">
        <div className="info">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-2"></div>
              <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">CONTACT US</div>

                <div class="col-lg-12 login-form">
                  <div class="col-lg-12 login-form">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div class="form-group" id="form-groupabc">
                        <label class="form-control-label">YOUR NAME</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputabc"
                          placeholder="Enter your Name"
                          name="name"
                          value={name}
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div class="form-group" id="form-groupabc">
                        <label class="form-control-label">MESSAGE</label>

                        <textarea
                          class="form-control"
                          id="inputabc"
                          rows="6"
                          placeholder="Enter your Message"
                          name="message"
                          value={message}
                          onChange={(e) => onInputChange(e)}
                        ></textarea>
                      </div>

                      <div class="col-lg-12 loginbttm">
                        <div class="col-lg-6 login-btm login-text"></div>
                        <div class="col-lg-6 login-btm login-button">
                          <button type="submit" class="btn btn-outline-primary">
                            SEND
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
