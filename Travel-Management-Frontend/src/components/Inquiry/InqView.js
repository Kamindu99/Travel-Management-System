import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';



export default function InqView (){
   
  
	const [nic,setNic] = useState("");
   

    const getData =async (e)=>{

        e.preventDefault();

        const nic1 = nic;
        const url="https://travelmanagement.onrender.com/inquiry/view/";

     
        const res = await axios.get(url+nic1).then((res)=> {

        document.getElementById("name").innerHTML =res.data.name;
        document.getElementById("email").innerHTML =res.data.email;
        document.getElementById("phone").innerHTML =res.data.phone;
        document.getElementById("inq").innerHTML =res.data.inq;
        const mongoid=res.data.id;
          
       
           if(res=true) {
                alert("You are a valid user");
                window.location.replace("/inqD/" + mongoid)

           }
           else{
                window.location.replace("/add")  
           }
           

            }).catch((err)=>{
            alert('You Are Not a Verified User!!');
            window.location.replace("/add") 

    })

    }



    
    
   
    
    return(
        <div >
            <Header/>

            <div className="info">
            
            <body className="vj">
            <br/>
                <div >
                <br/>
		            <form className="needs-validation-view"   >
			
                    <h2 className="nam">Enter Your National Identity Card Number (NIC)</h2>
                        <hr/>
			            <input className="form-control" type="text" id ="nic" placeholder="NIC" value={nic} onChange={(e)=>{  setNic(e.target.value) ; }}/>
                        
                        <a>
			                <button  className="btn mt-3 btn-dark btn-block"  style={{textDecoration:'none',color:'white'}} onClick={getData}>
                            <i  class="fa fa-id-card" aria-hidden="true"> </i> Submit
                            </button>
                        </a>
                    </form>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  

                    < div style={{visibility: 'hidden'}} >
                        <h1 id="name" ></h1>
                        <h2 id="nic" ></h2>
                        <h2 id="email" ></h2>
                        <h2 id="phone" ></h2>
                        <h2 id="inq" ></h2>
                    </div>
	            </div>
                </body>
                </div>
                <Footer/>
            </div>
         

            )
    }