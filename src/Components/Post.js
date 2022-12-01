import React, {useEffect, useState} from "react";
import './Product.css';

const Post = (props) => {

    const PostStyle = {
        backgroundColor : "#ffffff",
        padding: "10px",
        color: "#fff",
    }
    return(


        <div class="card">
  <img src="{props.photo}" style="width:100%"></img>
  <p>{props.userId}</p>
  <p class="price">{props.Price}</p>
  <p>{props.name}</p>
  <p><button>Add to Cart</button></p>
</div>
      /*  <div style={PostStyle}>
                <table>
                    <tr>
                        <th> Product ID</th>
                        <br></br>
                        <th> Product name</th>
                    </tr>

                    <tr>
                        <td>{props.userId}</td><br></br>
                        <td>{props.name}</td>
                        <td>{props.photo}</td>


                    </tr>


                </table>

        </div>*/
    );

}
export default Post;