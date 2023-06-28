import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';


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
    axios.get("https://travelmanagement.onrender.com/equipment").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  retrievePosts() {
    this.setState({ isLoading: true });
    axios.get("https://travelmanagement.onrender.com/equipment")
      .then((res) => {
      
          this.setState({
            posts: res.data,
            isLoading: false,
          });
       
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


  filterData(posts, searchkey) {
    const result = posts.filter((post) =>
      post.name.toLowerCase().includes(searchkey) ||
      post.name.toUpperCase().includes(searchkey)

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    this.setState({ isLoading: true });
    axios.get("https://travelmanagement.onrender.com/equipment").then((res) => {
      
        this.filterData(res.data, searchkey);
        this.setState({ isLoading: false });
     
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
        <div style={{ backgroundColor: "hsl(0,0%,75%,0.2)" }}>
          <div className="infotr">
            <div className="bodytravelpackage" id="bbimg">
              <div >
                <br />

                <div style={{ marginInlineStart: "85%" }}>

                  <div class="input-group" >
                    <div class="form-outline">

                      <input
                        id="search-input"
                        type="search"
                        class="form-control"
                        placeholder="Search Equipment"
                        onChange={this.handleSearchArea} />
                    </div>

                    <button id="search-button" type="button" class="btn btn-primary">
                      <i class="fas fa-search"></i>
                    </button>

                  </div>
                </div>

                {this.state.isLoading ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                    <div className="spinner-border text-dark" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
                  </div>
                ) :
                  <>
                    {this.state.posts.length == 0 ?
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
                        <h2>No Equipments Found</h2>
                      </div> :
                      <>

                <Row xs={1} md={4} className="g-4" id="by" class="rounded" >
                
                
                  {this.state.posts.map((equipment, idx) => (

                    <Col >
                      <div class="card h-1000">

                        <Card >
                          <div>
                            <center> <Card.Img variant="top" src={`${equipment.image}`} class="img-fluid rounded-start" style={{ height: "200px", width: "200px" }} alt="..." id="cardimg" /></center>
                            <Card.Body>

                              <Card.Title> <b>{equipment.name}</b><br />
                              </Card.Title>
                              <Card.Text>

                                {equipment.description}<br /> <br />
                                <div class="card-footer" >


                                  <ul>
                                    <li ><i class="fas fa-tag " > </i> Rs.&nbsp;{equipment.price}

                                      <button type="button" class="btn btn-primary" style={{ marginInlineStart: "30%", width: "110px" }}>

                                        <a href={`/payment/add-equipment/${equipment._id}`} style={{ textDecoration: 'none', color: 'white' }}> BUY</a></button>

                                    </li>

                                  </ul>

                                </div>

                              </Card.Text>
                            </Card.Body>
                          </div>

                        </Card>
                      </div>

                    </Col>

                  ))}
                  
                </Row>
                </>
                    }
                  </>}


                <br /><br /><br /><br /><br />


              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}
