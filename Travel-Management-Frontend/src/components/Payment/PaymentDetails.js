import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

export default class PaymentDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            payment:{}
        };
    }

    onDelete = (id)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you Sure you want to delete your payment?")){
     axios.delete(`https://travelmanagement.onrender.com/payment/delete/${id}`).then((res)=>{
       alert("Delete Successfully");
      window.location.replace("/")
     })
   }}
 

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://travelmanagement.onrender.com/payment/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    payment:res.data.payment
                });

                console.log(this.state.payment);
            }
        });
    }
    render(){

        const{reference,name,payf,method,card,time,no,amount,_id} = this.state.payment;
        return(
            <div>
                <Header/>
           
            <div className="info" style={{ marginInlineStart:'20%'}}> <br/>
                <h4>{name}</h4>
                 <hr/>
                 <dl className="row">
                     <dt className="col-sm-3">Reference</dt>
                     <dd className="col-sm-9">{reference}</dd>
                     <dt className="col-sm-3">Card Number</dt>
                     <dd className="col-sm-9">{card}</dd>
                     <dt className="col-sm-3">Paid for</dt>
                     <dd className="col-sm-9">{payf}</dd>
                     <dt className="col-sm-3">Method</dt>
                     <dd className="col-sm-9">{method}</dd>
                     <dt className="col-sm-3">Date</dt>
                     <dd className="col-sm-9">{time}</dd>
                     <dt className="col-sm-3">CVV</dt>
                     <dd className="col-sm-9">{no}</dd>
                     <dt className="col-sm-3">Amount</dt>
                     <dd className="col-sm-9">{amount}</dd>
                     


                     <a style={{width:"40%"}} className ="btn btn-warning" href ={`/payment/edit/${_id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>&nbsp;
     
            </dl>
            <dl>
        
          <a style={{width:"40%"}} className ="btn btn-danger" href="#" onClick={()=>this.onDelete(_id)} >
          <i className="fas fa-edit"></i>&nbsp;Delete
          </a>

                 </dl>
            </div>
            <Footer/>
            </div>
        )
    }
}
