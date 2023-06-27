import React, {Component} from 'react';
import '../../Styles/HotelRoomStyle.css'
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';



export default class HotelBookingDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      post:[]
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`https://travelmanagement.onrender.com/hotelbooking/read/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      post:res.data.hotelBooking
        });
      }
    });
  }
  
  onDelete=(id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are you Sure you want to delete this item?")){

    
    axios.delete(`https://travelmanagement.onrender.com/hotelbooking/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
      window.location.href = "/userhotelbooking/view";
      })
    }
  }

render(){

  const {_id,roomType,capacity,name,email,arrivalDate,departureDate} = this.state.post;

    return(
      <div>
        <Header/>
          <div className="info">
            <div id="booking" class="section">
              <div class="section-center">
                <div class="container">
                  <div class="row" id="bokrow">
                    <div class="col-md-7 col-md-push-5">
                      <div class="booking-cta">
                        <h1>Your</h1>
                        <h1>Reservation</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
                          ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
                          Perspiciatis.
                        </p>
                      </div>
                      </div>
                        <div class="col-md-4 col-md-pull-7">
                          <div class="booking-form">
                            <form>
                              <div class="row">
                                <div class="col-sm-7">
                                  <div class="form-group">
                                    <span class="form-label">Your Room Type</span>
                                      <input type="text"
                                      className="form-control"
                                      name="roomType"
                                      placeholder=""
                                      value={roomType}
                                      disabled/>
                                  </div>
                                </div>
                                <div class="col-sm-5">
                                  <div class="form-group">
                                    <span class="form-label">Max Person</span>
                                      <input type="text"
                                      className="form-control"
                                      name="capacity"
                                      placeholder=""
                                      value={capacity}
                                      disabled/>
                                    <span class="select-arrow"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <span class="form-label">Full Name</span>
                                  <input type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="Name"
                                  value={name}
                                  disabled/>
                              </div>
                              <div class="form-group">
                                <span class="form-label">Email</span>
                                  <input type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Email"
                                  value={email}
                                  disabled/>
                              </div>
                              <div class="row" id="bokrow">
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <span class="form-label">Check In</span>
                                      <input type="date"
                                      required
                                      className="form-control"
                                      name="arrivalDate"
                                      placeholder="YY/MM/DD"
                                      value={arrivalDate}
                                      disabled/>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <span class="form-label">Check out</span>
                                      <input type="date"
                                      required
                                      className="form-control"
                                      name="departureDate"
                                      placeholder="YY/MM/DD"
                                      value={departureDate}
                                      disabled/>
                                  </div>
                                </div>
                              </div>
                              <div class="row" id="bokrow">
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <a className ="btn btn-secondary" style={{backgroundColor: "#192c3e",width: "100%"}} href ={`/edithotelbooking/${_id}`} >
                                    Edit Booking
                                    </a>
                                  </div>
                                </div><br></br>
                                <div class="col-sm-6">
                                  <div class="form-group">
                                  <a className ="btn btn-secondary" style={{backgroundColor: "#192c3e",width: "100%"}} href ="#" onClick={()=>this.onDelete(_id)} >
                                  Cancle Booking
                                  </a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    )  
  }
}