import React from "react";
import '../../../Styles/Login.css'
import { CustomButtons } from "../Buttons/buttons";
import useForm from "./useForm";
import validateInfo from "./Validate";

const Register = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

    return (
       
        <div className = "form"  onSubmit={handleSubmit}>
            
         <form onSubmit={handleSubmit} noValidate>   
        <h1> Registration Form </h1>
        <div className = "form-inputs">
        <label htmlFor="username" className ="form-label" > User name 
        <input type = "text"  name ="username" className="form-inputs"
        placeholder = "type here..."
        value={values.username}
        onChange = {handleChange}
        />
         {errors.username && <p>{errors.username}</p>}
        

        </label>
       
       { console.log("error")}
        {console.log(errors.username)}
       
        </div>

        <div className = "form-inputs">
        <label htmlFor="password" name ="" className ="form-label" > Password 
        
        <input  id = "password"  type="password" name ="password"
        className="form-inputs"
        placeholder = "type here..."
        value={values.password}
        onChange = {handleChange}
        />
        </label>
        {errors.password && <p>{errors.password}</p>}
        </div>

        <div className = "form-inputs">
        <label htmlFor="email" className ="form-label" > Email 
        
        <input type = "text" id = "email"  name ="email" className="form-inputs"
        placeholder = "type here..."
        value={values.email}
        onChange = {handleChange}
        />
        </label>
        </div>
       
        {/* <button className="btn"> Login </button> */}
        <div className="buttonAlign">
        <CustomButtons className = {"btn btn-outline-dark me-2 "} disabled = {false}
         onClick={() => {console.log("submitted")}} type={"submit"} label = {"Login" }/>   

         {/* <button type='submit' onClick={ console.log("submitted")}>submit</button> */}
        
         </div>
         </form>

        </div>
      
    );
}

export default Register;