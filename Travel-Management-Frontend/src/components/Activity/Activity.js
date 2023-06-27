import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const Activity = (props) => {
  const [aname, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [mindescription, setMindescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    //REQUEST THE DATA FROM A SERVER AND SET DATA TO ACTIVITY ARRAY
    axios
      .get(`https://travelmanagement.onrender.com/activities/${props.match.params.id}`)
      .then((res) => [
        setActivityName(res.data.aname),
        setCategory(res.data.category),
        setMindescription(res.data.mindescription),
        setDescription(res.data.description),
        setPrice(res.data.price),
        setFileName(res.data.activityImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <MainContainer>
        <div className="info">
          <h2>{aname}</h2>
          <img
            src={`${fileName}`}
            alt="..."
            style={{ margin: "0 auto", width: "70%", display: "flex" }}
          />
          <br />
          <h6 style={{ title: "text-muted" }}>{category}</h6>
          <br />
          <p>{description}</p>
          <p>
            <i class="fas fa-tag">{price}</i>
          </p>
          <br />

          <Link to="/activities" type="submit" className="btn btn-primary">
            Back to Activity Page
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};

export default Activity;

//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: #13315c;
  }

  .btn-primary {
    background: #16262e;
    width: 11rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #cccccc;
    }
  }
`;
