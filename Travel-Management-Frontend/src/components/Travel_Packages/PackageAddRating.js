import React, { useState } from "react";
import Reactstars from "react-rating-stars-component";
import axios from "axios";
import { Form } from "react-bootstrap";


export default function AddRating(props) {

  console.log(props.id);

  const [rating, setRating] = useState(0)

  const ratingChanged = (rating) => {
    setRating(rating)
  };
  
  const onSubmit = (e) => {
    e.preventDefault();

    let startRating = {
      rating,
      packageId: props.id
    };

    axios.post('https://travelmanagement.onrender.com/travelpackage/review', startRating)
      .then((res) => console.log(res.data))

      .catch((err) => {
        alert("Please fill this field");
      });
      window.location.replace(`/travelpackages/travelpackage/${props.id}`)
    alert(`ThankYou! You have given ${rating} star rating for us.`);
  };


  return (

    <div className="container">
      <div className="app">
        <div>

          <center>
            <Form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3" >


                <div className="rating" >
                  <Reactstars size={85} value={rating} onChange={ratingChanged} />
                </div>

              </div>

              <button className="btn btn-success" type="submit">Give Rating</button><hr />
            </Form>
          </center>
        </div>
      </div>
    </div>
  )
}
