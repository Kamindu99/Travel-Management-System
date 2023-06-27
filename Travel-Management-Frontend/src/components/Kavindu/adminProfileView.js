import React ,{Component} from 'react';
import HeaderAdmin from '../HeaderAdmin'
import ReactToPrint from "react-to-print";
import axios from 'axios';



export default class Display extends Component{
   
    
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

filterData(RegData,searchkey){  //Search 
    console.log("err2")
    const result = RegData.filter((post)=>
        
        post.Email.includes(searchkey)
     )
    
    this.setState({RegData:result})
    
    console.log(this.setState({RegData:result}))

}


Handelsearch = (e) => {
   const searchkey = e.currentTarget.value;
  

    axios.get("https://travelmanagement.onrender.com/access/Details").then(res =>{
        
        if(res.data.success){
           
             this.filterData(res.data.BackendData,searchkey)
        }
        else {

            console.log("eee")
        }
        
})
}

onDelete = (id) =>{
  if(window.confirm("Confirm Delete")){
    const url="https://travelmanagement.onrender.com/access/delete/";
    const id1 = id;
        axios.delete(url+id1).then((res)=>{

        alert("success Deleted");
        this.DisplayData();
})
   
}
   

}

render(){
return (
    <div>
     <HeaderAdmin/> 
    <div className="body1">
        
        <div className="infoadmin">

              <br></br>
              <hr></hr>
               
               
                    

    
   
                <div className="container containerabc">
                <hr></hr>
                <h2 className="h222"> All Registration Details </h2> 
                <hr></hr>
                <input className="inputabc" type="text" placeholder="Search By Email" id="searchid" onChange={this.Handelsearch}></input> 
                    <table className="table">

               
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
                            <a className="btn btn-danger a123" href="#" onClick={()=>this.onDelete(RegData._id)}>
                                <i className ="fas fa-trash-alt"></i>&nbsp;Ban User
                            </a>
                        </td>

                       
                    </tr>



                ))}
                
                   
            

                    
                    </tbody>
                   
                    </table>
                    <a className="a123" href="/rep">
                    <button className="button12" >Generate User Report</button></a>
                    <hr></hr>
                    </div>
                    <hr></hr>
                    
                    
                   
                    </div>
                    </div>
                    </div>
)}

}