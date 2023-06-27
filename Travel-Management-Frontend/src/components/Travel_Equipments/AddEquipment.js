import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import HeaderAdmin from '../HeaderAdmin';

const AddEquipment = () => {

  let history = useHistory();

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");


  const changeOnClick = (e) => {
    e.preventDefault();

    let equipment = {
      name,
      description,
      price,
      image,
    };

    axios
      .post("https://travelmanagement.onrender.com/equipment/add", equipment)
      .then(
        (res) => setMessage(res.data))

      .catch((err) => {
        console.log(err);
      });
    history.push("/equipment/admin");
    alert(" Travel Equipment Added Successful")
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="infoadmin">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Equipment</h2>
            <form class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  rows="6"
                  className="form-control form-control-lg"
                  placeholder="Enter Description"
                  name="description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                  required
                />
              </div>

              <lable class="label-title"><b>Add an Image*</b>
                <div class="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter URL"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div></lable>

              <button className="btn btn-primary btn-block">Done</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;