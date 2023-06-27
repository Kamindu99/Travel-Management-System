import React, { Component } from "react";
import axios from "axios";
import "../../Styles/TravelPackage.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";
export default class AllPackagesAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("https://travelmanagement.onrender.com/travelpackages").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPackage,
        });
        console.log(this.state.travelpackages);
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`https://travelmanagement.onrender.com/travelpackages/admin/delete/${id}`)
      .then((res) => {
        alert("Delete SuccessFully");
        this.retrievePosts();
      });
  };

  filterData(posts, searchkey) {
    const result = posts.filter(
      (post) =>
        post.packageName.toLowerCase().includes(searchkey) ||
        post.packageName.toUpperCase().includes(searchkey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("https://travelmanagement.onrender.com/travelpackages").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPackage, searchkey);
      }
    });
  };

  render() {
    return (
      <div>
        <HeaderAdmin />
        <div
          className="infoadmin"
          style={{
            backgroundImage:
              "url('https://www.teahub.io/photos/full/236-2363540_world-map-travel-background.jpg')",
          }}
        >
          <div className="container">
            <br />
            <div
              style={{
                backgroundColor: "hsla(90, 100%, 0%, 0.57)",
                paddingBottom: "15px",
                paddingTop: "15px",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-success">
                <a
                  href="/travelpackage/admin/add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i class="fas fa-plus mr-2"></i>Add New Package
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-success">
                <a
                  href="/allbooking"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i class="fas fa-book mr-2"></i>Booking Details
                </a>
              </button>
             
              <input
                id="search-input"
                type="search"
                id="form1"
                style={{marginLeft:"530px"}}
                placeholder="Search Package"
                onChange={this.handleSearchArea}
              />
              <button id="search-button" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <hr />
            <Row xs={1} md={3} className="g-4 " id="by" class="rounded">
              {this.state.posts.map((posts, index) => (
                <Col key={index}>
                  <div
                    class="card"
                    style={{
                      backgroundColor: "hsl(0,0%,100%,0.9)",
                      borderColor: "black",
                    }}
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        {index + 1}.&nbsp; <b>{posts.packageName}</b>
                      </h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        {posts.destination}
                      </h6>
                      <p class="card-text">
                        <i class="fas fa-car mr-2"></i>Vehical Type:-&nbsp;
                        {posts.vehical}{" "}
                      </p>
                      <p class="card-text">
                        {posts.noofdays} {posts.noofnights}{" "}
                        &nbsp;&nbsp;||&nbsp;&nbsp; Per Person:- Rs.
                        {posts.perperson}{" "}
                      </p>
                      &nbsp;&nbsp;
                      <a
                        className="btn btn-outline-primary"
                        href={`/travelpackages/travelpackage/admin/${posts.id}`}
                      >
                        <i className="fas fa-eye"></i>&nbsp;View
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        className="btn btn-outline-warning"
                        href={`/travelpackage/admin/edit/${posts.id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        className="btn btn-outline-danger"
                        href={`/travelpackage/admin/delete/${posts.id}`}
                      >
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <br />
          </div>
        </div>{" "}
      </div>
    );
  }
}
