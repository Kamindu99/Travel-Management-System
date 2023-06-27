import React from "react";
import axios from "axios";
import styled from "styled-components";
import ReactToPrint from "react-to-print";
import HeaderAdmin from "../HeaderAdmin";

class ComponentToPrint extends React.Component {
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
    axios.get("https://travelmanagement.onrender.com/activityselect/allselects").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.allselects,
        });
        console.log(this.state.allselects);
      }
    });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <SelectContainer>
          <div className="info">
            <ReactToPrint
              trigger={() => (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ marginLeft: 1336 }}
                >
                  <i class="fas fa-print mr-2"></i>Generate Report
                </button>
              )}
              content={(Component) => this.componentRef}
            />
            <div
              className="container"
              ref={(Component) => (this.componentRef = Component)}
            >
              <div className="container">
                <h2> Print Select Details</h2>
                <hr />

                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Activity Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Booking Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posts.map((posts, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{posts.aName}</td>
                        <td>{posts.aprice}</td>
                        <td>{posts.name}</td>
                        <td>{posts.phone}</td>
                        <td>{posts.content}</td>
                        <td>{posts.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SelectContainer>
      </div>
    );
  }
}

export default ComponentToPrint;

//MAIN CONTAINER
const SelectContainer = styled.div`
  button {
    margin: 1rem auto;
    padding: 1rem 1rem;
    height: 3rem;
  }
`;
