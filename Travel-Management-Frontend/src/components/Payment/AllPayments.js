import React, {Component} from 'react'
import axios from 'axios';
import '../../Styles/Payment.css'
import ReactToPrint from "react-to-print";
import HeaderAdmin from '../HeaderAdmin'

export default class AllPayments extends Component{

  constructor(props){
    super(props);
    this.state={
      payments:[]
    };
  }

  componentDidMount(){
    this.retrievePayments();
  }

  retrievePayments(){
    axios.get("https://travelmanagement.onrender.com/payment").then(res=>{
      if(res.data.success){
        this.setState({
          payments:res.data.existingPayment
        });
        console.log(this.state.payments)
      }
    })
  }

  

  render(){

    return(
      <div>
        <HeaderAdmin/>

      <div className="infoadmin">
      <ReactToPrint
          trigger={() =>
            
          
            <button type="button" class="btn btn-secondary" style={{marginInlineStart:'80%'}} ><i class="fas fa-print mr-2"></i>Print this out!</button> }
          
          content={() => this.componentRef}
        /> 
      <div className="container"  ref={(Component) => (this.componentRef = Component)}>
        <p> All Payments</p>
         
        <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Paid For</th>
        <th scope="col">Catogory Name</th>
        <th scope="col">Name</th>
        <th scope="col">Method</th>
        <th scope="col">Card</th>
        <th scope="col">Expire Date</th>
        <th scope="col">CVV</th>
        <th scope="col">Amount</th>
        <th scope="col">Payment Date</th>
        
      </tr>
    </thead>
    <tbody>
      {this.state.payments.map((payments,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{payments.payf}</td>
        <td>{payments.reference}</td>
        <td>{payments.name}</td>
        <td>{payments.method}</td>
         <td>
        
             {payments.card}</td>
         <td>{payments.time}</td>
         <td>
         
             {payments.no}</td>
         <td> Rs &nbsp;{payments.amount}</td>
         <td>{payments.pdate}</td>
       
      </tr>
      ))}
      
    </tbody>
  </table>

  
   
   
      </div>
      <br></br>
      </div></div>
    )
  }
}
