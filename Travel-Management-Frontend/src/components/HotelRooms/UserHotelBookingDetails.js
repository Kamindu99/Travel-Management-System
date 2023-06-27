import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/HotelRoomStyle.css'
import Header from '../Header';
import Footer from '../Footer';

export default class UserHotelBookingDetails extends Component{

    constructor(props){
        super(props);
    
        this.state={
            HotelBooking:{}
        };
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://travelmanagement.onrender.com/hotelbooking/read/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                  HotelBooking:res.data.hotelBooking
                });
    
            }
        });
    }
      
   
    render(){
        
        const{roomType,capacity,name,email,arrivalDate,departureDate,_id} = this.state.HotelBooking;

        return(
            <div>
              <Header/>
                <div class="info" >
                  <div class="bokpadding">                          
                    <div class="hero-image">
                          <div class="bokbox"> 
                              <table class="boktable">
                                <tr>
                                  <h3>
                                    <td class="boktd">
                                      {roomType}
                                    </td>
                                  </h3>
                                </tr>
                                <tr>
                                  <td class="boktd">Arrival Date: {arrivalDate}</td>
                                </tr>
                                <tr>
                                  <td class="boktd">Departure Date: {departureDate}</td>
                                    <th class="bokth">
                                      <a href={`/userhotelbooking/hotelbookingdetails/${_id}`}>
                                        <button class="btn btn-dark"  style={{width: "80%"}}>Details</button>
                                      </a>
                                    </th>
                                </tr>
                              </table>
                          </div>
                    </div>
                  </div>
                </div> 
              <Footer/>
            </div>
        )
    }
}
