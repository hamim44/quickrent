import React, {Customer} from "react";
import { Link } from "react-router-dom";
import Customermanu from "../Customer/Customermanu";




const AddProduct = () => {

    return(
<div>
    <Customermanu/>         
<div className="main-content">
    <div className="section">
        <div className="section-header">
            <h1> Add Product </h1>         
    </div>
        <div className="page-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <form>
                            
                            <div className="addProduct-form">
                               { /*  {{-- <input type="text" className="form-control" name="id" value="{{$product->id}}" hidden> --}} */}
                                <div className="mb-3">
                                    <label for="" className="form-label" >Product Name</label>
                                    <input type="text" className="form-control" name="name"></input>
                                  {/*   @if($errors->has('name'))
                                    <span className="text-danger">{{ $errors -> first('name') }}</span>
                                    @endif*/}
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label" >Product price</label>
                                    <input type="number" className="form-control" name="price"></input>
                                 {/*   @if($errors->has('price'))
                                    <span className="text-danger">{{ $errors -> first('price') }}</span>
                                    @endif*/}
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label" >Product category</label>
                                    <select id="category" className="form-control" name="category">
                                        <ul className="dropdown-menu" aria-labelledby="category">
                                           {/*  @foreach ($categorys as $category)
                                            <li><option value={{$category->name}}>{{$category->name}}</option></li>
                                            @endforeach*/}
                                        </ul>
                                    </select>
                                  {/*   @if($errors->has('category'))
                                    <span className="text-danger">{{ $errors -> first('category') }}</span>
                                    @endif*/}
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Product details</label>
                                    <input type="text" className="form-control" name="details"></input>
                                  {/*   @if($errors->has('details'))
                                    <span className="text-danger">{{ $errors -> first('details') }}</span>
                                    @endif*/}
                                </div>
                                <div className="col-md-3">
                                 {/*    {{-- <img src="{ asset('uploads/'}" alt="" className="profile-photo w_100_p" > --}}
                                    <input type="file"  name="photo">
                                    {{-- <img src="{{ asset('uploads/product/'.$product->photo)}}" alt="" > --}}
                                    {{-- <input type="file" name="photo" > --}}*/}
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary bg-website">Submit</button>
                                </div>
                              {/*   @isset($msg)
                                    <span className="text-success">{{ $msg }}</span>
                                @endisset*/}
                            </div>
                          </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    </div>
    

);
}

export default AddProduct;  
