import React, {Component} from 'react'
import axios from "axios";
import '../../Styles/Payment.css'
import { reference } from '@popperjs/core';
import Header from '../Header';
import Footer from '../Footer';

export default class PayForTravelPackage extends Component{


    
  constructor(props){
    super(props)

    this.onChangeReference =this.onChangeReference.bind(this);
    this.onChangeName =this.onChangeName.bind(this);
    this.onChangePay=this.onChangePay.bind(this);
    this.onChangeMethod=this.onChangeMethod.bind(this);
    this.onChangeCard=this.onChangeCard.bind(this);
    this.onChangeTime=this.onChangeTime.bind(this);
    this.onChangeNo=this.onChangeNo.bind(this);
    this.onChangeAmount=this.onChangeAmount.bind(this);


    this.state={
      ename:"",
      price:"",
      img:"",
      reference:"",
      name:"",
      payf:"Travel Equipment",
      method:"",
      card:"",
      time:"",
      no:"",
      amount:""
    }
   }


   componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`https://travelmanagement.onrender.com/equipment/get/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      ename:res.data.equipment.name,
      price:res.data.equipment.price,
      img:res.data.equipment.image,
    });
      }
    });
  }



    onChangeReference (e){
      this.setState({reference:e.target.value})
    }
    onChangeName (e){
      this.setState({name:e.target.value})
    }
    onChangePay (e){
      this.setState({payf:e.target.value})
    }
    onChangeMethod (e){
      this.setState({method:e.target.value})
    }

    onChangeCard (e){
      this.setState({card:e.target.value})
    }
    onChangeTime (e){
      this.setState({time:e.target.value})
    }
    onChangeNo (e){
      this.setState({no:e.target.value})
    }
    onChangeAmount (e){
      this.setState({amount:e.target.value})
    }
    


    onSubmit= (e)=>{
      e.preventDefault();
      
      console.log('Payment Added');
      
const{ename,price}=this.state;
      const{reference,name,payf,method,card,time, no,amount}=this.state;

        const data={
      reference:ename,
      name:name,
      payf:payf,
      method:method,
      card:card,
      time:time,
      no:no,
      amount:price
      }

      console.log(data)
      axios.post("https://travelmanagement.onrender.com/payment/add",data).then((res=>{
        if(res.data.success){
          this.setState(
    
           window.location.replace("/confirm/payment")
          )
          }
        })
     )}

 render(){

    const{ename,price,payf,method,img}=this.state;
   return(
    <div>
    <Header/>
     <div className="info">

<div class="card" style={{backgroundColor:"#78766F"}}>    
   <div class="card-body" >
        <div class="row" >
           
            <div class="col-md-5" >
                <div class="righta border" style={{backgroundColor:"white",borderRadius:"10px"}}>
                   
                <div class="text-center mb-2"> <h2>Equipment Details</h2> </div>
                <hr  class="text-center mb-4"/>
                    <h4 style={{color:"hsl(0,0%,0%,0.6)"}}>{ename}</h4>
                    <div >
                    <center>    <div class="col-12 "><img class="img-fluid" src={`${img}`} style={{height:"350px",width:"65%"}} /></div></center>
                        
                    </div>
                   
             
                   <hr/>
                    <div class="row lower">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                        <div class="col text-lefta"><b>Price of this</b></div>
                        <div class="col text-righta"><b>{price}</b></div>
                    </div>
                    <br/> 
                    <p class="text-muted text-center">Apply Terms and Condition</p>
                </div>
            </div>


            <div class="col-md-7">
            
                <div class="lefta border" style={{backgroundColor:"hsl(0,0%,100% ,0.9",borderRadius:"15px"}}>
               
                    <div class="row"> <span class="text-center mb-1" style={{fontSize:"40px"}}>Payment </span>
                    <div class="d-flex  mb-3">
                    <p class="fw-bold  payicon">We Accept</p>
                        <div >&nbsp;&nbsp; &nbsp;&nbsp; 
                             <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                  </div></div>
                    <form onSubmit={this.onSubmit}>
            

            <div class="row mb-2" >
    <div class="col">

 <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Item Name</span>
  </div>
  <input type="text" className="form-control" name="reference" value={ename} onChange={this.onChangeReference} disabled />
</div></div>

<div class="col">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Price</span>
  </div>
  <input type="text" className="form-control" name="amount" value={price} onChange={this.onChangeAmount} disabled  />
</div></div></div>


<div class="d-flex flex-row align-items-center mb-3">
              
              <label class="form-label fw-bold mr-4" ><i class="fas fa-plane mr-3"></i> Pay For &nbsp; </label>  
                   <div class="form-outline mb-2 col-7">
                   <input type="text" className="form-control" name="payf" value="Travel Equipment" onChange={this.onChangePay} disabled  />
    
         </div>
                  
               </div>

<div class="d-flex flex-row align-items-center mb-4">
              
           <label class="form-label fw-bold" ><i class="fas fa-plane mr-2"></i> Enter Name &nbsp; </label>  
                <div class="form-outline mb-2 col-9">
                   <input 
                    type="text"
                    id="formControlLgXc"
                    class="form-control form-control-lg"
                    name="name" placeholder="Card Holder Name" required ="required"
           value={this.state.name} onChange={this.onChangeName}
                  /></div>
               
            </div>


            <div class="d-flex flex-row align-items-center mb-4">
         
         <label class="form-label fw-bold" > <i class="fas fa-plane mr-3"></i>Card Type :</label>  
              <div class="form-outline mb-2 col-9">
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-check-input" type="radio" id="flexRadioDefault1" value="Visa" checked={method==="Visa"} onChange={this.onChangeMethod}/> 
            &nbsp;&nbsp;
            <label className="form-check-label" for="flexRadioDefault1"><b> Visa</b></label>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <input className="form-check-input" type="radio" id="flexRadioDefault1" value="MasterCard" checked={method==="MasterCard"} onChange={this.onChangeMethod}/> 
            &nbsp;&nbsp;
            <label className="form-check-label" for="flexRadioDefault1"><b> Master Card</b></label>
                
                </div>
             
          </div>

            <div class="d-flex flex-row align-items-center mb-4">
         
           <label class="form-label fw-bold" > <i class="fas fa-plane mr-3"></i>Card Number</label>  
                <div class="form-outline mb-2 col-9">
                   <input 
                    type="text"
                    id="formControlLgXc"
                    class="form-control form-control-lg"
                    name="card" placeholder="Enter Card Number"
                    value={this.state.card} onChange={this.onChangeCard} maxLength="12" required ="required"
                  /></div>
               
            </div>



            <div class="d-flex flex-row align-items-center mb-4">
         
         <label class="form-label fw-bold" > <i class="fas fa-plane mr-3"></i>Expire Date&nbsp;&nbsp;</label>  
              <div class="form-outline mb-2 col-4">
              <input
                    type="date"
                    id="formControlLgExpk"
                    class="form-control form-control-lg"
                    placeholder="MM/YY" value={this.state.time} onChange={this.onChangeTime}  required ="required"
                  /></div>&nbsp;&nbsp;&nbsp;&nbsp;
             
             <label class="form-label fw-bold" > <i class="fas fa-plane mr-3"></i>CVV&nbsp;&nbsp;</label>  
              <div class="form-outline mb-2 col-3">
              <input
                    type="text"
                    id="formControlLgcvv"
                    class="form-control form-control-lg"
                    placeholder="CVV" value={this.state.no} onChange={this.onChangeNo} maxLength="3" required ="required" />   </div>
          </div>


            <button type="submit" class="btn btn-danger btn-lg btn-block" style={{height:"43px"}}><b>Pay Now</b></button>
            
          </form>

                </div>
            </div>
        </div>
    </div>
    <div> </div>
</div>
     </div>
     <Footer/>
     </div>
   )
 }

}