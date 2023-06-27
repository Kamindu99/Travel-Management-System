import React, { Component , useParameters} from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Header from '../Header';


export default class ComponentToPrint1 extends React.Component {
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
    
    render(){

        const {name,nic,phone,email,inq,adrep,_id} = this.state.post;



        return(
            <div>
                <Header/>
            
            <div className="info">

              
            <ReactToPrint
            trigger={() => <button className="btn btn-dark"  style={{margintop:'500px'}}>
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;Get a Print of the Report</button >}
            content={() => this.componentRef}
          />

          <div ref={(el) => (this.componentRef = el)}>

              <br/>
              
            <form className="container2"   style={{textSizeAdjust:'15px'}}>
            <br/> <br/>
        
            <h1>Dream Travelers User Inquiry Report</h1>
             <hr/>
                 
                 <tr className="col-sm-3">User &nbsp;- &nbsp;{name}</tr>
                 
                 <tr className="col-sm-3">NIC &nbsp;-&nbsp;{nic}</tr>

                 <tr className="col-sm-3">Phone &nbsp;-&nbsp;{phone}</tr>

                 <tr className="col-sm-3">Email &nbsp;-&nbsp;{email}</tr>
                 
                
        
                 <br/>  
             <div className="form-group" style={{marginBottom:'15px'}}>
             <div >
                    <hr/>
                     <b style={{marginBottom:'5px'}}>Your ({name}'s) Inquiry</b>
                    
                     </div>
                    <hr/>
                 <p className="bod"> {inq}</p>
               
                 
             </div>
             <br/>
           
             <div className="form-group" style={{marginBottom:'15px'}}>
                     <div >
                     <hr/>
                     <b style={{marginBottom:'5px'}}> Response From Administration</b>
                   
                     </div>
                     <hr/>
                     <p className="bod"> {adrep}</p>

                     <br/>
                     <b>Inquiry & User Affairs,</b>
                     <br/>
                     <b>Dream Travelers(PVT)Ltd.</b>

             </div>
  

             </form>
             </div>
            
             </div>
         </div>
            

        )

    }
    
}



  
  
  
 