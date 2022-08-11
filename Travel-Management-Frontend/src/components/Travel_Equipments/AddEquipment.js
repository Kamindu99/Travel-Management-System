import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import HeaderAdmin from '../HeaderAdmin'

const AddEquipment = ()=>{

     let history = useHistory();

     const[name,setname]=useState("");
     const[description,setdescription]=useState("");
     const[price,setprice]=useState("");
     const[message,setMessage]=useState("");
     const[image,setFileName]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("name",name);
       formData.append("description",description);
       formData.append("price",price);
       formData.append("image",image);
   
       setname("");
       setdescription("");
       setprice("");
       
   
       axios
       .post("http://localhost:8070/equipment/add",formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/equipment/admin");
       alert(" Travel Equipment Added Successful")
   };
    return (
      <div>
        <HeaderAdmin/>
      <div className="infoadmin">
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Equipment</h2>
          <form class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                rows="6"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={(e)=>setdescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={(e)=>setprice(e.target.value)}
                required
              />
            </div>

            <lable class="label-title"><b>Add an Image*</b>
            <div class="mb-3">
            <input class="form-control" type="file" id="formFile" filename="image" onChange={onChangeFile}/>
            </div></lable>

            <button className="btn btn-primary btn-block">Done</button>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
};

export default AddEquipment;