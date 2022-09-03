import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const CustomButtons = ({ className,  disabled, label, onClick, type}) => {
    return (
      <>
        <button  className = {className} disabled = {disabled} onClick = {onClick} type={type} > {label} </button>
      </>
    );
  };

  export const customNavlink =({to, className, label}) => {
      return (
          <>
           <NavLink to={to} className = {className}> {label}  </NavLink>
          </>
      );
  };