import React, { useReducer, useState } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../../Styles/Guide.css'
import HeaderAdmin from '../HeaderAdmin'

const AddGuide = () => {

       let history = useHistory();

       const [name, setName] = useState("");
       const [address, setAddress] = useState("");
       const [language, setLanguage] = useState("");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [username, setUsername] = useState("");
       const [password, setPassword] = useState("");
       const [guideImage, setGuideImage] = useState("");
       const [message, setMessage] = useState("");

       const changeOnClick = (e) => {
              e.preventDefault();

              let guide = {
                     name,
                     address,
                     language,
                     email,
                     phone,
                     username,
                     password,
                     guideImage,
              };

              axios
                     .post("https://travelmanagement.onrender.com/guide/add", guide)
                     .then(
                            (res) => setMessage(res.data))

                     .catch((err) => {
                            console.log(err);
                     });
              history.push("/guide");
              alert("Guide Added Successfully!")
       };
       return (
              <div>
                     <HeaderAdmin />

                     <div class="infoadmin">
                            <section id="add" style={{ background: "blueviolet" }}>
                                   <br />
                                   <div className="w-50 mx-auto shadow p-5" style={{ background: "white" }}>
                                          <h2 className="text text- mb-10"><b>Add New Guide</b></h2>
                                          <hr />

                                          <br />

                                          <form onSubmit={changeOnClick} encType="multipart/form-data">

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-user-o mr-2" aria-hidden="true"></i>
                                                        <strong>Name</strong></label>
                                                 <div className="form-group">
                                                        <input
                                                               type="text"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter Name"
                                                               name="name"
                                                               value={name}
                                                               onChange={(e) => setName(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-address-card-o mr-2" aria-hidden="true"></i>
                                                        <strong>Address</strong></label>
                                                 <div className="form-group">
                                                        <input
                                                               type="text"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter Address"
                                                               name="address"
                                                               value={address}
                                                               onChange={(e) => setAddress(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
                                                        <strong>Language</strong></label>
                                                 <div className="form-group">
                                                        <select name="language"
                                                               id="floatingInput"
                                                               className="form-control border-dark"
                                                               value={language}
                                                               onChange={(e) => setLanguage(e.target.value)}
                                                               required >
                                                               <option>Select</option>
                                                               <option>Sinhala</option>
                                                               <option>English</option>
                                                               <option>Tamil</option>
                                                        </select>
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                                                        <strong>E-Mail</strong></label>
                                                 <div className="form-group">
                                                        <input
                                                               type="email"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter E-Mail"
                                                               name="email"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-address-book-o mr-2" aria-hidden="true"></i>
                                                        <strong>Contact Number</strong></label>
                                                 <div className="form-group">
                                                        <input type="text"
                                                               oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                                               maxlength="10"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter Contact Number"
                                                               name="phone"
                                                               value={phone}
                                                               onChange={(e) => setPhone(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-user-o mr-2" aria-hidden="true"></i>
                                                        <strong>Username</strong></label>
                                                 <div className="form-group">
                                                        <input
                                                               type="text"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter Username"
                                                               name="username"
                                                               value={username}
                                                               onChange={(e) => setUsername(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <label htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-unlock-alt mr-2" aria-hidden="true"></i>
                                                        <strong>Password</strong></label>
                                                 <div className="form-group">
                                                        <input
                                                               type="password"
                                                               className="form-control border-dark"
                                                               id="floatingInput"
                                                               placeholder="Enter Password"
                                                               name="password"
                                                               value={password}
                                                               onChange={(e) => setPassword(e.target.value)}
                                                               required />
                                                 </div>

                                                 <br />

                                                 <lable htmlFor="floatingInput" style={{ fontSize: 17, color: "green" }}><i class="fa fa-file-image-o mr-2" aria-hidden="true"></i>
                                                        <b>Select Image</b>
                                                        <br />
                                                        <div class="mb-3">
                                                               <input
                                                                      type="text"
                                                                      className="form-control border-dark"
                                                                      id="floatingInput"
                                                                      placeholder="Enter URL"
                                                                      name="guideImage"
                                                                      value={guideImage}
                                                                      onChange={(e) => setGuideImage(e.target.value)}
                                                                      required />
                                                        </div>
                                                 </lable>

                                                 <br />

                                                 <button type="submit" className="btn btn-success">
                                                        <i class="fa fa-plus mr-2" aria-hidden="true"></i>
                                                        Add Guide
                                                 </button>

                                          </form>
                                   </div>
                            </section>
                     </div>

              </div>

       );

};


export default AddGuide;