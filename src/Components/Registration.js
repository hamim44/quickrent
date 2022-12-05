import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './registration.css';

const Registration = ()=>{
  let[name, setName] = useState("");
  let[email, setEmail] = useState("");
  let[password, setPassword] =useState("");
  let[confirmPassword, setConfirmPassword] =useState("");
  const navigate = useNavigate();
      
  const regSubmit=()=>{
    var obj = {name: name, email: email, password: password};
    alert(JSON.stringify(obj));
    
  }




return(
    <div className="Auth-form-container">
      <div className="Auth-form-content">
    <form className="Auth-form">
      
        <h3 className="Auth-form-title">Sign Up</h3>

        <div className="form-group mt-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mt-1"
            value={name} onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control mt-1"
            value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </div>
        
        <p className="text-center mt-2">
          Forgot <a href="#">password?</a>
        </p>
        </form>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={regSubmit}>
            Submit
          </button>
        </div>
      </div>
   

        
  </div>



)


}

export default Registration;  
