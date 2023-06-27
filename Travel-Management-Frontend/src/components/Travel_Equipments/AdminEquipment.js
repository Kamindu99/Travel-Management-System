import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import '../../Styles/TravelEquipment.css';
import HeaderAdmin from '../HeaderAdmin';

const AdminEquipment = () => {
    const [equipments, setEquipment] = useState([]);

    useEffect(() => {
        loadEquipments();
    }, []);

    const loadEquipments = async () => {
        const result = await axios.get("https://travelmanagement.onrender.com/equipment");
        setEquipment(result.data);
    };

    const deleteEquipment = async id => {
      // eslint-disable-next-line no-restricted-globals
      if(confirm("Are you Sure you want to delete this item?")){
        await axios.delete(`https://travelmanagement.onrender.com/equipment/delete/${id}`);
        alert ("Successfully Deleted");
        loadEquipments();
      }
      };
    const { id } = useParams();
    return (
      <div>
        <HeaderAdmin/>
        <div className="infoadmin">
      <div className="TEcenter">
      <div style={{paddingRight:"100px", paddingTop:"10px"}}><Link class="btn btn-primary mr-2" to="/equipment/report" style={{float:"right"}}>
                    Report
                  </Link></div>
                <div><Link class="btn btn-primary mr-2" to="/equipment/add" style={{float:"right"}}>
                    Add Equipment
                  </Link></div> <br/> <br/> <br/> 
                  <Row xs={1} md={1} className="g-4" id="by" class="rounded" style={{height:"270px", width:"90%"}} >
          {equipments.map((equipment, idx) => (
          

<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-2"><br/>
      <img src={`${equipment.image}`} alt="..."  class="img-fluid rounded-start" style={{height:"200px", width:"200px", paddingRight:"5px"}} />
    </div>
    <div class="col-md-10">
      <div class="card-body"> <br/>
        <h5 class="card-title">{equipment.name}</h5> 
        <p class="card-text">{equipment.description}</p>





        <div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <h6 class="card-text"><b>Rs. {equipment.price}</b></h6>

   </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <div class="form-outline mb-2 " style={{paddingLeft:"70%"}}>
                  <Link style={{float:"right"}}
                    class="btn btn-danger"
                    onClick={() => deleteEquipment(equipment._id)}
                  >
                    Delete
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link style={{float:"right"}}
                    class="btn btn-outline-primary mr-3"
                    to={`/equipment/edit/${equipment._id}`}
                  >
                    Edit
                  </Link>
    
   </div>

  

</div>







        
                  
      </div>
    </div>
  </div>
</div>

         
           
          ))}
        </Row> <br/> <br/> <br/> <br/>
                </div>
                </div> 
                </div>
    );
};

export default AdminEquipment;