import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';

import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";


  
const Reset = ()=>{

      
        

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
    await axios.put(`https://travelmanagement.onrender.com/user/update/${id}`,Registers);

   
    alert("  Password Reset Success")
    window.location.replace("/register")
}

const loadPackage = async()=>{
   const res = await axios.get
       (`https://travelmanagement.onrender.com/user/details/${id}`)

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
        <hr/>
                <h2 className="h222">Reset Password </h2>
                <hr/>
                <h8>Enter New Password</h8>
                <input className="inputabc" type="password" Name="Password" value={Password} onChange={e=>onInputChange(e)} />

               
                <input type="submit" name="submit" className="button12" value="Confirm"/>

                <br/>

      </form>
            </div>
            </div>
            
            <Footer/>
            </div>

            
        )



    }



    export default Reset