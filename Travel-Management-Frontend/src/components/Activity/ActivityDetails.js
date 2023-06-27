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
    axios.get("https://travelmanagement.onrender.com/activities").then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <DetailsContainer>
          <div className="infoadmin">
            <ReactToPrint
              trigger={() => (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ marginLeft: 133 }}
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
                <h2> Print Activity Details</h2>
                <hr />

                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Activity Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posts.map((posts, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{posts.aname}</td>
                        <td>{posts.category}</td>
                        <td>{posts.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          );
        </DetailsContainer>
      </div>
    );
  }
}

export default ComponentToPrint;

//MAIN CONTAINER
const DetailsContainer = styled.div`
  button {
    margin: 1rem auto;
    padding: 1rem 1rem;
    height: 3rem;
  }
`;
