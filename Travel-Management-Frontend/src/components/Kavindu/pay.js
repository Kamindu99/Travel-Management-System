import React from "react";
import Header from "../Header";
  
 

function pay(){

    return(
        <div>
        <Header/>
    <div className="body1" >
                   
      <div className="info">
              <form className="form12">
                  <h2 style={{color:"blue"}}>Gold Member Paln</h2>
                  <img src="https://purepng.com/public/uploads/large/purepng.com-gold-coinsgoldatomic-number-79chemical-elementgroup-11-elementaurumgold-dustprecious-metalgold-coins-1701528978267zsaly.png" width="150" height="150"></img>
                  <h2>2$ Daily Subscribe Paln</h2>
                  <ul>
                    <li>Win Monthly Gift pack</li>
                    <li>Win Monthly Travel Package</li>
                    <li>Offers Quickly</li>
                  </ul>  
                  <div id="smart-button-container">
                         <div style={{textAlign:"center"}}>
                   <div id="paypal-button-container"></div>
                 </div>
                    </div>
              </form>
              </div>
    </div>
    </div>
 
   
       
        
)}

export default pay;