import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

export default class InqDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://travelmanagement.onrender.com/inquiry/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }


        });
    
    }
    onDelete = (id) =>{
   if(window.confirm('Do you want to delete your Inquiry ?')){
        const url="https://travelmanagement.onrender.com/inquiry/delete/";
        const id1 = id;
        
            axios.delete(url+id1).then((res)=>{
    
            alert("Inquiry Deleted Successfully !");
            window.location.replace("/add")
            
           
    })
}
    }

    render(){

        const {name,nic,phone,email,inq,adrep,id} = this.state.post;



        return(
           
            <div >
                <Header/>
                <div className="info">
                <body className="vj">
                <div >
               <form className="oneDetail3" id="form">
               
           
               <h1 className="nam">Your Inquiry Details</h1>
                <hr/>
                    
                    <tr className="col-sm-3">Name &nbsp;: &nbsp;{name}</tr>
                    
                    <tr className="col-sm-3">Nic &nbsp;  : &nbsp;{nic}</tr>

                    <tr className="col-sm-3">Phone &nbsp;: &nbsp;{phone}</tr>

                    <tr className="col-sm-3">Email &nbsp; : &nbsp;{email}</tr>
                    
                   
                
                


                
                </form>
                <form className="oneDetail2" id="form">
              
                <div className="form-group" style={{marginBottom:'15px'}}>
                <div className="hed">
                <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        <label style={{marginBottom:'5px'}}> You ({name})</label>
                        &nbsp;&nbsp;
                        </div>
                  
                    <p className="bod"> {inq}</p>
                  
                    <a  href={"/editinq/"+this.state.post._id}>
                            <button className="btn btn-warning" type="button" style={{margintop:'15px'}} > 
                            <i className="fas fa-edit"></i>&nbsp; Edit Inquiry
                            </button>
                        </a>
                        &nbsp;
                         <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(this.state.post._id)}>
                                <i className ="fas fa-trash-alt"></i>&nbsp; Delete Inquiry
                        </a>

                        &nbsp;

                        <a  href={"/userDoc/"+this.state.post._id}>
                            <button className="btn btn-success" type="button" style={{margintop:'15px'}} > 
                            <i className="fa fa-file-pdf-o"></i>&nbsp;Get a Copy
                            </button>
                        </a>
                        &nbsp;
                        <a  href={"/inqmail/"+this.state.post._id}>
                            <button className="btn btn-dark" type="button" style={{margintop:'15px'}} > 
                            <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; Get Email
                            </button>
                        </a>

                </div>
                </form>



                <form className="oneDetail4" id="form">
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <div className="hed">
                        <i class="fa fa-comments" aria-hidden="true"></i> &nbsp;
                        <label style={{marginBottom:'5px'}}> Response From Administration</label>
                        &nbsp;&nbsp;
                        </div>
                        <p className="bod"> {adrep}</p>


                        <br/>
                     <b style={{textSize:"5px"}}>Inquiry & User Affairs,</b>
                     <br/>
                     <b>Travel Dreams(PVT)Ltd.</b>
                        

                </div>
                        

                </form>
               
                
            </div>
            </body>
            </div>
            <Footer/>
            </div>
        )

    }
}