import React from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import HeaderAdmin from "../HeaderAdmin";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      sortType: "asc",
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("https://travelmanagement.onrender.com/packagebooking/allbookings")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.allBookings,
          });
        }
      });
  }

  render() {
    const { posts, sortType } = this.state;
    const sorted = posts.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.packagename.localeCompare(b.packagename);
    });


    return (
      <div>
        <HeaderAdmin />
        <div
          className="infoadmin"
          style={{
            backgroundImage:
              "url('https://www.teahub.io/photos/full/236-2363540_world-map-travel-background.jpg')",
            minHeight: "700px",
          }}
        >
          <br />
          <div>
            <div
              class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(90, 100%, 0%, 0.5)",
                color: "white",
                paddingTop: "10px",
              }}
            >
              <div class="form-outline mb-2 ">
                <h2 style={{ marginInlineStart: "60px" }}>
                  {" "}
                  <b>Package Booking Details</b>
                </h2>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="form-outline mb-2 ">
                <ReactToPrint
                  trigger={() => (
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ marginInlineStart: "380%" }}
                    >
                      <i class="fas fa-print mr-2"></i>Print this out!
                    </button>
                  )}
                  content={() => this.componentRef}
                />
              </div>
            </div>

            <div ref={(Component) => (this.componentRef = Component)}>
              <hr />
              <div
                style={{ marginInlineEnd: "10px", marginInlineStart: "10px" }}
              >
                <table
                  class="table"
                  style={{ backgroundColor: "hsla(90, 0%, 100%, 0.9)" }}
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Package Name</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Customer Address</th>
                      <th scope="col">Contact Email</th>
                      <th scope="col">Join Place</th>
                      <th scope="col">Booking Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((posts, index) => (
                      <tr key={index} style={{ fontWeight: "bold" }}>
                        <th scope="row">{index + 1}</th>
                        <td>{posts.packagename}</td>
                        <td>{posts.name}</td>
                        <td>{posts.phone}</td>
                        <td>{posts.address}</td>
                        <td>{posts.email}</td>
                        <td>{posts.joinplace}</td>
                        <td>{posts.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
