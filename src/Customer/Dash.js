import React, {Customer} from "react";
import { Link } from "react-router-dom";
import './Dash.css';
import Customermanu from "./Customermanu";


const Dash = () => {
    

    return(
        
       <div className="">

                 <Customermanu/>
           
                <div className="">
                    <h1> HomePage</h1>
                 </div>
                 <div className="section-btn"> 


                 <script>
                    {/* <link>        </link> */}
                 </script>
                        <a href="/"><button type="submit" className="btn btn-primary btn-lg btn-block">
                                  My Products </button></a> <br></br>
                        <a href="/"><button type="submit" className="btn btn-primary btn-lg btn-block">
                                 Rent Products </button></a><br></br>
                        <a href="/"><button type="submit" className="btn btn-primary btn-lg btn-block">
                                 my Order</button></a>


                 </div>
 
        </div>



    );
}

export default Dash;