import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import "../../Styles/Navbar.css";

import { customButtons, customNavlink } from "../ui/Buttons/buttons"; 


const Navbar = () => {
    const state = useSelector((state) => state.handleCart );
      return (
          <>
          <div className="background">
          <nav class="navbar navbar-expand-lg navbar-light py-3 shadow-sm ">
          <div class="container">
           <NavLink to class=" navbar-brand fw-bold fs-4 text-white" to="/">MK COLLECTIONS</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" style= {{scrollHeight : "100px;"}} >
          <li class="nav-item">
            <NavLink class="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link text-white" to="/products">Product</NavLink>
          </li>

         
          {/* <li class="nav-item">
            <NavLink class="nav-link text-white" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link text-white" to="/contact">Contacts</NavLink>
          </li>   */}
        </ul>
          <div className = "buttons">
          {/* <NavLink to="/login" className = "btn text-white outline"> <i className = "fa fa-sign-in me-1">  </i>Login </NavLink>
  
          <NavLink to="/register" className = "btn  ms-2 text-white outline"> <i className = "fa fa-user-plus me-1">  </i>Register </NavLink> */}
  
          <NavLink to="/cart" className = "btn  ms-2 text-white outline"> <i className = "fa fa-shopping-cart me-1">  </i>Cart({state.length}) </NavLink>
          </div>
      </div>
    </div>
  </nav>
  </div>
      </>
      )
  }
  

export default Navbar;