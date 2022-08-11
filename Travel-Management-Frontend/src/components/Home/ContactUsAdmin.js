import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";

export default class AllMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactus: [],
    };
  }

  componentDidMount() {
    this.retrieveContactus();
  }

  retrieveContactus() {
    axios.get("http://localhost:8070/contactus").then((res) => {
      if (res.data.success) {
        this.setState({
          contactus: res.data.existingContactUs,
        });
        console.log(this.state.contactus);
      }
    });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <div className="infoadmin">
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Contact us Messages</h1>
            <br />
            <Row xs={1} md={1} className="g-5" id="by" class="rounded">
              {this.state.contactus.map((contactus, idx) => (
                <div class="card" style={{ boxShadow: "3px 3px 3px 3px" }}>
                  <div className="contactuscardheader">
                    <div class="card-header">
                      <h5 class="card-title" style={{ color: "white" }}>
                        <b>Coustomer Name -</b> &nbsp;{contactus.name}
                      </h5>
                    </div>
                  </div>
                  <div className="contactuscard">
                    <div class="card-body" style={{}}>
                      <h5 class="card-title">
                        <b>Message</b>
                      </h5>
                      <p class="card-text">{contactus.message}</p>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{ marginInlineStart: "90%" }}
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>{" "}
      </div>
    );
  }
}
