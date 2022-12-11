import React, {Components} from "react";
import {useState, useEffect} from "react";
import axiosConfig from "../Components/axiosConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>;
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>;
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;


const Product = () => {
    const navigate = useNavigate();
    const[products, setProducts] = useState([]);

    // alert(localStorage.getItem("user"));

    useEffect(()=>{
        axiosConfig.get("product/myProduct")
        .then(resp=>{
        //console.log(resp.data);
        setProducts(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    const deleteProduct = (event) => {
        // Get the ID of the product from the button's dataset
        const productId = event.target.dataset.id;
    
        // Show a confirmation dialog to the user
        const confirmation = window.confirm('Are you sure you want to delete this product?');
    
        // If the user clicks OK, delete the product
        if (confirmation) {
          axiosConfig
            .get('/product/deleteProduct/' + productId)
            .then((resp) => {
              const flag = resp.data;
              //console.log(flag);
              if (flag === 'Invalid token') {
                navigate('/login');
              } else if (flag) {
                alert('Product deleted successfully');
                window.location.reload();
                //navigate('/customer/Dash');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
    };

    const toggleProduct = (event) => {
        // Get the ID of the product from the button's dataset
        const productId = event.target.dataset.id;
        axiosConfig
            .get('/product/toggleProduct/' + productId)
            .then((resp) => {
              const flag = resp.data;
              //console.log(flag);
              if (flag === 'Invalid token') {
                navigate('/login');
              } else if (flag) {
                alert('Product toggled successfully');
                window.location.reload();
                //navigate('/customer/Dash');
              }
              else{console.log(flag);}
            })
            .catch((error) => {
              console.log(error);
            });
    
    };
    
    return(


        <div class="container-xl">
           
   { /* @if (session()->has('msg'))
        <strong><span class="text-success">{{ session()->get('msg') }}</span></strong>
    @endif */}
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Product <b>Management</b></h2>
                    </div>
                    <div class="col-sm-7">
                        <a href="addProduct" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add Product</span></a>
                        <a href="/customer/dash" class="btn btn-secondary"> <span>Customer Dashboard</span></a>
                    </div>
                </div>
            </div>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Detail</th>
                        <th>Status</th>
                        <th>Actions</th>
                      
                    </tr>
                </thead>
                <tbody>
                {products.map(product=>(
                    <tr >
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.details}</td>
                        <td>{product.details}</td>
                        <td>{product.status}</td>
                        <td>
                            <div><button href="">Edit</button></div>
                            <div><button onClick={toggleProduct} data-id={product.id}>Toggle</button></div>
                            <div><button onClick={deleteProduct} data-id={product.id}>Delete</button></div>                        
                        </td>

                    </tr>
                ))} 
                  {/* @foreach($products as $product)
                    <tr>
                        <td>{{$product->id}}</td>
                        <td>{{$product->name}}</td>
                        <td>{{$product->price}}</td>
                        <td>{{$product->category}}</td>
                        <td>{{$product->details}}</td>
                        <td @if ($product->status=="available")
                            bgcolor="lime"
                            @elseif ($product->status=="unavailable")
                            bgcolor="red"
                            @else
                            bgcolor="yellow"
                        @endif>{{$product->status}}</td>
                        {{-- <td>{{$product->photo}}</td> --}}
                        <td>
                            <a href="editProduct/{{$product->id}}" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="deleteProduct/{{$product->id}}" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                            <a href="productStatusTogg/{{$product->id}}" class="rent" title="Rent On/Off" data-toggle="tooltip"><i class="material-icons">&#xe982;</i></a>
                        </td>
                    </tr>
                    @endforeach */}
                </tbody>
            </table>
        </div>
        </div>
    </div>

      
    )
}
export default Product;