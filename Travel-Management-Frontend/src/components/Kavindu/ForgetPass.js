import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import emailjs from 'emailjs-com';
import { red } from "@material-ui/core/colors";



function foremail (e){

    e.preventDefault();
    const email = document.getElementById('input').value;
    if (email == '' || email.includes('@'  && '.com') == false ){

        alert("Enter Valid email Address")
        return false;
    }
   
    var hidden = false;
     //document.getElementById('emailval').innerHTML= "Password Rest Success! Check Your Email";

     document.getElementById('h2').style.visibility = 'hidden';
    // document.getElementById('inputa').style.visibility = 'hidden';
     document.getElementById('button').style.visibility = 'hidden';
     document.getElementById('demo').style.visibility = 'hidden';
     document.getElementById('hari').style.visibility = 'visible';
     document.getElementById('form').style.visibility = 'hidden';
     document.getElementById('input').style.visibility = 'hidden';
     



     axios.get("https://travelmanagement.onrender.com/access/search/"+email).then(res =>{
        
        if(res.data.success){
           
            

                document.getElementById('id').value=res.data.SearchData[0]._id
                document.getElementById('em').value=email
            
           
            
           
            
            
        }
        else {

            alert("eee")
        }})
       
    
   
}

function emailsend (e){

    
    emailjs.sendForm('service_sy66xoc', 'template_fdhg1ym', e.target, 'user_iKzC1886DPbUEbUDzO1bY')
    alert("Check Your Email")
      .then((result) => {
        alert("okgiyaaaa")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); 
}


const forget =()=>{

return(
    <div>
        <Header/>
  

    <div className="body1">

    <form onSubmit={emailsend}> 

   
<input className ="inputabc" id="em" name="Email" type="text" placeholder="Email" required  style={{visibility:"hidden"}}/>
<input className ="inputabc" id="id" name="id1" type="text" placeholder="name"  style={{visibility:"hidden"} }/>

< input className ="inputabc"type="submit" id ="hari" value="Confirm" style={{visibility:"hidden"}}   />

</form>
        <form  className="form12"  onSubmit={foremail} id="form" >
            <h2 id='h2'>Enter Your Email</h2>
          <h2 id="emailval"></h2>
            <input className ="inputabc" id="input" name="a" type="email" placeholder="Email" required/>
            <input className ="inputabc" id="demo" name="a" type="text" placeholder="name" />
           

            < button id="button" className="button12" type="submit" >Submit</button>
        </form>
    

    </div>
        <Footer/>
    </div>
)

}

export default forget;