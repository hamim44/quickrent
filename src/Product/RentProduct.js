import React, {Components} from "react";
import { Link } from "react-router-dom";
import './rentProduct.css';
<Link src="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></Link>;
<Link src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></Link>;
<Link src="https://fonts.googleapis.com/icon?family=Material+Icons"></Link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;
<Link src="https://fonts.googleapis.com/icon?family=Material+Icons"></Link>;




const RentProduct = () =>{


    return(

       

    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Borrow <b>Product</b></h2>
                    </div>
                    <div className="col-sm-7">
                       
                        <a href="/customer/dash" className="btn btn-secondary"> <span>Customer Dashboard</span></a>
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
                        <th>Photo</th>
                         
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>1</td>
                       {/* <td><a href="#"><img src="#" > </img> Michael Holz  </a></td>*/}
                        <td>04/10/2013</td>
                        <td>Admin</td>
                        <td><span className="status text-success"></span> Active</td>
                        <td>
                            <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                        </td>
                    </tr>
                   
                   {/*<tr>
                        <td>{{$product->id}}</td> 
                        <td>{{$product->name}}</td>
                        <td>{{$product->price}}</td>
                        <td>{{$product->category}}</td>
                        <td>{{$product->details}}</td>
                        <td><img src="#" alt="" style="max-width: 200px; m-height: 110px;"></td>
                        <td>
                            <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                        </td>
                      </tr>*/}
                    
                </tbody>
            </table>




        </div>
    </div>

)
}

export default RentProduct;  