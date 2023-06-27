import React, {Component} from 'react'
import axios from 'axios';
import '../../Styles/HotelRoomStyle.css'
import Header from '../Header';
import Footer from '../Footer';

export default class EditHotelBooking extends Component{


    constructor(props){
        super(props);
        this.state={
            roomType:"",
            capacity:"",
            name:"",
            email:"",
            arrivalDate:"",
            departureDate:""
        }
    }
    
        handleInputChange=(e)=>{
            const { name,value}=e.target;
    
            this.setState({
                ...this.state,
                [name]:value
            })
        }
    
        onSubmit=(e)=>{
    
            e.preventDefault();
            const id = this.props.match.params.id;
    
            const {roomType,capacity,name,email,arrivalDate,departureDate}= this.state;
    
            const data={
                roomType:roomType,
                capacity:capacity,
                name:name,
                email:email,
                arrivalDate:arrivalDate,
                departureDate:departureDate
            }
    
            console.log(data)
    
    axios.put(`https://travelmanagement.onrender.com/hotelbooking//update/${id}`,data).then((res)=>{
        if(res.data.success){
            alert("Update Successfully")
            window.location.href = `/UserHotelBookingDetails/${id}`;
        }
     })
    }
   

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://travelmanagement.onrender.com/hotelbooking/read/${id}`).then((res)=>{
          if (res.data.success){
             this.setState({
                roomType:res.data.hotelBooking.roomType,
                capacity:res.data.hotelBooking.capacity,
                name:res.data.hotelBooking.name,
                email:res.data.hotelBooking.email,
                arrivalDate:res.data.hotelBooking.arrivalDate,
                departureDate:res.data.hotelBooking.departureDate
        });
          }
        });
      }

      disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    render(){
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
                                                <h1>Make Your</h1>
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
                                                    <div class="row" id="bokrow">
                                                        <div class="col-sm-7">
                                                            <div class="form-group">
                                                                <span class="form-label">Your Room Type</span>
                                                                    <input type="text"
                                                                    className="form-control"
                                                                    name="roomType"
                                                                    placeholder=""
                                                                    value={this.state.roomType}
                                                                    disabled
                                                                    onChange={this.handleInputChange}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-5">
                                                            <div class="form-group">
                                                                <span class="form-label">Max Person</span>
                                                                    <input type="text"
                                                                    className="form-control"
                                                                    name="capacity"
                                                                    placeholder=""
                                                                    value={this.state.capacity}
                                                                    disabled
                                                                    onChange={this.handleInputChange}/>
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
                                                            value={this.state.name}
                                                            onChange={this.handleInputChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <span class="form-label">Email</span>
                                                            <input type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={this.state.email}
                                                            onChange={this.handleInputChange}
                                                            required/>
                                                    </div>
                                                    <div class="row" id="bokrow">
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <span class="form-label">Check In</span>
                                                                <input type="date"
                                                                required
                                                                className="form-control"
                                                                min={this.disablePastDate()}
                                                                name="arrivalDate"
                                                                placeholder="YY/MM/DD"
                                                                value={this.state.arrivalDate}
                                                                onChange={this.handleInputChange}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <span class="form-label">Check out</span>
                                                                    <input type="date"
                                                                    required
                                                                    className="form-control"
                                                                    min={this.disablePastDate()}
                                                                    name="departureDate"
                                                                    placeholder="YY/MM/DD"
                                                                    value={this.state.departureDate}
                                                                    onChange={this.handleInputChange}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-btn">
                                                        <button class="btn btn-secondary" style={{backgroundColor: "#192c3e",width: "100%"}} type="submit"  onClick={this.onSubmit}>
                                                            Update
                                                        </button>
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