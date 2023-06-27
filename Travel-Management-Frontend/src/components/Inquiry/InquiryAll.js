import React,{Component} from 'react';
import axios from 'axios';

export default class InquiryAll extends Component{

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

      onDelete = (id) =>{
        axios.delete(`https://travelmanagement.onrender.com/inquiry/delete/${id}`).then((res) =>{
          alert("Deleted successfully");
          this.retrieveInq();

        })

      }
      filterData(posts,searchkey){  
     
        const result = posts.filter((post)=>
            
            post.nic.includes(searchkey)
         )
        
        this.setState({posts:result})
        
        
    
    }
    handleSearchArea = (e) => {
      const searchkey = e.currentTarget.value;
     
   
       axios.get("https://travelmanagement.onrender.com/inquiry/").then(res =>{
           
           if(res.data.success){
              
                this.filterData(res.data.allinq,searchkey)
           }
           else {
   
               console.log("eee")
           }
           
   })
   }


     

      


      render() {
        return(

          
          <div className="container1">
         
            
              <h1 >All Inquiries</h1>
        
         
            
            
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
          
            </div>

         
             
            <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Inquiry</th>
           
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>
               <a href={`/inqD/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.name}
                </a>
                </td>
            <td>{posts.nic}</td>
            <td>{posts.phone}</td>
            <td>{posts.email}</td>
            <td>{posts.inq}</td>
            &nbsp;
           <a  href={`/edit/${posts._id}`}>
           <button className="btn btn-warning" type="button" style={{margintop:'15px'}} > 
           <i className="fas fa-edit"></i>&nbsp; Edit
           </button>
           </a>
         
          
           <a href="#" onClick={() => this.onDelete(posts._id)} >
           <button className="btn btn-danger" type="button" style={{margintop:'15px'}} > 
           <i className="far fa-trash-alt"></i>&nbsp; Delete
           </button>
           </a>

          </tr>
          ))}
          
        </tbody>
      </table>
      
      <button className="btn btn-success"><a href={"/add"} style={{textDecoration:'none',color:'white'}}>
            Create New Inquiry
      </a>

      </button>
  
       
          </div>
        )
          }
}
      
    