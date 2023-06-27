import React, {Component} from 'react'
import axios from 'axios'
import Header from '../Header';
import Footer from '../Footer';

export default class EditPayment extends Component{

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
      reference:"",
      name:"",
      payf:"",
      method:"",
      card:"",
      time:"",
      no:"",
      amount:""
    }

    
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

      const id = this.props.match.params.id;
      console.log('Payment Added');

      const{reference,
        name,
        payf,
        method,
        card,
        time,
        no,
        amount}=this.state;

        const data={
      reference:reference,
      name:name,
      payf:payf,
      method:method,
      card:card,
      time:time,
      no:no,
      amount:amount
      }

      console.log(data)
      axios.put(`https://travelmanagement.onrender.com/payment/update/${id}`,data).then((res=>{
        if(res.data.success){
          alert("Payemt updated successfully")
          this.setState(
            window.location.replace(`/payment/details/${id}`)
          )

          }

        })
     

      
      )}

      


  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`https://travelmanagement.onrender.com/payment/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                reference:res.data.payment.reference,
                name:res.data.payment.name,
                payf:res.data.payment.payf,
                method:res.data.payment.method,
                card:res.data.payment.card,
                time:res.data.payment.time,
                no:res.data.payment.no,
                amount:res.data.payment.amount




            });

            console.log(this.state.payment);
        }
    });
}

  render(){

    const{payf} = this.state;
    const{method}= this.state;
     return(
      <div>
      <Header/>
       <div className="info" id="pybody">
       <div className="col-md-8 mt-4 mx-auto" style={{backgroundColor:"white"}}>
        
       <br/> <h1 className="h3 mb- font-weight-normal">Update Payment</h1>
         
         <form className="needs-validation-payment" noValidate>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Reference</label>
             <input type="text" className="form-control" name="reference" placeholder="Edit Reference" required ="required"
             value={this.state.reference} onChange={this.onChangeReference} disabled />
           </div>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Name</label>
             <input type="text" className="form-control" name="reference" placeholder="Edit Name" required ="required"
             value={this.state.name} onChange={this.onChangeName}/>
           </div>
           <label> Pay For</label>
           <input type="text"  className="form-control" name="payfor"  id="types" value={payf} onChange={this.onChangePay} disabled />
             

           
           <div className="form-group" style={{marginBottom:'15px'}}>
           <p style={{marginBottom:'5px'}}>Card Type</p>
           
           <label> Visa
             <input type="radio" value="Visa" checked={method==="Visa"}
             onChange={this.onChangeMethod}/>
           </label>
           
           <label> MasterCard
             <input type="radio" value="MasterCard" checked={method==="MasterCard"}
             onChange={this.onChangeMethod}/>
           </label>
           </div>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Card Number</label>
             <input type="text" className="form-control" name="reference" placeholder="Edit Card Number"
             value={this.state.card} onChange={this.onChangeCard} maxLength="9" disabled/>
           </div>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Date</label>
             <input type="text" className="form-control" name="reference" placeholder="MM/YY"
             value={this.state.time} onChange={this.onChangeTime}/>
           </div>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>CVV</label>
             <input type="text" className="form-control" name="reference" placeholder="Edit CVV"
             value={this.state.no} onChange={this.onChangeNo} maxLength="3" disabled/>
           </div>
           <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Amount</label>
             <input type="text" className="form-control" name="reference" placeholder="Edit Amount" required ="required"
             value={this.state.amount} onChange={this.onChangeAmount} disabled/>
           </div>
  
           <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
             <i className="far fa-check-square"></i>
             &nbsp; Update Payment
           </button>
           <br/><br/>

           
  
           
         </form>
       </div> <br></br>
       </div>
       <Footer/>
       </div>
     )
   }
  
  
  
}