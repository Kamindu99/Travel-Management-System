import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import "../../Styles/TravelPackage.css";
import HeaderAdmin from "../HeaderAdmin";

const ViewPackage = () => {
  const [tpackage, viewPackage] = useState({
    packageName: "",
    destination: "",
    date: "",
    noofdays: "",
    noofnights: "",
    packageImage: "",
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

  return (
    <div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div
          class="card mb-3"
          style={{ backgroundColor: "hsla(90, 0%, 100%, 0.81)" }}
        >
          <div class="row g-0">
            <div class="col-md-4 mr-4">
              <img
                style={{
                  marginInlineStart: "3%",
                  marginTop: "13%",
                  borderRadius: "12px",
                }}
                class="bd-placeholder-img"
                width="100%"
                height="70%"
                src={`${tpackage.packageImage}`}
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h2 class="card-title"> {tpackage.packageName} </h2>
                <p class="card-text ptr">
                  <b>{tpackage.destination}</b>
                </p>
                <p class="card-text ptr">
                  <small class="text-muted">{tpackage.date}</small>
                </p>
                <p class="card-text ptr">
                  No of Days -<b> {tpackage.noofdays}</b>
                </p>
                <p class="card-text ptr">
                  No of Nights - <b>{tpackage.noofnights}</b>
                </p>
                <p class="card-text ptr">
                  Per Person - <b>{tpackage.perperson}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DeleteTravelPackage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <HeaderAdmin />

      <div
        className="infoadmin"
        style={{
          backgroundImage:
            "url('https://www.teahub.io/photos/full/236-2363540_world-map-travel-background.jpg')",
          minHeight: "600px",
        }}
      >
        <div className="Appxx">
          <h1
            style={{
              backgroundColor: "hsla(90, 0%, 33%, 0.73)",
              marginTop: "20px",
              color: "white",
            }}
          >
            Do You Want to delete this travel package .?
          </h1>
          <ViewPackage />
          <button
            className="openModalBtn btn btn-danger"
            onClick={() => {
              setOpenModal(true);
            }}
            style={{ width: "50%", color: "white", fontSize: "20px" }}
          >
            Delete Package
          </button>
          {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
}

function Modal({ setOpenModal }) {
  let history = useHistory();

  const deletepackage = async (id) => {
    await axios.delete(
      `https://travelmanagement.onrender.com/travelpackages/admin/delete/${id}`
    );

    history.push("/travelpackages/admin");
  };

  const { id } = useParams();
  return (
    <div className="modalBackground">
      <div className="p">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <div className="footera">
              <b>Confirm Delete</b>
            </div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title"></div>
          <div className="body">
            <p>
              Are You Sure You Want to Delete this Travel package.? This package
              can't be restore.
            </p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => deletepackage(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
