import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const EditActivity = (props) => {
  const [aname, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [mindescription, setMindescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("aname", aname);
    formData.append("category", category);
    formData.append("mindescription", mindescription);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("activityImage", fileName);

    setActivityName("");
    setCategory("");
    setMindescription("");
    setDescription("");
    setPrice("");
    setFileName("");

    axios
      .put(
        `https://travelmanagement.onrender.com/activities/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://travelmanagement.onrender.com/activities/${props.match.params.id}`)
      .then((res) => [
        setActivityName(res.data.aname),
        setCategory(res.data.category),
        setMindescription(res.data.mindescription),
        setDescription(res.data.description),
        setPrice(res.data.price),
        setFileName(res.data.articleImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div
        className="background"
        style={{
          background:
            "url(https://previews.123rf.com/images/wstockstudio/wstockstudio1707/wstockstudio170700176/82195391-accessories-for-travel-top-view-on-white-wooden-background-with-copy-space-adventure-and-wanderlust-.jpg)",
        }}
      >
        <HeaderAdmin />
        <AddActivityContainer>
          <div className="info">
            <div className="container" style={{ background: "#78866B" }}>
              &nbsp;&nbsp;
              <h1>Update Activity </h1>
              <span className="message">{message}</span>
              <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="aname">Activity Name</label>
                  <input
                    type="text"
                    value={aname}
                    onChange={(e) => setActivityName(e.target.value)}
                    className="form-control"
                    placeholder="Activity Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    placeholder="Category"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mindescription">Min Description</label>
                  <textarea
                    value={mindescription}
                    onChange={(e) => setMindescription(e.target.value)}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Price"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="file">Choose activity image</label>
                  <input
                    type="file"
                    filename="activityImage"
                    className="form-control-file"
                    onChange={onChangeFile}
                  />
                </div>
                <div className="flex-parent jc-center">
                  <button type="submit" className="btnbb">
                    Update Activity
                  </button>
                </div>
                <div className="flex-parent jc-center">
                  <Link
                    to="/activities"
                    type="submit"
                    className="btnaa"
                    style={{ color: "#000000" }}
                  >
                    <i class="fas fa-hand-point-left">&nbsp;Back to Activity</i>
                  </Link>
                </div>
                &nbsp;&nbsp;
              </form>
            </div>
          </div>
        </AddActivityContainer>
      </div>
    </div>
  );
};

export default EditActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 75.25rem;
  margin: 3rem auto;
  padding: 4rem;

  h1 {
    font-weight: 900;
    text-align: center;
  }

  .btnbb {
    margin-top: 2rem;
    background: #e5e4e2;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #c9c0bb;
      justify-content: center;
    }
  }

  .btnaa {
    margin-top: 2rem;
    background: #b6b6b4;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #838996;
      justify-content: center;
    }
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }

  h1 {
    font-weight: 900;
    color: #000000;
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }
`;
