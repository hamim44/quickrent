import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css';
const Login = ()=>{
    let[token, setToken]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        //alert (obj.email);
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.c_id, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(token == "notFound"){
                navigate('/login');
            }else{
                navigate('/customer/Dash');
            }
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
      <div className="Auth-form-container">
                <div className="Auth-form-content">
      <form className="Auth-form">

          <h2 className="Auth-form-title">Log In</h2>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>

          <div className="remember">
             <input type="checkbox"  name="lsRememberMe" />
                <label>Remember me</label>
          </div>

         
          <p className="forgot-password ">
             <a href="#"> Forgot password</a>
          </p>

          <div class="form-group">
              <div>
                <a href="./registration">
                  Create an Account
                </a>
              </div>
           </div>

 
        
          </form>

          
          <div className="d-grid gap-2 mt-3">
            <button onClick={loginSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
    </div>
        </div>
  

     

    );
};
export default Login;  