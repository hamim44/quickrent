import React, {Customer} from "react";
import { Link } from "react-router-dom";
import './Dash.css';
import Customermanu from "./Customermanu";
const Dash = () => {
    

    return(
        
       <div className="">

                 <Customermanu/>
                 <div className="section">
           
                 <div className="section-header">
                             <h1>HomePage</h1>
                 </div>
                 <div className="section-btn"> 


                 <script>
                    {/* <link>        </link> */}
                 </script>
                        <a href="/product/product"><button type="submit" className="btn btn-primary btn-lg btn-bloc">
                                  My Products </button></a> <br></br>
                        <a href="/product/rentProduct"><button type="submit" className="btn btn-primary btn-lg btn-bloc">
                                 Rent Products </button></a><br></br>
                        <a href="/orderlist/myorders"><button type="submit" className="btn btn-primary btn-lg btn-bloc">
                                 my Order</button></a>


                 </div>
                 </div>
 
        </div>



    );
}

export default Dash;