import React,{Component} from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import Swal from "sweetalert2";

const confirm = () => {
  Swal.fire({
    title: "Confirmed !",
    text: "Traveller will contact you soon..!",
    icon: "success",
  }).then(function() {
    window.location = "/guide/all";
});
  // or Swal.fire( 'Good job!','You clicked the button','success');
};

const reject = () => {
    Swal.fire({
      title: "Rejected !",
      text: "Traveller will be informed soon..!",
      icon: "error",
    }).then(function() {
        window.location = "/guide/all";
    });
    // or Swal.fire( 'Good job!','You clicked the button','success');
  };

 
export default class GuideConfirm extends Component{
 
    constructor(props){
      super(props);
  
      this.state={
          guide:{}
      };
  }
  
  
  componentDidMount(){
      const id = this.props.match.params.id;
      axios.get(`https://travelmanagement.onrender.com/guiderequest/${id}`).then((res)=>{
          if(res.data.success){
              this.setState({
                  guide:res.data.guide
              });
  
              console.log(this.state.guide);
          }
      });
  }


render  () {
    const{uname,email,phone,destination,tourdate,noofdates} = this.state.guide;
    return(
      <div>
        <Header/>
        <br/><br/>
            <div className="info">  
                <center id = "guide">             
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header bg-transparent border-5">
                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Traveller Information</h3>
                            </div>
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tr>
                                        <th width="30%">Name</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{uname}</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">E-Mail</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{email}</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">Contact Number</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{phone}</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">Destination</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{destination}</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">Tour Date</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{tourdate}</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">Number of Dates</th>
                                        <th width="2%"><b>:</b></th>
                                        <td>{noofdates}</td>
                                    </tr>
                                </table>
                            </div>

                            <td>
                                <a href="#" type="button">
                                    <button onClick={confirm} type="button"  style = {{marginRight:725, fontSize:17}} class="btn btn-success">
                                    <i class="fa fa-check mr-2" aria-hidden="true"></i>Confirm</button>
                                </a>

                                <a href="#" type="button">                    
                                    <button onClick={reject} type="button" style = {{position:"absolute", bottom:25, marginLeft:-710, width:110, fontSize:17}} class="btn btn-danger">
                                    <i class="fa fa-ban mr-2" aria-hidden="true"></i>Reject</button>
                                </a>
                            </td>
                            <br/>
                        </div>    
                    </div>
                </center> 
            </div>      
            <br/>                     
    <Footer/>
    </div>
    )
  }
}
 