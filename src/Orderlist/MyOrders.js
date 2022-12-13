import React, {Components} from "react";
import { Link } from "react-router-dom";
import './myorders.css';
import {useState, useEffect} from "react";
import Customermanu from "../Customer/Customermanu";
import axiosConfig from "../Components/axiosConfig";
import { useNavigate } from "react-router-dom";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>;
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>;
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;

const Myorders = () => {
    const navigate = useNavigate();
    let[myBorrows, setMyBorrows] = useState("");
    let[myRents, setMyRents] = useState("");

    useEffect(() => {
        axiosConfig.get("orderlist/myOrders")
        .then(resp=>{
            var flag = resp.data;
            console.log(flag);            
            if(flag == "Invalid token"){
                navigate('/login');
            }else {
                setMyBorrows(flag.myBorrows);
                setMyRents(flag.myRents);
            }
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(
      
<div>
    <Customermanu/>
    <div className="container-xl">
        {/* @if (session()->has('msg'))
        <strong><span className="text-success">{{ session()->get('msg') }}</span></strong>
       @endif  */}
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Borrow <b>Management</b></h2>
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
                        <th>Owner id</th>
                        <th>Final price</th>
                        <th>Product id</th>
                        <th>Status</th>
                        <th>Actions</th>
                     
                    </tr>
                </thead>
                <tbody>
                    {myBorrows.map(myBorrow=>(
                        <tr>
                            <td>{myBorrow.id}</td>
                            <td><a href="#"><img src="#" className="avatar" alt="Avatar"></img> {myBorrow.owner_id}</a></td>
                            <td>{myBorrow.final_price}</td>
                            <td> {myBorrow.product_id}</td>
                            <td><span className="status text-success">{myBorrow.status}</span></td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                        </tr>
                    ))} 
                    {/* 
                    @foreach($myBorrows as $myBorrow)
                    <tr>
                        <td>{{$myBorrow->id}}</td>
                        <td>{{$myBorrow->owner_id}}</td>
                        <td>{{$myBorrow->final_price}}</td>
                        <td>{{$myBorrow->product_id}}</td>
                        <td @if ($myBorrow->status=="pending")
                            bgcolor="red"
                            @elseif ($myBorrow->status=="confirm")
                            bgcolor="yellow"
                            @else
                            bgcolor="lime"
                        @endif>{{$myBorrow->status}}</td>
                        <td>
                            <a href="cancelOrder/{{$myBorrow->id}}" className="delete" title="Cancel" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                            {{-- <a href="offerOrderPrice/{{$myBorrow->id}}/{{$price}}" className="offer" title="Offer Price" data-toggle="tooltip"><i className="material-icons">&#xe982;</i></a> --}}
                            {{-- <a href="confirmOrder/{{$product->id}}" className="rent" title="Confirm" data-toggle="tooltip"><i className="material-icons">&#xe982;</i></a> --}}
                        </td>
                    </tr>
                    @endforeach*/}
                </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>

     
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Rent <b>Management</b></h2>
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
                        <th>Borrower name</th>
                        <th>Price</th>
                        <th>Product id</th>
                        <th>Status</th>
                        <th>Actions</th>
                      {/*  {{-- <th>Photo</th> --}}  */}
                    </tr>
                </thead>
                <tbody>
                   <tr>
                        <td>1</td>
                        <td><a href="#"><img src="#" className="avatar" alt="Avatar"></img> Michael Holz</a></td>
                        <td>04/10/2013</td>
                        <td>Admin</td>
                        <td><span className="status text-success"></span> Active</td>
                        <td>
                            <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                        </td>
                    </tr> 
                  {/*  @foreach($myRents as $myRent)
                    <tr>
                        <td>{{$myRent->id}}</td>
                        <td>{{$myRent->borrower_id}}</td>
                        <td>{{$myRent->final_price}}</td>
                        <td>{{$myRent->product_id}}</td>
                        <td @if ($myRent->status=="pending")
                            bgcolor="red"
                            @elseif ($myRent->status=="confirmed")
                            bgcolor="lime"
                            @else
                            bgcolor="yellow"
                        @endif>{{$myRent->status}}</td>
                        {{-- <td>{{$product->photo}}</td> --}}
                        <td>
                            <a href="cancelOrder/{{$myRent->id}}" className="delete" title="Cancel" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                            <a href="confirmOrder/{{$myRent->id}}" className="rent" title="Confirm" data-toggle="tooltip"><i className="material-icons">&#xe982;</i></a>

                        </td>
                    </tr>
                    @endforeach */}
                </tbody>
            </table>

        </div>
        </div>
        </div>

        </div>


    )

}

export default Myorders;


