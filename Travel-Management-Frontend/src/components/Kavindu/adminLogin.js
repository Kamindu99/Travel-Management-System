
import  React from 'react'
import Display from './adminProfileView';
import Header from '../Header';
import Footer from '../Footer';
export default function Admin  (){



    
    function myFunction() {
        
        
        const adminuser = document.getElementById('user1').value;
        const adminpass =document.getElementById('pass1').value;

            if(adminuser =="admin" && adminpass =="admin"){
                
                window.location.href="/adminhome" ;
 
            }else{
                alert("login Fail")
                
            }
      }


    return (
       
        
        <div className="body1">
            
            <div className="info">
           
         
            <form  className="form12">
                <br></br>
            <h2 className="h222">System admin Login</h2>

            <input className="inputabc" type="text" placeholder="Username" id="user1" ></input>
            <input className="inputabc" type="password" placeholder="Password"id="pass1"></input>
            <a className="btn btn-danger a123"  onClick={myFunction}>
                                <i className ="fas fa-login"></i>&nbsp;Login
                            </a>
           
            
            </form>

         
            
            
            </div>
                </div>
               

       
    )

}
