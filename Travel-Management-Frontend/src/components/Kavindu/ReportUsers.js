import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";


class ComponentToPrint extends React.Component{
constructor(props){
  super(props);

  this.state={
      RegData:[]
  
};
}
componentDidMount(){

  this.DisplayData(); 

  
  }

  DisplayData(){  //Display All details
      
      axios.get("https://travelmanagement.onrender.com/access/Details").then(res =>{
          
          if(res.data.success){
              this.setState({
                  RegData:res.data.BackendData
              
              });
               console.log(this.state.RegData);
          }
          else (
              console.log("cant")
          )
      })
  
  }





  render() {
    return (
     <div className="info">
       
       <form className="form12">
     
      <table className="table" border='3'> 

               
      <thead>
       <tr>
           <th scope="col">#</th>
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Number</th>
        
           

           </tr>       
   </thead>  
    <tbody>
   {this.state.RegData.map((RegData,index)=>(

       <tr>
           <th scope="row">{index+1}</th>
           <td>{RegData.Name}</td>
           <td>{RegData.Email}</td>
           <td>{RegData.Num}</td>
        
          
          

           <td>

           </td>
       </tr>



   ))}
   
      


       
       </tbody>
       </table>
      
       </form>
       </div>
      
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div className="body1">
        <ReactToPrint
          trigger={() => <button className="button12" style={{marginLeft:230}}>Print this out!</button> }
          
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
