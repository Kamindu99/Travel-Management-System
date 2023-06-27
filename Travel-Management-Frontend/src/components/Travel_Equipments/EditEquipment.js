import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import HeaderAdmin from '../HeaderAdmin'

const EditEquipment = () => {
  let history = useHistory();
  const { id } = useParams();
  const [equipment, setEquipment] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const { name, description, price, image } = equipment;
  const onInputChange = e => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://travelmanagement.onrender.com/equipment/update/${id}`, equipment);
    history.push("/equipment/admin");
  };

  const loadEquipment = async () => {
    const result = await axios.get(`https://travelmanagement.onrender.com/equipment/get/${id}`);
    setEquipment(result.data.equipment);
  };
  return (
    <div>
        <HeaderAdmin/>
    <div className="infoadmin">
    <div className="container" style={{paddingTop:"100px"}}>

      <div className="w-100 mx-auto shadow p-5">
        <h2 className="text-center mb-4" style={{paddingBottom:"20px"}}><b>Edit Equipment</b></h2>




        <div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <img src={`${image}`} alt="..."  class="img-fluid rounded-start" style={{height:"350px", width:"500px", paddingLeft:"50px"}} />

   </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <div class="form-outline mb-2 " style={{paddingLeft:"5%"}}>

    <form onSubmit={e => onSubmit(e)} style={{width:"550px"}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Equipment Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              rows="8"
              className="form-control form-control-lg"
              placeholder="Enter The Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <button className="btn btn-warning btn-block">Update Equipment</button>
        </form>
                  
    
   </div>

  

</div>





        

      </div>
    </div>
    </div>
    </div>
  );
};

export default EditEquipment;
