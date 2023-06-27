import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const ViewActivity = (props) => {
  const [aname, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`https://travelmanagement.onrender.com/activities/${props.match.params.id}`)
      .then((res) => [
        setActivityName(res.data.aname),
        setCategory(res.data.category),
        setDescription(res.data.description),
        setPrice(res.data.price),
        setFileName(res.data.activityImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  //console.log(props);
  return (
    <div>
      <Header />
      <ActivityContainer>
        <div className="info">
          <div className="container">
            <div className="row my-5">
              <div className="col-sm-2">
                <Link to="/all" type="submit" className="btn">
                  <i class="fas fa-hand-point-left">&nbsp;&nbsp;Back</i>
                </Link>
              </div>
            </div>
          </div>
          <h2>{aname}</h2>
          <img
            src={`${fileName}`}
            alt="..."
            style={{ margin: "0 auto", width: "60%", display: "flex" }}
          />
          <br />
          <br />
          <h5>
            <div className="threeD">{category}</div>
          </h5>
          <br />
          <p>{description}</p>
          <p>
            <i className="fas fa-tag">{price}</i>
          </p>
          <br />
          <div class="grid gap-5 grid-cols-5">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to={`/activity-user/${props.match.params.id}`}
              className="btn"
              style={{ color: "#b6465f", background: "#9bb1ff" }}
            >
              Select Activity
            </Link>
          </div>
        </div>
      </ActivityContainer>
      <Footer />
    </div>
  );
};

export default ViewActivity;

//MAIN CONTAINER
const ActivityContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
    text-transform: Uppercase;
    margin-bottom: .5em;
    font-family: 'Rubik', sans-serif;
    font-size: 4rem;
    color: #E4E5E6; 
    position: relative;
    background: linear-gradient(to right, #24243e, #141E30, #0f0c29);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
    h2:before,
    h2:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0; 
    
    h2:before 
    z-index: -1;
    text-shadow: -0.001em -0.001em 1px rgba(255,255,255,.15)}
    
    h2:after 
    z-index: -2;
    text-shadow: 10px 10px 10px rgba(0,0,0,.5), 20px 20px 20px rgba(0,0,0,.4), 30px 30px 30px rgba(0,0,0,.1);
    mix-blend-mode: multiply; }
    }

    .btn {
        background: #a5a5a5;
        border: none;
        &:hover {
            background: #aeb4a9;
        }
    }

    h5 {
        position: relative;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 700;
        color: #ded6d1;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        perspective: 500px;
    }
    
    h5::before,
    h5::after {
        content: attr(aria-label);
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
    }
    
    h5::before {
        animation: floatAbove 3.5s ease-in-out infinite;
        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
                clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
    }
    
    h5::after {
        opacity: 0.65;
        filter: blur(0.02em);
        transform: translate(-50%, -50%) rotateX(21deg);
        animation: floatBelow 3.5s ease-in-out infinite;
        -webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
                clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    }
    
    @keyframes floatAbove {
        50% {
            transform: translate(-50%, -60%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
                    clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
        }
    }
    
    @keyframes floatBelow {
        50% {
            transform: translate(-50%, -60%) rotateX(10deg);
            -webkit-clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
                    clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
        }

    }
 
`;
