import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";

export default class AllFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
    };
  }

  componentDidMount() {
    this.retrieveFeedback();
  }

  retrieveFeedback() {
    axios.get("https://travelmanagement.onrender.com/feedback").then((res) => {
      if (res.data.success) {
        this.setState({
          feedback: res.data.existingFeedback,
        });
        console.log(this.state.feedback);
      }
    });
  }

  render() {
    return (
      <div
         className="background"
      style={{
        background:
          "url(https://landman.me/wp-content/uploads/2019/07/travel-background-png-2.png)",
      }}>
        <HeaderAdmin />
        <div className="info">
          <div className="container" style={{ background: "" }}>
            &nbsp;&nbsp;
            <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
            <br />
            <Row xs={1} md={1} className="g-4" id="by" class="rounded">
              {this.state.feedback.map((feedback, idx) => (
                <div
                  className="card"
                  style={{
                    width: "90%",
                    borderRadius: "15px 50px 30px",
                    filter: "drop-shadow(0 0 0.25rem #7DFDFE)",
                  }}
                >
                  <div className="card-body">
                    <h3 className="card-title">{feedback.fullName}</h3>

                    <h5 className="card-subtitle mb-2 text-muted">
                      <i class="fas fa-envelope-open-text">
                        &nbsp; {feedback.email}
                      </i>
                    </h5>
                    <i class="fas fa-comments"></i>
                    <p className="card-text">{feedback.feedBack}</p>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
