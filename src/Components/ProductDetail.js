import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import './Product.css';


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
            <div className="text-p">
                <h1> Product details</h1>


            </div>

       
        
        <div className="table-container">
        
        <Table striped bordered hover size="sm">
      <thead>
        
        <tr>
          
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th> Details</th>
          <th>Status</th>


        </tr>
      </thead>

      <tbody>
      {posts.map(post=>(
                    <tr >
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.price}</td>
                        <td>{post.details}</td>
                        <td>{post.status}</td>

                    </tr>
                ))}



      </tbody>
      </Table>
      </div>
      </div>









        
        
    );

}
export default ProductDetail;



/*
<div>
            {
                
                <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                </tr>
                {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.image}</td>
                    </tr>
                ))}
            </table> }
           { /*
                posts.map(post=>(
                    <Post key={post.id} userId={post.id} name={post.name} price={post.price} photo={post.photo}></Post>
                ))

                */  
        