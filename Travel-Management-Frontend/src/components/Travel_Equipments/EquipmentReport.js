import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";
import HeaderAdmin from '../HeaderAdmin'

class ComponentToPrint extends React.Component{
  constructor(props){
    super(props);
    this.state={
      posts:[]
    };
  }
  
  componentDidMount(){
    this.retrievePosts();
  }
  
  retrievePosts(){
    axios.get("https://travelmanagement.onrender.com/equipment").then(res =>{
        this.setState({
          posts:res.data
        });
    });
  }
  
  render() {
    return (
      <div>
        <HeaderAdmin/>
      <div className="infoadmin">
      <ReactToPrint
          trigger={() => <button style={{marginRight:"100px", float:"right"}}>Print this out!</button> }
          
          content={(Component) => this.componentRef}
        />
      <div className="container" ref={(Component) => (this.componentRef = Component)}>
        <h1> All Equipment Details</h1>
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.name}</td>
        <td>{posts.description}</td>
        <td>{posts.price}</td>
       
      </tr>
  
      ))}
      
    </tbody>
  </table>
  
  
   </div>
      </div>
      </div>
  
    );
  }
}


export default ComponentToPrint;
