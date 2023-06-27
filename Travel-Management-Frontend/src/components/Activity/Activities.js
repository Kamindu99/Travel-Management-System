import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const Activities = () => {
  const [activity, setActivity] = useState([]);
  //DELETE ACTIVITY BY ID
  const deleteActivity = (id) => {
    axios
      .delete(`https://travelmanagement.onrender.com/activities/delete/${id}`)
      .then((res) => alert(res.data));
    setActivity(activity.filter((elem) => elem._id !== id));
  };

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://travelmanagement.onrender.com/activities")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  const filterdActivity = posts.filter((post) => {
    return post.aname.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <HeaderAdmin />

      <MainContainer>
        <div className="info">
          <div className="container">
            <input
              id="search-input"
              type="search"
              class="form-outline form-control"
              style={{
                width: "400px",
                marginlnlineStart: "14%",
                marginLeft: "990px",
                marginTop: "-50px",
                background: "#ADD8E6",
              }}
              placeholder="Search Activity"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="row my-3">
              <div className="col-sm-2">
                <Link to="/add-activity" className="btn btn-outline-secondary">
                  <i class="fas fa-plus">&nbsp;Add New Activity</i>
                </Link>
              </div>
              <div className="col-sm-2">
                <Link
                  to="/activity-select"
                  className="btn btn-outline-secondary"
                >
                  Print Select Details
                </Link>
              </div>

              <div className="col-sm-2">
                <Link
                  to="/activity-details"
                  className="btn btn-outline-secondary"
                >
                  Print Activity Details
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <Row xs={1} md={3} className="g-4 rounded" id="by">
              {filterdActivity.map((activity) => (
                <Col>
                  <div className="card-group py-3">
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <img
                        src={`${activity.activityImage}`}
                        alt="..."
                        style={{
                          width: "100%",
                          MinHeight: "40%",
                          borderRadius: "10px",
                        }}
                      />

                      <Link
                        to={{
                          pathname: `/activity/${activity._id}`,
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;
                        <h2>&nbsp;{activity.aname}</h2>
                      </Link>
                      <h6>&nbsp;{activity.category}</h6>
                      <br />
                      <p>&nbsp;{activity.mindescription}</p>
                      <br />
                      <p>
                        <i className="fas fa-tag">&nbsp;{activity.price}</i>
                      </p>

                      <div className="row my-3">
                        &nbsp;&nbsp;&nbsp;
                        <div className="col-sm-2">
                          <Link
                            to={`/update/${activity._id}`}
                            className="btn btn-outline-success"
                          >
                            <i className="far fa-edit">
                              &nbsp;&nbsp;Edit Activity
                            </i>
                          </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-2">
                          <button
                            onClick={() => deleteActivity(activity._id)}
                            className="btn btn-outline-danger"
                          >
                            <i className="far fa-trash-alt">
                              &nbsp;&nbsp;Delete Activity
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Activities;
//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
`;
