import React, { Component } from 'react'
import axios from 'axios';
import emailjs from 'emailjs-com';
import Header from '../Header';
import Footer from '../Footer';

export default class Inqmail extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:"",
            adrep:""
        }

    }
   

    onSubmit= (e) =>{
         {
            e.preventDefault();
        
            emailjs.sendForm('service_rf3mh1s', 'template_zqxybs5', e.target, 'user_LVXIOfelyQdR7aRq9g2fx')
              .then((result) => {
                  alert("Check Your Email ")
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }


        
        
        
        

        
        
    }



    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://travelmanagement.onrender.com/inquiry/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    _id:res.data.post._id,
                    name:res.data.post.name,
                    nic:res.data.post.nic,
                    phone:res.data.post.phone,
                    email:res.data.post.email,
                    inq:res.data.post.inq,
                    adrep:res.data.post.adrep,

                });

                console.log(this.state.post);
            }


        });
    
    }




    render(){
        return(
            <div >

                <Header/>
                <div className="info">
                <div className="vj" onSubmit={this.onSubmit}>

                
                <form  noValidate>
                

                <div className="needs-validation-view" >
                <h1 className="nam">Confirm Your Email</h1>
                <hr/>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text" 
                        className="form-control"                
                        name="email"
                        placeholder="Enter Your Email"
                        value={this.state.email} 
                        style={{marginBottom:'10px'}}
                       />
                    
                    <button class="btn btn-dark btn-block" type="submit" style={{margintop:'15px'}} >
                    <i class="fa fa-envelope" aria-hidden="true"></i>    
                    &nbsp; Send Inquiry to Email  
                    
                    </button>
                    </div>

                    
                   


                    <div className="form-group" style={{marginBottom:'15px'}}style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text" 
                        className="form-control"                
                        name="name"
                        placeholder="Enter Your Name"
                        value={this.state.name} 
                       />
                    </div>
                    
                    


                    <div className="form-group" style={{marginBottom:'15px'}}style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text" 
                        className="form-control"             
                        name="nic"
                        placeholder="Enter Your NIC"
                        value={this.state.nic} 
                       />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>Phone Number</label>
                        <input type="text" 
                        className="form-control"                
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        value={this.state.phone} 
                       />
                    </div>

                    

                    <div className="form-group" style={{marginBottom:'15px'}}style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>Inquiry</label>
                        <input type="text" 
                        className="form-control"                
                        name="inq"
                        placeholder="Enter Your Inquiry"
                        value={this.state.inq} 
                       />
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}}style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>Respose</label>
                        <input type="text" 
                        className="form-control"                
                        name="adrep"
                        placeholder="Enter Your Inquiry"
                        value={this.state.adrep}
                       />
                    </div>
                    <div className="form-group" style={{marginBottom:'15px'}} style={{visibility: 'hidden'}}>
                        <label style={{marginBottom:'5px'}}>Respose</label>
                        <input type="text" 
                        className="form-control"                
                        name="id"
                        placeholder="Enter Your Inquiry"
                        value={this.state._id}
                       />
                    </div>

            </form>
            </div>
            </div>
            <Footer/>
         </div>
        )

    }
}