import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../Styles/TravelPackage.css";
import HeaderAdmin from "../HeaderAdmin";

const CreatePackage = () => {
  let history = useHistory();

  const [packageName, setPackagename] = useState("");
  const [destination, setDestination] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [noofdays, setDays] = useState("");
  const [noofnights, setNights] = useState("");
  const [vehical, setVehical] = useState("");
  const [perperson, setPerperson] = useState("");
  const [message, setMessage] = useState("");
  const [packageImage, setPackageImage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

  let travelPackage = {
    packageName,
    destination,
    discription,
    date,
    noofdays,
    noofnights,
    vehical,
    perperson,
    packageImage,
  };

    axios
      .post("https://travelmanagement.onrender.com/travelpackages/admin/add", travelPackage)
      .then((res) => setMessage(res.data))

      .catch((err) => {
        console.log(err);
      });
    history.push("/travelpackages/admin");
    alert(" Travel Package Added Successful");
  };
  return (
    <div>
      <HeaderAdmin />

      <div className="infoadmin">
        <div className="bodyaa" id="bodytbc">
          <div>
            <div>
              <form
                class="signup-form signup-formtr"
                onSubmit={changeOnClick}
                encType="multipart/form-data"
              >
                <div class="form-header form-headertr">
                  <h1 style={{ color: "white" }}>
                    <b>Add New Travel Package</b>
                  </h1>
                </div>

                <div class="form-body form-bodytr">
                  <div class="form-group form-grouptr">
                    <lable class="label-title">
                      <b>Package Name *</b>
                    </lable>
                    <input
                      type="text"
                      name="packageName"
                      class="form-input"
                      placeholder="packageName"
                      value={packageName}
                      onChange={(e) => setPackagename(e.target.value)}
                      required="required"
                    />
                    <br />
                  </div>

                  <div class="form-group form-grouptr">
                    <lable class="label-title">
                      <b>Destination *</b>
                    </lable>
                    <input
                      type="text"
                      name="destination"
                      class="form-input"
                      placeholder="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required="required"
                    />
                    <br />
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
                        <b>Discription *</b>
                      </lable>
                      <input
                        type="text"
                        name="discription"
                        class="form-input"
                        placeholder="discription"
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        required="required"
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
                        <b>Date *</b>
                      </lable>
                      <input
                        type="text"
                        name="date"
                        class="form-input"
                        placeholder="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required="required"
                      />
                      <br />
                    </div>
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
                        <b>No of Days *</b>
                      </lable>
                      <input
                        type="text"
                        name="noofdays"
                        class="form-input"
                        placeholder="noofdays"
                        maxLength="3"
                        value={noofdays}
                        required="required"
                        onChange={(e) => setDays(e.target.value)}
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
                        <b>No of Nights *</b>
                      </lable>
                      <input
                        type="text"
                        name="noofnights"
                        class="form-input"
                        placeholder="noofnights"
                        value={noofnights}
                        maxLength="3"
                        required="required"
                        onChange={(e) => setNights(e.target.value)}
                      />
                      <br />
                    </div>
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
                        <b>Vehical *</b>
                      </lable>
                      <input
                        type="text"
                        required="required"
                        name="vehical"
                        class="form-input"
                        placeholder="vehical"
                        value={vehical}
                        onChange={(e) => setVehical(e.target.value)}
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
                        <b>Perperson *</b>
                      </lable>
                      <input
                        type="text"
                        name="perperson"
                        required="required"
                        class="form-input"
                        placeholder="perperson"
                        value={perperson}
                        onChange={(e) => setPerperson(e.target.value)}
                      />
                      <br />
                    </div>
                  </div>

                  <lable class="label-title">
                    <b>Add a Image*</b>
                    <div class="mb-3">
                    <input
                        type="text"
                        name="packageImage"
                        required="required"
                        class="form-input"
                        placeholder="packageImage"
                        value={packageImage}
                        onChange={(e) => setPackageImage(e.target.value)}
                      />
                    </div>
                  </lable>

                  <div style={{ paddingTop: "10px" }}>
                    <center>
                      <input
                        style={{ width: "100%" }}
                        type="submit"
                        class="reg btn btn-danger"
                        value="Add Package"
                      />
                    </center>
                  </div>
                  <br />
                </div>

                <br />
              </form>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;
