import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

const Activities = () => {
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
      <Header />

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
                background: "#BCC6CC",
              }}
              placeholder="Search Activity"
              onChange={(e) => setSearch(e.target.value)}
            />

            <Row xs={1} md={3} className="g-4 rounded" id="by">
              {filterdActivity.map((activity) => (
                <Col>
                  <div className="card-group py-3">
                    <div
                      className="card"
                      style={{
                        backgroundImage: "",
                        borderRadius: "15px",
                        width: "20rem",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={`${activity.activityImage}`}
                        alt="..."
                        style={{
                          width: "100%",
                          minHeight: "40%",
                          hover: "hoverable",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{activity.aname}</h5>
                        <h6 className="card-title text-muted">
                          {activity.category}
                        </h6>
                        <p className="card-title">{activity.mindescription}</p>
                        <p className="card-text">
                          <i className="fas fa-tag">{activity.price}</i>
                        </p>
                        <Link
                          to={`/view-activity/${activity._id}`}
                          className="btn btn-primary"
                        >
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <hr />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Activities;

//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
  .card {
    transition: border-color 1s, box-shadow 0.5s;
  }
  .card:hover {
    border-color: rgba(13, 110, 253, 0.7);
    box-shadow: 0px 0px 10px 2px rgba(13, 110, 253, 0.6);
  }
`;
