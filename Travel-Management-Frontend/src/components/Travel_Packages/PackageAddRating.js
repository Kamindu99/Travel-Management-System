import React ,{useState} from "react";
import Reactstars from "react-rating-stars-component";
import axios from "axios";
import { Form} from "react-bootstrap";


export default function AddRating(props){

  const [validated, setValidated] = useState(false);

    const[rating, setRating] =useState(0)

    const ratingChanged = (rating)=>{
       setRating(rating)
         };
         
         console.log(ratingChanged);

         
         const onSubmit = async (e) => {

          const form = e.currentTarget;
          if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
       else{  
        try{
            await axios.post('http://localhost:8070/travelpackage/review', {
                rating,
                packageId:props.id
            })
            alert(`ThankYou! You have given ${rating} star rating for us.`);
            window.location.replace(`/travelpackages/travelpackage/${props.id}`)
            
         }catch (error){
          alert("Please fill this field");
           }
          }
          setValidated(true);
        };
        

return(
      
<div className="container">  
<div className="app">
 <div>

 <center>   
 <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
    <div className="mb-3" >
    
    
    <div className="rating" >
           <Reactstars size={85} value={rating}   onChange={ratingChanged}/>
    </div>
 
 </div>

<button className="btn btn-success">Give Rating</button><hr/>
</Form>
</center>
</div>
</div>
</div>
)
}
