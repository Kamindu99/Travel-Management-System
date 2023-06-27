import React, { Component } from 'react'
import axios from 'axios';
import HeaderAdmin from '../HeaderAdmin';



export default class AdminDetails extends Component{
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
   if(window.confirm('Do you want to block this user and delete the inquiry ?')){
        const url="https://travelmanagement.onrender.com/inquiry/delete/";
        const id1 = id;
        
            axios.delete(url+id1).then((res)=>{
    
            alert("Inquiry Deleted Successfully !");
            window.location.replace("/adView")
            
           
    })
}
    }

    render(){

        const {name,nic,phone,email,inq,adrep,id} = this.state.post;



        return(

            <div >
                <HeaderAdmin/>
                <body className="vj">
                <div >
               <form className="oneDetail3" id="form">
               
           
               <h1 className="nam"> Client Inquiry Details</h1>
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
                        <label style={{marginBottom:'5px'}}> Client({name})'s Inquiry </label>
                        &nbsp;&nbsp;
                        </div>
                  
                    <p className="bod"> {inq}</p>
   

                </div>
                </form>



                <form className="oneDetail4" id="form">
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <div className="hed">
                        <i class="fa fa-comments" aria-hidden="true"></i> &nbsp;
                        <label style={{marginBottom:'5px'}}> Response From Administration</label>
                        &nbsp;&nbsp;
                        </div>
                        <p className="boadad"> {adrep}</p>

                        <br/>
                        <a  href={"/admin/"+this.state.post._id}>
                            <button className="btn btn-warning" type="button" style={{margintop:'15px'}} > 
                            <i className="fas fa-edit"></i>&nbsp; Edit Response
                            </button>
                        </a>
                        &nbsp;
                         <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(this.state.post._id)}>
                                <i className ="fas fa-trash-alt"></i>&nbsp; Block User
                        </a>


                    
                        

                </div>
                        

                </form>
               
                
            </div>
            </body>
            </div>
        )

    }
}