import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

export default class EditInquiry extends Component{

    constructor(props){
        super(props);
        this.state = {
            validated:false,
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:""
        }

    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit= (e) =>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            
        e.preventDefault();
        e.stopPropagation();
      }

      else{
        
        e.preventDefault();
        const id = this.props.match.params.id;
        const {name,nic,phone,email,inq} = this.state;

        const data= {
            name:name,
            nic:nic,
            phone:phone,
            email:email,
            inq:inq            
        }

        console.log(data)
        

        axios.put(`https://travelmanagement.onrender.com/inquiry/update/${id}`,data).then((res) =>{
           
        if(res.data.success){
                alert("Inquiry updated Successfully!!")
              window.location.replace("/view")
                this.setState({
                    name:"",
                    nic:"",
                    phone:"",
                    email:"",
                    inq:""
                })

            }
            

        })
    }
    this.setState({ validated: true })
        
    }



    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://travelmanagement.onrender.com/inquiry/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.post.name,
                    nic:res.data.post.nic,
                    phone:res.data.post.phone,
                    email:res.data.post.email,
                    inq:res.data.post.inq,

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
                <div className="vj">
                
                <Form className="needs-validation12" noValidate  id="form">
                <h1 className="nam" > Edit Inquiry</h1>
                <hr/>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text" 
                        className="form-control"                
                        name="name"
                        placeholder="Enter Your Name"
                        value={this.state.name} 
                        onChange={this.handleInputChange}
                        required="required"/>
                        
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text" 
                        className="form-control" 
                        disabled               
                        name="nic"
                        placeholder="Enter Your NIC"
                        value={this.state.nic} 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone Number</label>
                        <input type="text" 
                        className="form-control"                
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        value={this.state.phone} 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text" 
                        className="form-control"                
                        name="email"
                        placeholder="Enter Your Email"
                        value={this.state.email} 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Inquiry</label>
                        <input type="text" 
                        className="form-control"                
                        name="inq"
                        placeholder="Enter Your Inquiry"
                        value={this.state.inq} 
                        onChange={this.handleInputChange}/>
                    </div>

                    <button class="btn btn-dark" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
                    <i className="fa fa-chevron-circle-right"></i>    
                    &nbsp; Update My Inquiry   
                    
                    </button>

            </Form>
            </div>
            </div>
            <Footer/>
         </div>
        )

    }
}