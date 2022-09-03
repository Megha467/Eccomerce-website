import React, { useEffect, useState } from "react";
import '../../../Styles/Login.css'
import useForm from "./useForm";
import validateInfo from "./Validate";
import { CustomButtons } from "../Buttons/buttons";


const Login = () => {
    const[user,setUser]=useState();
   
    const  validate = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const datat = await response.json();
         datat.map((obj)=>{  
             if(user==obj.id){
                console.log("id",obj.id)
                console.log("uder",user)
                console.log(typeof(user))
             }
            
            });   


    } 
  
    function handleChange(event) {
        const val = event.target.value;
        setUser(val);
        console.log(val);
      }

    return (
        <div>
        <div className = "form">
        <h1> Login Form </h1>
        <div className = "form-inputs">
        <label htmlFor="Username" className ="form-label" > User name 
        <input type = "text" id = "name" className="form-inputs"
        placeholder = "type here..."
        onChange={handleChange}
        />
        </label>
      
        </div>

        <div className = "form-inputs">
        <label htmlFor="Username" className ="form-label" > Password 
        
        <input type = "text" id = "name" className="form-inputs"
        placeholder = "type here..."
        // onChange={handleChange} 
        />
        </label>
        </div>
       
        {/* <button className="btn"> Login </button> */}
        <div className="buttonAlign">
        <CustomButtons className = {"btn btn-outline-dark me-2 "} disabled = {false}
         onClick = {validate} label = {"Login" }/>   
         </div>

        </div>
        </div>
    );
}

export default Login;