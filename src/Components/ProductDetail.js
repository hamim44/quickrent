import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

const ProductDetail = () => {

    const [posts, setPosts] = useState ([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/product/rentProduct")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {<table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                </tr>
                {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                    </tr>
                ))}
            </table> }
           { /*
                posts.map(post=>(
                    <Post key={post.id} userId={post.id} name={post.name} price={post.price} photo={post.photo}></Post>
                ))

                */  }
        </div>
    );

}
export default ProductDetail;