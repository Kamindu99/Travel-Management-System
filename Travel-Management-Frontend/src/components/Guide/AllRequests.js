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
    axios.get("https://travelmanagement.onrender.com/guiderequest/allrequests").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.allRequests
        });
      
      }
    });
  }
  

  render() {
    return (
      <div>
        <HeaderAdmin/>
        <br/>
        <div className="info" style={{marginTop:-1}}>
            <ReactToPrint
                trigger={() =>
                <button type="button" 
                class="btn btn-success" 
                style={{marginLeft:1170}}>
                <i class="fa fa-print mr-2"></i>Print this out!
                </button> 
            }
            content={(Component) => this.componentRef}
        />
       
            <div className="container" ref={(Component) => (this.componentRef = Component)}>
                    <section id="report">
                        
                        <h1 className = "font">Requests Details of Travellers</h1>
                        <table class="table mr-2 table-hover table-bordered">
                            <thead class="thead text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Guide Name</th>
                                    <th scope="col">Guide Language</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Telephone</th>
                                    <th scope="col">E-Mail</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Tour Date</th>
                                    <th scope="col">No. of Dates</th>
                                    <th scope="col">Request Date</th>      
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.posts.map((posts,index)=>(
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{posts.guidename}</td>
                                        <td>{posts.guidelanguage}</td>
                                        <td>{posts.uname}</td>
                                        <td>{posts.phone}</td>
                                        <td>{posts.email}</td>
                                        <td>{posts.destination}</td>
                                        <td>{posts.tourdate}</td>
                                        <td>{posts.noofdates}</td>
                                        <td>{posts.requestdate}</td>       
                                    </tr>
                                ))}   
                            </tbody>
                        </table>
                    </section>
            </div> 
        </div>  
         
      </div>
      
    );
  }
}



export default ComponentToPrint;
