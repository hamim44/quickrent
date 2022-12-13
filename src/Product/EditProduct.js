//import React, {Customer} from "react";
//import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react";
import Customermanu from "../Customer/Customermanu";
import axiosConfig from "../Components/axiosConfig";
import Categorys from "../Components/Categorys"
import { useNavigate } from "react-router-dom";



const Editproduct =() => {
    const { id } = useParams();
    const navigate = useNavigate();
    let[name, setName] = useState("");
    let[price, setPrice] = useState("");
    let[details, setDetails] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        //alert(id);
        axiosConfig.get("product/editProduct/"+id)
        .then(resp=>{
            var flag = resp.data;
            //console.log(flag);            
            if(flag == "Invalid token"){
                navigate('/login');
            }else {
                setName(flag.name);
                setPrice(flag.price);
                setDetails(flag.details);
                setSelectedCategory(flag.category);
            }
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    
    const editProductSubmit= ()=>{
        // if(name==""){
        //     alert('name can not be empty');
        //   }
        //   else if(price==""){
        //     alert('price can not be empty');
        //   }
        //   else if(selectedCategory==""){
        //     alert('category can not be empty');
        //   }
        //   else if(details==""){
        //     alert('details can not be empty');
        //   }
        //   else{
            var obj = {id: id, name: name, price: price, category: selectedCategory, details: details};
            console.log(obj);
            axiosConfig.post("product/editProduct",obj)
            .then(resp=>{                
                var flag = resp.data;
                console.log(flag);            
                if(flag == "Invalid token"){
                    navigate('/login');
                }else if(flag){
                    alert("Product edited successfully");
                    navigate('/product/product');
                }
            }).catch(err=>{
                console.log(err);
            });
        //}
        
    }

    return(
        <div>
        <Customermanu/>


        <div className="main-content">
    <div className="section">
        <div className="section-header">
            <h1>Edit Product</h1>
        </div>
        <div className="page-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <form>
                            
                        <div className="addProduct-form">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label" >Product Name</label>
                                    <input type="text" className="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                                  {/*   @if($errors->has('name'))
                                    <span className="text-danger">{{ $errors -> first('name') }}</span>
                                    @endif*/}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label" >Product price</label>
                                    <input type="number" className="form-control" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                                 {/*   @if($errors->has('price'))
                                    <span className="text-danger">{{ $errors -> first('price') }}</span>
                                    @endif*/}
                                </div>
                                {/* <div className="mb-3">
                                    <label for="" className="form-label" >Product category</label>
                                    <select id="category" className="form-control" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                        <ul className="dropdown-menu" aria-labelledby="category">
                                            <li><option value="none">None</option></li>
                                           {  @foreach ($categorys as $category)
                                            <li><option value={{$category->name}}>{{$category->name}}</option></li>
                                            @endforeach}
                                        </ul>
                                    </select>
                                  {  @if($errors->has('category'))
                                    <span className="text-danger">{{ $errors -> first('category') }}</span>
                                    @endif}
                                </div> */}
                                <div>
                                    <Categorys selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                                    {/* <p>Selected category: {selectedCategory}</p> */}
                                </div>
                                <br/>
                                <div className="mb-3">
                                    <label htmlFor="" className="htmlForm-label">Product details</label>
                                    <input type="text" className="htmlForm-control" name="details" value={details} onChange={(e)=>setDetails(e.target.value)}></input>
                                  {/*   @if($errors->has('details'))
                                    <span className="text-danger">{{ $errors -> first('details') }}</span>
                                    @endif*/}
                                </div>
                                <div className="col-md-3">
                                 {/*    {{-- <img src="{ asset('uploads/'}" alt="" className="profile-photo w_100_p" > --}}
                                    <input type="file"  name="photo">
                                    {{-- <img src="{{ asset('uploads/product/'.$product->photo)}}" alt="" > --}}
                                    {{-- <input type="file" name="photo" > --}}*/}
                                </div>
                                <div className="mb-3">
                                    <button class="btn btn-primary" type="button"  onClick={editProductSubmit}>Submit</button>
                                </div>
                              {/*   @isset($msg)
                                    <span className="text-success">{{ $msg }}</span>
                                @endisset*/}
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    </div>

    );




}


export default Editproduct;