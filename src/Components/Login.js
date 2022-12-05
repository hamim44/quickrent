import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    let[token, setToken]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        alert (obj.email);
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
        <div>
            <form className='d-flex justify-content-center align-items-center'>

            <div className='w-50'>
          <div className='mb-3 mt-3 w-50 text-center'>
            <h1>Login</h1>
          </div>
          <div className='mb-3 mt-3'>
            <label className='form-label'>Email:</label>
            <input
              type="email"
              className='form-control w-50'
              
              placeholder='Enter email'
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password:</label>
            <input
              type='password'
              className='form-control w-50'
              
              placeholder='Enter password'
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          {/* <button type='submit' className='btn btn-primary' onClick={loginSubmit}>Login</button> */}
        </div>
        

                {/* <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> */}

            </form>
            <div className='d-flex justify-content-center align-items-center'>
            <button type='submit' className='btn btn-primary' onClick={loginSubmit}>Login</button>
            </div>
                {/* <button type='submit' className='btn btn-primary' onClick={loginSubmit}>Login</button> */}
        </div>

    );
};
export default Login;  