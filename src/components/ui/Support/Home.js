import React from "react";
import Products from "./Products";
import '../../../Styles/Home.css';
import { TextAnimation } from "./TextAnimation";
import { BackgroundImage } from "../../../utils/images"; 
const Home = () => {
    return (
    <>
  <div className="card bg-light text-white border-0">
  <BackgroundImage height = "540px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
  <div className="container">
  <h5 className="card-title display-3 fw-bolder mb-0"><span className="shop">Shopping can b</span><span className="heading">e a Headache</span></h5>
  
  
  <TextAnimation />

  </div>
  </div>
 
</div>
<Products />
    </>
    );
}

export default Home;