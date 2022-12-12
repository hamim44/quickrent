import React, {Customer} from "react";
import Customermanu from "../Customer/Customermanu";
import '../Customer/Editprofile.css';
import {useState, useEffect} from "react";
import axiosConfig from "../Components/axiosConfig";
import { useNavigate } from "react-router-dom";


const Editprofile = () =>{
    const navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [cPassword, setCPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [country, setCountry] = useState("");
    let [address, setAddress] = useState("");
    let [state, setState] = useState("");
    let [city, setCity] = useState("");
    let [data, setData] = useState("");
    //let [photo, setPhoto] = useState(null);
    let [zip, setZip] = useState("");
    useEffect(()=>{
       //alert("hello");
        axiosConfig.get("profileData")
        .then(resp=>{
        console.log(resp.data);
           var data = resp.data;
           setName(data.name)
           setEmail(data.email) 
           setPhone(data.phone)
           setCountry(data.country) 
           setAddress(data.address) 
           setState(data.state) 
           setCity(data.city) 
           setZip(data.zip)          
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    const editProfileSubmit= ()=>{
        if(name==""){
            alert('name can not be empty');
          }
          else if(email==""){
            alert('email can not be empty');
          }
          else if(phone==""){
            alert('phone can not be empty');
          }
          else if(country==""){
            alert('country can not be empty');
          }
          else if(address==""){
            alert('address can not be empty');
          }
          else if(state==""){
            alert('state can not be empty');
          }
          else if(city==""){
            alert('city can not be empty');
          }
          else if(zip==""){
            alert('zip can not be empty');
          }
          else if(password!=""){
            if(password!=cPassword){
                alert("password and confirm password must be same")
            }
          }
          else{
            var obj = {name: name, email: email, phone: phone, country: country, address: address, state: state, city: city, zip: zip, password: password};
            console.log(obj);
            axiosConfig.post("editProfile",obj)
            .then(resp=>{
                var flag = resp.data;
                //console.log(flag);            
                if(flag == "Invalid token"){
                    navigate('/login');
                }else if(flag){
                    alert("profile updated successfully")
                    //navigate('/customer/Dash');
                }
            }).catch(err=>{
                console.log(err);
            });
        }
        
    }

    return (
        <div>

            <div><Customermanu/></div>

          
	

<h2>Edit Your Details</h2>
<div></div>
<div class="wrapper2">
	<div class="form">
	<div class="f_name">
		<label  htmlFor="name">Name: </label>
		<input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
	</div>
	<div class="f_email">
		<label  htmlFor="email">Email: </label>
		<input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
	</div>
	<div class="f_phone">
		<label  htmlFor="phone">Phone: </label>
		<input type="number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
	</div>
	<div class="f_country">
		<label  htmlFor="country">Country: </label>
		<input type="text" name="country" value={country} onChange={(e)=>setCountry(e.target.value)}></input>
	</div>
	<div class="f_address">
		<label  htmlFor="address">Address: </label>
		<input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
	</div>
	<div class="f_city">
		<label  htmlFor="city">City: </label>
		<input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)}></input>
	</div>
	<div class="f_state">
		<label  htmlFor="state">State: </label>
		<input type="text" name="state" value={state} onChange={(e)=>setState(e.target.value)}></input>
	</div>
	<div class="f_zip">
		<label  htmlFor="zip">Zip: </label>
		<input type="text" name="zip" value={zip} onChange={(e)=>setZip(e.target.value)}></input>
	</div>
	<div class="f_pass">
		<label  htmlFor="password">Password: </label>
		<input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)} ></input>
	</div>
	<div class="f_repass">
		<label  htmlFor="password">Re-Type password: </label>
		<input type="password" name="cPassword"  onChange={(e)=>setCPassword(e.target.value)}></input>
	</div>
	<div class="f_btn">
		<button class="btn btn-primary" type="button"  onClick={editProfileSubmit}>Save changes</button>
	</div>
	</div>
</div>
            
            {/* <div class="container-xl px-4 mt-4">
    
    <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"  target="__blank">Notifications</a>
    </nav>
    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
           
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                   
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    
                    <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
           
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                       
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Organization name</label>
                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
                            </div>
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA"/>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div>
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> */}

        </div>

    );
}

export default Editprofile;  