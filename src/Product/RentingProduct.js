import React, {Components} from "react";
import { Link } from "react-router-dom";
import './rentingProduct.css';
import Customermanu from "../Customer/Customermanu";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>;
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>;
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;




const RentingProduct = () =>{


    return(

        
      

    <div className="main-content">

          <Customermanu/>
       <div className="section">
        <div className="section-header">
            <h1>Rent this Product </h1>
        </div>
        <div className="page-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        
                        <h1>Product Info</h1>
                            <div className="rentProduct-form">
                               
                               
                                <div className="mb-3">
                                    <label form="#" className="form-label" >Product Name</label>
                                    <input type="text" className="form-control"></input>
                                    
                                </div>
                                <div className="mb-3">
                                    <label form="#" className="form-label" >Product price</label>
                                    <input type="number" className="form-control" ></input>

                                    
                                </div>
                                <div className="mb-3">
                                    <label form="#" className="form-label" >Product category</label>
                                    <input type="text" className="form-control"></input>
                                    
                                </div>
                                <div className="mb-3">
                                    <label form="#" className="form-label">Product details</label>
                                    <input type="text" className="form-control" ></input>
                                  
                                </div>
                                <div >
                                    <img src="#" ></img>
                                </div>
                                <br></br>
                                <h1>Owner Info</h1>
                                <div className="col-md-9">
                                    <div className="mb-4">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" name="email"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" name="phone"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Country</label>
                                        <input type="text" className="form-control" name="country"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" name="address" readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" name="city"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">State</label>
                                        <input type="text" className="form-control" name="state"  readonly></input>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">zip</label>
                                        <input type="text" className="form-control" name="zip"  readonly></input>
                                    </div>

                                <div className="mb-3">
                                    <a href="#"><button type="submit" className="btn btn-primary btn-lg btn-block">
                                        <h5>Rent Product</h5>
                                    </button></a>
                                </div>
                            </div>
                   
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


        
    )
}

export default RentingProduct;  