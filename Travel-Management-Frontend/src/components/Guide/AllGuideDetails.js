import React,{Component} from 'react'
import axios from 'axios';
import "../../Styles/Guide.css";
import HeaderAdmin from '../HeaderAdmin'
 
export default class AllGuideDetails extends Component{
 
    constructor(props){
      super(props);
      this.state={
      guide:[]
      };
    }
 
  componentDidMount(){
    this.retrieveGuide();
  }
 
  retrieveGuide(){
    axios.get("https://travelmanagement.onrender.com/guide").then(res =>{
      if(res.data.success){
        this.setState({
          guide:res.data.existingGuide
        });
        console.log(this.state.guide);
      }
    });
  }
 
  
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
   if(confirm("Are you Sure you want to delete this?")){
    axios.delete(`https://travelmanagement.onrender.com/guide/delete/${id}`).then((res) => {
      alert("Guide Details Deleted SuccessFully!");
      this.retrieveGuide();
    })
   }
  }
 
  filterData(guide,searchkey){
    const result = guide.filter((guide) =>
      guide.name.toLowerCase().includes(searchkey)
    )
    this.setState({guide:result})
  }
 
  handleSearchArea=(e)=>{
    const searchkey = e.currentTarget.value;
    axios.get("https://travelmanagement.onrender.com/guide").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingGuide,searchkey)
      }
    });
  }


 
  render(){
    return(
      <div>
        <HeaderAdmin/>
            <div className = "infoadmin">
                <div className="container">      
                    <br/>
                    <div>
                        <div className="input-group" style={{marginLeft:1045}} >
                            <div className="form-outline">
                                <input 
                                    id="search-input" 
                                    type="search" 
                                    className="form-control" 
                                    placeholder="Search Guide"
                                    onChange={this.handleSearchArea}  />
                                </div>          
                                <button id="search-button" type="button" className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <br/>
                        <button type="button" className="btn btn-success btn-m mr-2" style={{marginLeft:14}}>
                            <i class="fa fa-plus mr-2" aria-hidden="true"></i>
                            <a href="/guide/add" style={{textDecoration:'none', color:'white'}} >Add New Guide</a>
                        </button>
                        <button type="button" className="btn btn-danger">
                            <i class="fa fa-file mr-2" aria-hidden="true"></i>
                            <a href="/guide/allrequests" style={{textDecoration:'none' ,color:'white'}} >Generate Report</a>
                        </button> 
                        <br/>
                        <section id="team">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Language</th>
                                        <th scope="col">E-Mail</th>
                                        <th scope="col">Contact Number</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.guide.map((guide,index)=>(
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                                <td className="text-center">
                                                    <img src = {`${guide.guideImage}`} alt = " " style = {{width : "80%" , minHeight : "70%"}}/>
                                                </td>
                                                <td>{guide.name}</td>
                                                <td>{guide.address}</td>
                                                <td>{guide.language}</td>
                                                <td>{guide.email}</td>
                                                <td>{guide.phone}</td>
                                                <td>{guide.username}</td>
                                                <td>{guide.password}</td>                              
                                                <td>
                                                    <a href={`/guide/edit/${guide._id}`} type="button">
                                                        <button type="button" style={{width:95, height:39.2}} class="btn btn-dark">
                                                        <i class="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>Edit</button>
                                                    </a>
                                                    <br/><br/>
                                                    <a href="/guide" onClick={()=>this.onDelete(guide._id)} type="button">
                                                        <button type="button" class="btn btn-danger">
                                                        <i class="fa fa-trash-o mr-2" aria-hidden="true"></i>Delete</button>
                                                    </a>
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}