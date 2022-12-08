import React, {Customer} from "react";
import { Link } from "react-router-dom";
import Customermanu from "../Customer/Customermanu";


const Editprofile = () =>{

    return (
        <div>
            <Customermanu/>
            
        <div className="main-content">
         <div className="section">
        <div className="section-header">
            <h1>Edit Profile</h1>
        </div>
        <div className="section-body">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form>
                               
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="#" alt="" className="profile-photo w_100_p"></img>
                                        <input type="file" className="form-control mt_10" ></input>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="mb-4">
                                            <label className="form-label">Name *</label>
                                            <input type="text" className="form-control" ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Email *</label>
                                            <input type="text" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Phone</label>
                                            <input type="text" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Country</label>
                                            <input type="text" className="form-control" ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">zip</label>
                                            <input type="number" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Retype Password</label>
                                            <input type="password" className="form-control"  ></input>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label"></label>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

        </div>

    );




}

export default Editprofile;  