import React,{Component} from 'react';
import axios from 'axios';

import jsPDF from 'jspdf';
import { render } from "react-dom";
import ReactToPrint from 'react-to-print';
import HeaderAdmin from '../HeaderAdmin';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import { Row } from "react-bootstrap";

export default class AdminView extends Component{

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
            
           
            post.inq.includes(searchkey)
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

          <div>
          <HeaderAdmin/>
          <div className="vj">
          <div className="infoadmin">

            
          
            <div className="col-lg-3 mt-2 mb-2" style={{ marginInlineStart: "75%" }}>
              <input
              
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
       
          </div>
          

          <div className="container">
              
            <h1 style={{ textAlign: "center" }} className="adinqhq">All Inquiries</h1>
            <a href={"/report"}>
            <button className="btn btn-success" style={{ marginInlineStart: "80%" }}>
            <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;
            Generate Report
             </button>
             </a>


            <br />
            <Row xs={1} md={1} className="g-5" id="by" class="rounded">
              {this.state.posts.map((posts,index) => (
                <div  >
                  <div className="adinqh">
                    <div class="card-header">
                      <h5 class="card-title" style={{ color: "white" }}>
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <b>)</b>
                        &nbsp;
                        <b>Client Name -</b> &nbsp;{posts.name} 

                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        


                        <If condition={posts.adrep == "Our team will response to your inquiry soon"}>
                                <Then>
                                  <a>
                                <button className="btn btn-danger" type="button"  >
                                <i class="fa fa-times" aria-hidden="true"></i> &nbsp;
                                    Haven't Responded
                                </button>
                                </a>
                                </Then>
                                <Else>
                                  <a>
                                <button className="btn btn-success" type="button"  >
                                <i class="fa fa-check" aria-hidden="true"></i> &nbsp;
                                Response Added
                              </button>
                              </a>
                                </Else>
                            </If>
                        
                        
                      

                        
                        </tr>
                        
                      </h5>
                      
                    </div>
                  </div>
                  <div className="adinqcard">
                    <div class="card-body" style={{}}>
                      
                      <h5 class="card-title">
                        
                        
                      </h5>
                      <div className="hedad">
                       <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        <label style={{marginBottom:'5px'}}> <b>Inquiry</b> </label>
                        &nbsp;&nbsp;
                        </div>
                        <div className="boadad">
                        <i class="fa fa-comments" aria-hidden="true"></i>&nbsp;
                        <label style={{marginBottom:'5px'}}> <p class="card-text">{posts.inq}</p> </label>
                        &nbsp;&nbsp;
                        </div>


                     <br/>

                      <a href={`/adminDet/${posts._id}`} style={{textDecoration:'none'}}>
                      <button className="btn btn-dark" type="button" style={{margintop:'15px',marginInlineStart: "70%"}}  >
                      <i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp; View Inquiry
                    </button>
                 </a>
                 &nbsp;
                      
            <a  href={`/admin/${posts._id}`}>
           <button className="btn btn-warning" type="button" style={{margintop:'15px'}}  >
           <i class="fa fa-comment" aria-hidden="true"></i>&nbsp; Add Reply
           </button>
           </a>

          
           

                    </div>
                  </div>
                </div>
                
              ))}

            </Row>

           
                <br />
                <br />
                <br />
                <br />
            <p style={{visibility: 'hidden'}}>aaaaaaaaaaaa</p>
           

          </div>
          <br />
          

          
            </div>
            </div>
          </div>

            


        )



          }

       
        
}





      
    