import React, { Component } from "react";
import axios from "axios";
import { Button, Row } from "react-bootstrap";
import "../../Styles/TravelPackage.css";
import Header from "../Header";
import Footer from "../Footer";
import Reactstars from "react-rating-stars-component";

export default class CardItemsT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    this.setState({ isLoading: true });
    axios.get("https://travelmanagement.onrender.com/travelpackages")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPackage,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


  filterData(posts, searchkey) {
    const result = posts.filter(
      (post) =>
        post.packageName.toLowerCase().includes(searchkey) ||
        post.packageName.toUpperCase().includes(searchkey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    this.setState({ isLoading: true });
    axios.get("https://travelmanagement.onrender.com/travelpackages").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPackage, searchkey);
        this.setState({ isLoading: false });
      }
    })
    .catch((error) => {
      console.log(error);
      this.setState({ isLoading: false });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="infotr bodytravelpackage">
          <div className="bodytravelpackage container" id="bbimg">
            <div>
              <br />
              <div class="row text-center text-lg-start">
                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-5">
                    <img
                      class="img-fluid img-thumbnail"

                      src=" https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-Sri-Lanka-Train-to-Kandy-253468045-430x246.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-Sri-Lanka-Aerial-view-of-Unawatuna-1281093679-430x246.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-Sri-Lanka-Tea-plantations-in-Nuwara-Eliya-263078249-430x246.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.worldtravelguide.net/wp-content/uploads/2019/05/shu-UK-England-London-Waterfall-at-Kyoto-Garden-1340178161-430x246-1.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.worldtravelguide.net/wp-content/uploads/2021/08/shu-CostaRica-ManuelAntonio_1553348390-430.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-Sri-Lanka-Train-to-Kandy-253468045-430x246.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <hr />
              <p className="mb-2">   Sri Lanka, formerly known as Ceylon, and officially the Democratic
                Socialist Republic of Sri Lanka, is an island country in South
                Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal,
                and southeast of the Arabian Sea; it is separated from the Indian
                subcontinent by the Gulf of Mannar and the Palk Strait Sri Lanka,
                an island south of India crams an extraordinary variety of places
                to visit within its modest size. Lapped up by the Indian Ocean,
                the coastline is lined with idyllic – and often refreshingly
                undeveloped – beaches, while the mainland boasts a compelling
                variety of landscapes ranging from wildlife-rich lowland jungles
                to the misty highlands of the hills, swathed in tea plantations.
                We love nature, adventure and road trips. Read on to travel with
                us and let us show you the magical side of the places that we
                visit.

              </p>

              <div class="d-flex flex-row align-items-center mb-2"
                style={{
                  backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                  paddingBottom: "5px",
                  paddingTop: "7px",

                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <h1><b>Our Travel Packages</b></h1>

                <input
                  id="search-input"
                  type="search"

                  class="form-outline form-control"
                  style={{ width: "400px", marginInlineStart: "29%" }}
                  placeholder="Search Package"
                  onChange={this.handleSearchArea}
                />

                <button
                  id="search-button"
                  type="button"
                  class="btn btn-primary"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>



              <hr />
              <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.isLoading ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                    <div className="spinner-border text-dark" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
                  </div>
                ) :
                  <>
                    {this.state.posts.length == 0 ?
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                        <h2>No Packages Found</h2>
                      </div> :
                      <>
                        {this.state.posts.map((posts, idx) => (
                          <div class="container py-1">
                            <article class="postcard postcardtr dark blue">
                              <a class="postcard__img_link">
                                <img
                                  class="postcard__img"
                                  src={`${posts.packageImage}`}
                                  alt="..."
                                />
                              </a>
                              <div class="postcard__text">
                                <h1 class="postcard__title blue">
                                  <a href="#">
                                    {" "}
                                    {idx + 1}. &nbsp;{posts.packageName}
                                  </a>
                                </h1>


                                <div class="d-flex">
                                  <div class="form-outline mr-4">

                                    <time class="postcard__subtitle small smalltr" datetime="2020-05-25 12:00:00">
                                      <i class="fas fa-calendar-alt mr-2"></i>
                                      {posts.date}
                                    </time>

                                  </div>
                                  <div class="form-outline ">

                                    <Reactstars edit={false} size={20} value={Math.floor(posts.reviewsAvg)} />
                                  </div>
                                </div>

                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">
                                  {posts.discription}
                                  outheast of the Arabian Sea; it is separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait Sri Lanka, an island south of India crams an extraordinary variety of places to visit within its modest size
                                </div>
                                <br />
                                {posts.destination}


                                <ul class="postcard__tagbox">
                                  <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>PP Rs.&nbsp;
                                    <a style={{ color: " hsl(180,100%,50%)" }}>
                                      {posts.perperson}
                                    </a>
                                  </li>
                                  <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>
                                    {posts.noofdays}&nbsp;{posts.noofnights}
                                  </li>
                                  <li class="tag__item play blue">
                                    <a style={{ color: "  hsl(60,100%,50%) " }}>
                                      <i class="fas fa-car mr-2"></i>
                                      {posts.vehical}
                                    </a>
                                  </li>

                                  <li>
                                    <button
                                      type="button"
                                      class="btn btn-primary abv"
                                      id="cardbtn2"
                                    >
                                      <a
                                        href={`/travelpackages/travelpackage/${posts.id}`}
                                        style={{
                                          textDecoration: "none",
                                          color: "white",
                                        }}
                                      >
                                        View Details &nbsp;
                                        <i class="fas fa-hand-point-right"> </i>
                                      </a>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        ))}
                      </>
                    }
                  </>}
              </Row>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
