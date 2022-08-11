import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';

import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";


  
const EditPackage = ()=>{

      
        

    let history = useHistory();
    const {id}=useParams();

   const [Registers,addPost] = useState({
           
        Name:"",
        Email:"",
        Password:"",
        Num:""

   });
const {Name,Email,Password,Num}=Registers;

const onInputChange = e=>{
    addPost({...Registers,[e.target.name]: e.target.value});
};

const onSubmit=async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:8070/user/update/${id}`,Registers);

    history.push("/profile");
    alert("  Successful")
}

const loadPackage = async()=>{
   const res = await axios.get
       (`http://localhost:8070/user/details/${id}`)

       addPost(res.data.BackendData)
     }
     useEffect(()=>{
       loadPackage();
   },[]);

        return(
            <div>
                <Header/>
            <div className="body1">
                <div className="info">
                 
        <form onSubmit={e=>onSubmit(e)} className="form12">

                <h2 className="h222">Edit Details </h2>
                <input className="inputabc" type="text" name="Name"  value={Name}onChange={e=>onInputChange(e)} />
                <input className="inputabc" type="text"  name ="Email" value={Email}  onChange={e=>onInputChange(e)} />
                <input className="inputabc" type="text" name="Num" value={Num}  onChange={e=>onInputChange(e)}/>
                <input className="inputabc" type="text" Name="Password" value={Password} onChange={e=>onInputChange(e)} />


                <button className="btn btn-danger a123" type="submit" name="submit"  >Edit Conifrm</button>

                            </form>
            </div>
            </div>
            
            <Footer/>
            </div>

            
        )



    }



    export default EditPackage