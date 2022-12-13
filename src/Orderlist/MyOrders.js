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
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>;
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>;

const Myorders = () => {
    const navigate = useNavigate();
    let[myBorrows, setMyBorrows] = useState([]);
    let[myRents, setMyRents] = useState([]);

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

    function CancelButton(id) {
        return (
          <button
            style={{
              color: 'red',
              fontSize: '16px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => {
                axiosConfig.get("orderlist/cancelOrder/"+id)
                .then(resp=>{
                    var flag = resp.data;
                    console.log(flag);            
                    if(flag == "Invalid token"){
                        navigate('/login');
                    }else {
                        alert(flag);
                        window.location.reload()
                    }
                }).catch(err=>{
                    console.log(err);
                });
            }}
          >
            <i className="material-icons">&#xe5c9;</i>
            Cancel
          </button>
        );
      }

      function AcceptButton(id) {
        return (
          <button 
          style={{
            color: 'green',
            fontSize: '16px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          className="accept-button" 
          onClick={() => {
            axiosConfig.get("orderlist/confirmOrder/"+id)
            .then(resp=>{
                var flag = resp.data;
                console.log(flag);            
                if(flag == "Invalid token"){
                    navigate('/login');
                }else {
                    alert(flag);
                    window.location.reload()
                }
            }).catch(err=>{
                console.log(err);
            });
        }}>
            <i className="material-icons">&#xe5c9;</i>
            Accept
          </button>
        );
      }

    return(
      
<div>
    <Customermanu/>
    <div className="container-xl">       
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
                           {CancelButton(myBorrow.id)}
                            
                        </td>
                    </tr>
                ))}                            
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
                {myRents.map(myRent=>(
                    <tr>
                        <td>{myRent.id}</td>
                        <td><a href="#"><img src="#" className="avatar" alt="Avatar"></img> {myRent.borrower_id}</a></td>
                        <td>{myRent.final_price}</td>
                        <td> {myRent.product_id}</td>
                        <td><span className="status text-success">{myRent.status}</span></td>
                        <td>
                           {CancelButton(myRent.id)}
                           {AcceptButton(myRent.id)}
                            
                        </td>
                    </tr>
                ))}                  
                </tbody>
            </table>

        </div>
        </div>
        </div>

        </div>


    )

}

export default Myorders;


