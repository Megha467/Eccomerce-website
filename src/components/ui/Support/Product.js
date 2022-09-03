import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { addCart } from '../../../redux/action';
import { CustomButtons } from "../Buttons/buttons";
import Loading from "./Loading";
import '../../../Styles/Product.css';
import ReactImageZoom from 'react-image-zoom';

const Product = () => {

    const{id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                setProduct(await response.json());
                setLoading(false);       
        }
        getProduct();
    }, []);


   
    const ShowProduct = () => {
        return (
            <div>
            <div className ="row ">    
            <div className = "col-md-6">
            <img src={product.image} alt = {product.title} height = "400px" width="400px"/>
            </div>

            <div className = "col-md-6 float-right">
            <h4 className = "text-uppercase text-black-50 my-2"> 
             {product.category}   
            </h4> 

            <h1 className="display-5"> {product.title} </h1>      

            <p className ="lead fw-bolder"> 
             Rating {product.rating && product.rating.rate}
             <i className ="fa fa-star"></i>
            </p>  
            <h3 className ="display-6 fw-bold my-4"> ${product.price} </h3>   
            <p className ="lead"> {product.description} </p>
            <CustomButtons className ={"btn btn-outline-dark"} disabled = {false} onClick= {() => addProduct(product)} label = {"Add to cart "}/> 

            <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2"> Go to cart </NavLink>
            </div>
            </div>
            </div>
        )
    }



    return (
        <div>
            <div className = "container py-3">
            <div className ="row py-4">
            {loading ? <Loading /> : <ShowProduct/>}
            </div>
            </div>
        </div>
    )
}
export default Product;