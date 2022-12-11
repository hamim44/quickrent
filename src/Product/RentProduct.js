import React, {Components} from "react";
import {useState, useEffect} from "react";
import axiosConfig from "../Components/axiosConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './rentProduct.css';
import Customermanu from "../Customer/Customermanu";

<Link src="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></Link>;
<Link src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></Link>;
<Link src="https://fonts.googleapis.com/icon?family=Material+Icons"></Link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;
<Link src="https://fonts.googleapis.com/icon?family=Material+Icons"></Link>;




const RentProduct = () =>{
    const navigate = useNavigate();
    const[products, setProducts] = useState([]);

    // alert(localStorage.getItem("user"));

    useEffect(()=>{
        axiosConfig.get("product/rentproduct")
        .then(resp=>{
        //console.log(resp.data);
        setProducts(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
<div>
       <Customermanu/>

    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-titlei">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Borrow <b>Product</b></h2>
                    </div>
                    
                </div>
            </div>


            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                         <th>ID</th> 
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Detail</th>
                        <th>Actions</th>
                        
                         
                    </tr>
                </thead>
                <tbody>                   
                    {products.map(product=>(
                    <tr >
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.details}</td>
                        <td>
                            <div><button href="">Rent</button></div>                        
                        </td>

                    </tr>
                ))}
                    
                </tbody>
            </table>




        </div>
    </div>

    </div>

)
}

export default RentProduct;  