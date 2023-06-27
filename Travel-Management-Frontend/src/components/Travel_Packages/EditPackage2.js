import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import "../../Styles/TravelPackage.css";
import HeaderAdmin from "../HeaderAdmin";

const EditTPackage = (props) => {
  const [tpackage, viewPackage] = useState({});

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

  const [packageName, setPackagename] = useState("");
  const [destination, setDestination] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [noofdays, setDays] = useState("");
  const [noofnights, setNights] = useState("");
  const [vehical, setVehical] = useState("");
  const [perperson, setPerperson] = useState("");
  const [message, setMessage] = useState("");
  const [packageImage, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("destination", destination);
    formData.append("discription", discription);
    formData.append("date", date);
    formData.append("noofdays", noofdays);
    formData.append("noofnights", noofnights);
    formData.append("vehical", vehical);
    formData.append("perperson", perperson);
    formData.append("packageImage", packageImage);

    setPackagename("");
    setDestination("");
    setDiscription("");
    setDate("");
    setDays("");
    setNights("");
    setVehical("");
    setPerperson("");
    setFileName("");

    axios
      .put(
        `https://travelmanagement.onrender.com/travelpackages/admin/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });

    history.push(
      `/travelpackages/travelpackage/admin/${props.match.params.id}`
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://travelmanagement.onrender.com/travelpackages/admin/${props.match.params.id}`
      )
      .then((res) => [
        setPackagename(res.data.post.packageName),
        setDestination(res.data.post.destination),
        setDiscription(res.data.post.discription),
        setDate(res.data.post.date),
        setDays(res.data.post.noofdays),
        setNights(res.data.post.noofnights),
        setVehical(res.data.post.vehical),
        setPerperson(res.data.post.perperson),
        setFileName(res.data.post.packageImage),
      ])
      .catch((error) => console.log(error));
  }, []);

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
        <div className="container">
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <small class="text-muted" style={{ marginInlineStart: "2%" }}>
              <button
                type="submit"
                class="btn btn-primary"
                style={{ width: "100px", marginTop: "20px" }}
              >
                <a
                  href={`/travelpackages/travelpackage/admin/${tpackage._id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i class="fas fa-angle-left mr-2"></i>Back
                </a>
              </button>
            </small>{" "}
            <br />
            <br />
            <div
              class="card mb-4"
              style={{
                maxWidth: "98%",
                backgroundColor: "hsla(90, 0%, 100%, 0.81)",
              }}
            >
              <div class="row no-gutters">
                <div class="col-md-4 mr-4">
                  <img
                    style={{
                      marginInlineStart: "6%",
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

                <div class="col">
                  <div class="card-body">
                    <h5 class="card-title">
                      <b>PACKAGE NAME :- </b>
                      <input
                        type="text"
                        name="packageName"
                        placeholder="packageName"
                        value={packageName}
                        onChange={(e) => setPackagename(e.target.value)}
                        required="required"
                        style={{ width: "60%" }}
                      />{" "}
                    </h5>
                    <p class="card-text">
                      <small class="text-muted mr-5">
                        {" "}
                        <input
                          type="text"
                          name="destination"
                          placeholder="destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          required="required"
                          style={{ width: "250px" }}
                        />{" "}
                      </small>
                      <small class="text-muted">
                        <input
                          type="text"
                          name="date"
                          placeholder="noofdays"
                          maxLength="3"
                          value={date}
                          required="required"
                          onChange={(e) => setDate(e.target.value)}
                          style={{ width: "100px" }}
                        />{" "}
                      </small>
                    </p>

                    <p class="card-text">
                      <textarea
                        type="text"
                        name="discription"
                        placeholder="discription"
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        required="required"
                        rows="4"
                        style={{ width: "99%" }}
                      ></textarea>
                    </p>

                    <div class="d-flex flex-row align-items-center mb-2">
                      <div class="form-outline mb-2 ">
                        <i
                          class="fas fa-car mr-2"
                          style={{ color: "blue" }}
                        ></i>
                        <b>DURATION :- </b>
                        <input
                          type="text"
                          name="noofdays"
                          placeholder="noofdays"
                          maxLength="3"
                          value={noofdays}
                          required="required"
                          onChange={(e) => setDays(e.target.value)}
                          style={{ width: "40px" }}
                        />
                        &nbsp;{" "}
                        <input
                          type="text"
                          name="noofnights"
                          placeholder="noofnights"
                          value={noofnights}
                          maxLength="3"
                          required="required"
                          onChange={(e) => setNights(e.target.value)}
                          style={{ width: "40px" }}
                        />
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <div class="form-outline mb-2 ">
                        <i
                          class="fas fa-car mr-2"
                          style={{ color: "blue" }}
                        ></i>
                        <b>PER PERSON :- </b>{" "}
                        <input
                          type="text"
                          name="perperson"
                          required="required"
                          placeholder="perperson"
                          value={perperson}
                          onChange={(e) => setPerperson(e.target.value)}
                          style={{ width: "50px" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <i
                          class="fas fa-car mr-2"
                          style={{ color: "blue" }}
                        ></i>
                        <b>VEHICAL :- </b>{" "}
                        <input
                          type="text"
                          required="required"
                          name="vehical"
                          placeholder="vehical"
                          value={vehical}
                          onChange={(e) => setVehical(e.target.value)}
                          style={{ width: "80px" }}
                        />
                      </div>
                    </div>

                    <center>
                      <button
                        type="submit"
                        class="btn btn-danger"
                        style={{ width: "100%", fontSize: "17px" }}
                      >
                        Edit Package
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTPackage;
