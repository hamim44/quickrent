import React, {Components} from "react";
import { Link } from "react-router-dom";
import './Firstpage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Firstpage = () => {
    return(
        <div className="Head" >
            <div className="Head-left-side">
             <div className="topnav">
             <Link to="" className="active">Home</Link> 
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
             <Form className="d-flex">
                <div className="search-container">
                   <input type="text" placeholder="....." name="search"></input>
                   <Button variant="outline-success">Search</Button>

                </div>
              </Form>
                <div className="login">
      
                   <Link to="/registration"><i className="fa fa-fw fa-user"></i> Registration</Link>
                   <Link to="/login"><i className="fa fa-user"></i> Login</Link>
                </div>            
            </div>
       </div> 

       <div className="contact">
           <div className="rt-container">
                <div className="col-rt-12">
                    <div className="Scriptcontent">
            
           
                          <div className="container">
                                 <div className="contact-parent">
                                      <div className="contact-child child1">
                                            <p>
                                               <i className="fas fa-map-marker-alt"></i> Address <br />
                                                <span> Dhaka
                                                   <br />
                                                   bangladesh
                                                </span>
                                            </p>

                                            <p>
                                                 <i className="fas fa-phone-alt"></i> Let's Talk <br />
                                                 <span> 0787878787</span>
                                            </p>

                                            <p>
                                                <i className=" far fa-envelope"></i> General Support <br />
                                                <span>contact@example.com</span>
                                            </p>
                                        </div>

                                        <div className="contact-child child2">
                                                <div className="inside-contact">
                                                    <h2>Contact Us</h2>
                                                    <h3>
                                                        <span id="confirm"></span>
                                                    </h3>
                          
                                                    <p>Name *</p>
                                                    <input id="txt_name" type="text" Required="required"></input>

                                                    <p>Email *</p>
                                                    <input id="txt_email" type="text" Required="required"></input>

                                                    <p>Phone *</p>
                                                    <input id="txt_phone" type="text" Required="required"></input>

                                                    <p>Subject *</p>
                                                    <input id="txt_subject" type="text" Required="required"></input>

                                                    <p>Message *</p>
                                                    <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
                                                    
                                                     <input type="submit" id="btn_send" value="SEND"></input>
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

export default Firstpage;