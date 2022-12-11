import React, {Customer} from "react";
import { Link } from "react-router-dom";
import Customermanu from "../Customer/Customermanu";
import '../Customer/Editprofile.css';



const Editprofile = () =>{

    return (
        <div>
            <Customermanu/>

            <header >
	<div class="wrapper">
		<div class="edit">
			<h1>Edit profile</h1>
		</div>
		<div class="home">
			<a href="#">HOME</a>
		</div>
	</div>
</header>

<h2>Edit Your Details</h2>

<section class="edit_form">
<div class="wrapper2">
	<div class="form">
	<div class="f_name">
		<label for="name">Name: </label>
		<input type="text" name="" placeholder="Enter your name"/>
	</div>
	<div class="f_email">
		<label for="email">Email: </label>
		<input type="email" name="" placeholder="Ex:abc@gamil.com"/>
	</div>
	<div class="f_phone">
		<label for="phone">Phone: </label>
		<input type="number" name="" placeholder="+8801......."/>
	</div>
	<div class="f_country">
		<label for="country">Country: </label>
		<input type="country" name="" placeholder="Enter your country name"/>
	</div>
	<div class="f_address">
		<label for="address">Address: </label>
		<input type="text" name="" placeholder=" Your address"/>
	</div>
	<div class="f_city">
		<label for="city">City: </label>
		<input type="text" name="" placeholder="Enter your city name"/>
	</div>
	<div class="f_state">
		<label for="state">State: </label>
		<input type="text" name="" placeholder="Your state"/>
	</div>
	<div class="f_zip">
		<label for="zip">Zip: </label>
		<input type="text" name="" placeholder="Ex:1629"/>
	</div>
	<div class="f_pass">
		<label for="password">Password: </label>
		<input type="password" name="" placeholder="Enter your password"/>
	</div>
	<div class="f_repass">
		<label for="password">Re-Type password: </label>
		<input type="password" name="" placeholder="Enter your re-type password"/>
	</div>
	<div class="f_btn">
		<a class="button" href="#">Update</a>
	</div>
	</div>
</div>
</section>
            
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