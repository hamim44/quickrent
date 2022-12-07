import React, {Components} from "react";
import { Link } from "react-router-dom";
import Customermanu from "../Customer/Customermanu";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>;
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>;
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;


const Product = () => {
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
                 <tr>
                        <td>1</td>
                        
                        <td>04/10/2013</td>
                        <td>Admin</td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                            <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                </tr> 
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