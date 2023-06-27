import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';



export default function PayView (){
   
  
	const [card,setno] = useState("");
   

    const getData =async (e)=>{

        e.preventDefault();

        const card1 = card;
        const url="https://travelmanagement.onrender.com/payment/view/";

     
        const res = await axios.get(url+card1).then((res)=> {

        document.getElementById("reference").innerHTML =res.data.reference;
        document.getElementById("name").innerHTML =res.data.name;
        document.getElementById("card").innerHTML =res.data.card;
        document.getElementById("payf").innerHTML =res.data.payf;
        document.getElementById("method").innerHTML =res.data.method;
        document.getElementById("no").innerHTML =res.data.no;
        document.getElementById("time").innerHTML =res.data.time;
        document.getElementById("amount").innerHTML =res.data.amount;
        const mongoid=res.data.id;
          
       
           if(res=true) {
               
                window.location.replace("/payment/details/" + mongoid)

           }
           if(res=false) {
                window.location.replace("/")  
           }
           

            }).catch((err)=>{
            alert('Invalid Card Number.');
    })

    }



    
    
   
    
    return(

        <div >
            <Header/>

                <div className="info container" >

		            <form className="needs-validation-payment" style={{backgroundColor:"hsl(172, 50%, 50%,0.2)" ,marginTop:"150px", marginLeft:"200px"}}   >
			
                    <h3>Enter Your  Card Number </h3>
                        <hr/>
			            <input type="no" id ="card" placeholder="Enter your Card Number" maxLength="12"  value={card} onChange={(e)=>{  setno(e.target.value) ; }}/>
                        <br/>
                        <a>
			                <button  className="btn mt-3 btn-success"  style={{textDecoration:'none',color:'white'}} onClick={getData}>
                             Submit
                            </button>
                        </a>
                    </form>

                    < div style={{visibility: 'hidden'}} >
                        <h1 id="reference" ></h1>
                        <h2 id="no" ></h2>
                        <h2 id="name" ></h2>
                        <h2 id="time" ></h2>
                        <h2 id="card" ></h2>
                        <h2 id="payf" ></h2>
                        <h2 id="method" ></h2>
                        <h2 id="amount" ></h2>
                    </div>
	            </div>
                <Footer/>
            </div>
         

            )
    }