import React, {Component} from 'react';
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';


export default class PackageDetails extends Component {

  
  
render(){


  return(
    <div>
            <Header/>
    <div className="infotr" >
     
    <div className="container"  style={{marginTop:'10px'}}>
    <div class="row">
      
      <div class="col-lg-10 col-xl-9 mx-auto">
        
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            
          </div>
          <div class="card-body p-4 p-sm-5">
    
           <center> <h1>PAYMENT Confirmation</h1></center>
           <hr class="my-4" />


           <div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
      <a href="/" style={{textDecoration:'none' ,color:'black'}}>Back to Home</a></button>

   </div>

</div>
<div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
      <a href="/payment/view" style={{textDecoration:'none' ,color:'black'}}>View My payment</a></button>

   </div>

</div>







                <hr class="my-4"/>
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



 



