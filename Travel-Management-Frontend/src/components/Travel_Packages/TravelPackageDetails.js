import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import AddRating from './PackageAddRating';

export default class PackageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://travelmanagement.onrender.com/travelpackages/admin/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            post: res.data.post,
          });
        }
      });
  }

  render() {
    const {
      _id,
      packageName,
      destination,
      discription,
      date,
      noofdays,
      noofnights,
      vehical,
      perperson,
      packageImage,
    } = this.state.post;

    return (
      <div className="boodydetails">
        <Header />
        <div className="infotr boodydetails">
          <div className="container">
            <div className={{ paddingBottom: "10px" }}><hr /></div>
            <ul class="postcard__tagbox" style={{ fontSize: "16px", marginTop: "40px" }}>
              <li>
                <small class="text-muted" style={{ marginInlineStart: "2%" }}>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "100px" }}
                    onClick={() => {window.history.back();}}
                  >
                      <i class="fas fa-angle-left mr-2"></i>Back
                  </button>
                </small>{" "}
              </li>
              <div style={{ marginInlineStart: "59%" }}>
                <li class="tag__item">
                  <i class="fab fa-cc-visa mr-2"></i>Visa Payment
                </li>
                <li class="tag__item">
                  <i class="fas fa-paper-plane mr-2"></i>Full Option
                </li>
                <li class="tag__item play blue">
                  {" "}
                  <i class="fas fa-hands mr-2"></i>Security{" "}
                </li>
              </div>
            </ul>
            <hr />
            <br />

            <div class="card">
              <img
                style={{ height: "580px" }}
                class="card-img-top"
                src={`${packageImage}`}
                alt="..."
              />
              <div class="card-body" style={{ backgroundColor: "#DDE8E8" }}>
                <h5 class="card-title"> {packageName}</h5>
                <p class="card-text"> {date} </p>
                <p class="card-text">
                  <i class="fas fa-long-arrow-alt-right mr-2"></i>
                  <b> {destination} </b>{" "}
                </p>
                <p class="card-text">
                  <i class="fas fa-long-arrow-alt-right mr-2"></i>
                  <b> {discription} </b>{" "}
                </p>

                <p>
                  We are the Best Travel Company in Sri Lanka. Since 2018, Us
                  the "Dream travellers" has been committed to bring the
                  travellers the best experience and value for their travel
                  arrangements. We are passionate about travel and providing
                  corporate travellers high-touch services to facilitate their
                  travel needs and sharing the world's wonders best experience
                  on the leisure travel side. On behalf of that we offer
                  valuable and time reliable offers for the best prices for our
                  customers.Sri Lanka Local Tours tailor-makes unique Sri Lanka
                  tours, sightseeing adventures and interesting trips s tarting
                  from the gateway cities of Sri Lanka to help travelers explore
                  Sri Lanka on their way. We are a passionate team of one
                  hundred avid travelers who love to share our experiences of
                  Sri Lanka with those looking for a more authentic travel
                  experience.
                </p>
              </div>


              <div class="modal custom-fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content" style={{ width: "400px", height: "200px", alignContent: "center" }}>

                    <div >
                      <AddRating id={_id} />

                    </div>

                  </div>
                </div>
              </div>


              <div class="card-footer" style={{ backgroundColor: "#ADADAD" }}>
                <ul class="postcard__tagbox" style={{ fontSize: "16px" }}>
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>PP Rs.&nbsp;{perperson}
                  </li>
                  <li class="tag__item">
                    <i class="fas fa-clock mr-2"></i>
                    {noofdays}&nbsp;{noofnights}
                  </li>
                  <li class="tag__item play blue">
                    {" "}
                    <i class="fas fa-car mr-2"></i>
                    {vehical}{" "}
                  </li>



                  <li style={{ marginLeft: "12%", paddingBottom: "5px" }} >
                    <button style={{ width: "200px" }} type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                      <b>Give Rating</b>
                    </button>
                  </li>

                  <li style={{ marginLeft: "18%", paddingBottom: "5px" }}>
                    <small class="text-muted">
                      {" "}
                      <button
                        type="submit"
                        class="btn btn-danger"
                        style={{ width: "300px", fontSize: "20px" }}
                      >
                        <a
                          href={`/bookingpackage/${_id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Book Package
                        </a>
                      </button>
                    </small>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
