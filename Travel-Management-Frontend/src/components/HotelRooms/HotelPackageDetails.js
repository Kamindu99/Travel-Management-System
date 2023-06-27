import React, {Component} from 'react';
import axios from "axios";
import '../../Styles/HotelRoomStyle.css'
import Header from '../Header';
import Footer from '../Footer';



export default class hotelpackageDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`https://travelmanagement.onrender.com/hotelpackage/read/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      post:res.data.HotelPackage
        });
      }
    });
  }

  onSubmit=(e)=> {

  const userInfo=localStorage.getItem('userInfo');
  if(userInfo==null){
    alert("You are not Authorized User. Please sign in first.")
    window.location.href = `/register`;
}else{
  window.location.href = `/addnewhotelbooking/${this.state.post._id}`;
}
  }
    

render(){
  
  const {roomType,details,price,size,maxCapacity,packageImage} = this.state.post;

    return(
      <div>
        <Header/>
          <div className="info">
            <div class="container">
              <div class="row" id="bokrow">
                <div class="col-md-12">
                  <div class="mu-about-area">
                    <br></br>
                    <br></br>
                    <br></br>
                      <div class="row" id="bokrow">
                        <div class="col-md-6">
                          <div class="mu-about-left">
                            <img class="detailsimg" src={`${packageImage}`} alt="Men Speaker"/>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mu-about-right">
                            <br></br>
                            <h2 class="detailstitle" style={{fontFamily: "Calibri"}}> {roomType}</h2><br></br> 
                            <p>{details}</p>
                            <p class="detailsprice" style={{fontFamily: "Calibri"}}>Per Day: Rs {price}</p>
                            <p className="tm-gallery-price" style={{fontFamily: "Calibri"}}>Room Size: {size}</p>
                            <p style={{fontFamily: "Calibri"}}>Maximum people: {maxCapacity}</p>
                            <button className="btn btn-primary" onClick={this.onSubmit} style={{backgroundColor: "#192c3e",width: "20%"}}><a  style={{textDecoration:'none', color:'white'}}>Book Now</a>
                            </button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                          </div>
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
