import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CustomButtons } from "../Buttons/buttons";
import Loading from "./Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../Styles/Product.css';



const Products = () => {
    const[data, setData] = useState([]);
    const[filter, setFilter] = useState(data);
   
    const[loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted)
            {
                setData(await response.clone().json());
                setFilter(await response.json());
              
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false; 
            }
        }
        getProducts();
    }, []);

   

    <Loading />

 const filterProduct = (type) => {
        const upatedList = data.filter((x) => x.category === type);
        setFilter(upatedList);
    }
    const filterProductR = (type1, type2) => {
        const upatedList = data.filter((x) => (x.price >= type1 && x.price <= type2));
        setFilter(upatedList);
    }

     


    const ShowProduct = () => {
        return (
        <>
     
        <div className = "buttons d-flex justify-content-center  mb-3">
        <CustomButtons className = {"btn btn-outline-dark me-2"} disabled = {false} onClick = {() => setFilter(data)} label = { "All"} /> 
        <CustomButtons className = {"btn btn-outline-dark me-2"} disabled = {false} onClick = {() => filterProduct("men's clothing")} label = {"Men's Clothing" }/>    
        <CustomButtons className = {"btn btn-outline-dark me-2"} disabled = {false} onClick = {() => filterProduct("women's clothing")} label = "Women's Clothing" /> 
        <CustomButtons className = {"btn btn-outline-dark me-2"} disabled = {false} onClick = {() => filterProduct("jewelery")} label = {"Jewellery"} /> 
        <CustomButtons className = "btn btn-outline-dark me-2" disabled = {false} onClick = {() => filterProduct("electronics")}  label = {"Electronics "}/> 
        
       
 
       </div>
       <div className = "buttons d-flex justify-content-center  pb-5">


       {/* <h6>Price based filtering: </h6> */}
       <CustomButtons className = "btn btn-outline-dark me-2" disabled = {false} onClick = {() => filterProductR(9, 40)}  label = {"$9-$40"}/>  
       <CustomButtons className = "btn btn-outline-dark me-2" disabled = {false} onClick = {() => filterProductR(41, 70)}  label = {"$41-$70"}/>  
       <CustomButtons className = "btn btn-outline-dark me-2" disabled = {false} onClick = {() => filterProductR( 70, 120)}  label = {"$70-$120"}/>      
       <CustomButtons className = "btn btn-outline-dark me-2" disabled = {false} onClick = {() => filterProductR(120, 200)}  label = {"$120-$200"}/> 
       </div>
        
       
        {filter.map((product) => {
            return (
            <>
            <div className = "col-md-3 mb-4">
            <div class="card h-100 text-center p-4" key = {product.id}>
            <img class="card-img-top" src={product.image} alt= {product.title} height = "220px" />
            <div class="card-body">
            <h5 class="card-title">{product.title.substring(0, 12)}...</h5>
            <p class="card-text lead fw-bold">${product.price}</p>
            <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
            </div>
            </div>
                
            </div>
            </>
            );
            })}
        </>
        );
    }

return (
    <div>   
        <div className = "container my-5 py-5">
            <div className = "row">
                <div className="col-12 text-dark mb-5">
                <h1 className = "display-6 fw-bolder text-center"> Latest Products </h1>
                <hr />
                </div>
            </div>
          
            <div className = "row justify-content-center text-dark">
                {loading ? <Loading/> : <ShowProduct/>}
                
               
            </div>
        </div>
    </div>
)
}
export default Products;