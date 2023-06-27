import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import HeaderAdmin from '../HeaderAdmin';







 class ComponentToPrint extends React.Component {
    constructor(props){
        super(props);

        this.state={
          posts:[]
        };
        
     
      }
      
  
      componentDidMount(){
          this.retrieveInq();
         
      }
     
     
      retrieveInq(){
          axios.get("https://travelmanagement.onrender.com/inquiry/").then(res =>{
            if(res.data.success){
              this.setState({
                posts:res.data.allinq
              });
            console.log(this.state.posts);
            }
          });
  
        }

    render() {
      return (
        <div>
          <HeaderAdmin/>
       <div  className="infoadmin" >
        <div className="oneDetail6 infoadmin">
        <ReactToPrint
            trigger={() => <button className="btn btn-success" style={{margintop:'400px'}}>Print this out!</button >}
            content={() => this.componentRef}
          />
          <div className="container2" ref={(el) => (this.componentRef = el)}>
        <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
        
           <h1>Inquiry Report</h1>
           <span className="xyz">
             Date & Time : {`${new Date().toLocaleString()}`}
          </span>
          
          
           <hr/>
         </div>
         

        </div>

         <table className="blueTable" border="2"  >
 
       <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">NIC</th>
         <th scope="col">Phone</th>
         <th scope="col">Email</th>
         <th scope="col">Inquiry</th>
         <th scope="col">Responce</th>

         
        
       </tr>
    
     <tbody>
       {this.state.posts.map((posts,index)=>(
         <tr key={index}>
         <th scope="row">{index+1}</th>
         <td>
        
             {posts.name}
            
             </td>
         <td>{posts.nic}</td>
         <td>{posts.phone}</td>
         <td>{posts.email}</td>
         <td>{posts.inq}</td>
         <td>{posts.adrep}</td>
       
        &nbsp;
        

       </tr>
       ))}
       
     </tbody>
   </table>
   </div>
   </div></div>
       </div>
      );
    }
  }

 
  
  export default ComponentToPrint;
