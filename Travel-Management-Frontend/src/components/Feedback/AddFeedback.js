import React, { sendLetter, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
const AddFeedback = () => {
  const [validated, setValidated] = useState(false);
  let history = useHistory();

  const [feedback, addFeedback] = useState({
    fullName: "",
    email: "",
    feedBack: "",
  });
  const { fullName, email, feedBack } = feedback;
  const onInputChange = (e) => {
    addFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      await axios.post("https://travelmanagement.onrender.com/feedback/add", feedback);
      history.push("/");
      alert(" Successfully added Your Feedback");
    }
    setValidated(true);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container" className="info">
        <div
          className="w-75 mx-auto shadow p-5"
          style={{
            background:
              "url(https://static8.depositphotos.com/1066961/981/i/950/depositphotos_9814717-stock-photo-grunge-travel-background.jpg)",
            filter: "drop-shadow(0 0 0.75rem #8E7618)",
          }}
        >
          <h2 className="text- mb-10">Feedback Form</h2>
          <hr /> <br></br>
          <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <h6>Full Name</h6>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your Name"
                name="fullName"
                value={fullName}
                onChange={(e) => onInputChange(e)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Name
              </Form.Control.Feedback>
            </div>

            <div class="form-group">
              <h6>Email</h6>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email
              </Form.Control.Feedback>
            </div>

            <div className="mb-3">
              <label for="Textarea1" className="form-label">
                Example textarea
              </label>

              <textarea
                className="form-control"
                id="Textarea1"
                rows="3"
                type="text"
                placeholder="Please let us know how we're doing"
                name="feedBack"
                value={feedBack}
                onChange={(e) => onInputChange(e)}
                required
              ></textarea>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a Feedback
              </Form.Control.Feedback>
            </div>

            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </Form>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default AddFeedback;

//MAIN CONTAINER
const FeedbackContainer = styled.div`
}
`;
