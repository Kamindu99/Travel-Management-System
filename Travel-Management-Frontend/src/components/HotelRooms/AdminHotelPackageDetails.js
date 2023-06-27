import React, {Component} from 'react';
import axios from "axios";
import '../../Styles/HotelRoomStyle.css'
import HeaderAdmin from '../HeaderAdmin'



export default class adminhotelpackageDetails extends Component {

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

  onDelete=(id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are you Sure you want to delete this item?")){

    axios.delete(`https://travelmanagement.onrender.com/hotelpackage/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
      window.location.href = "/adminhotelpackage";
    })
  }
}
  

render(){

  const {_id,roomType,details,price,size,maxCapacity} = this.state.post;

    return(
      <div>
        <HeaderAdmin/>
          <div className="infoadmin">
              <div className="col-md-8 mt-4 mx-auto">
                    <div class="adfor">
                      <h1 className="h3 mb-3 font-weight-normal" id="tpic">Edit Room Details</h1>
                        <form className="needs-validation" no noValidate>
                            <div className="from group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Room Type</label>
                                  <input type="text"
                                  className="form-control"
                                  name="roomType"
                                  value={roomType}
                                  disabled/>
                            </div>

                            <div className="from group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Max Capacity</label>
                                  <input type="text"
                                  className="form-control"
                                  name="maxCapacity"
                                  value={maxCapacity}
                                  disabled/>
                            </div>

                            <div className="from group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Price</label>
                                  <input type="text"
                                  className="form-control"
                                  name="price"
                                  placeholder="Price"
                                  value={price}
                                  disabled/>
                            </div>

                            <div className="from group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Size</label>
                                  <input type="text"
                                  className="form-control"
                                  name="size"
                                  value={size}
                                  disabled/>
                            </div>

                            <div className="from group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Details</label>
                                  <textarea rows="10" cols="60" name="text"  type="text"
                                  className="form-control"
                                  name="details"
                                  value={details}
                                  disabled>
                                  </textarea>
                            </div>
                            <br></br>
                            <div class="btnset">
                              <a className ="btn btn-warning" href ={`/adminedithotelpackage/${_id}`}>
                                <i className="fas fa-edit">
                                </i>&nbsp;
                                  Edit Package
                              </a>&nbsp;
                              <a className ="btn btn-danger" href ="#" onClick={()=>this.onDelete(_id)} >
                                <i class="fas fa-trash-alt"></i> &nbsp; Delete Package
                              </a>
                            </div>
                        </form>
                    </div>
              </div>
          </div>
      </div>
    )
  }
}