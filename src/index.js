import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Firstpage from './Components/Firstpage';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import APIProducts from './Components/APIProducts';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Product from  './Product/Product';
import Dash from  './Customer/Dash';
import Registration from './Components/Registration';
import RentingProduct from './Product/RentingProduct';
import RentProduct from './Product/RentProduct';
import Myorders  from './Orderlist/MyOrders';
import AddProduct from './Product/AddProduct';
import Editprofile from './Customer/Editprofile';
import Forget_password from './Customer/Forget_password';
import axiosConfig from './Components/axiosConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path='' element={<Firstpage />} />
      <Route exact path='/profile' element={<Profile />} />
      <Route exact path='/contact' element={<Contact />} /> 
      <Route exact path='/apiproducts' element={<APIProducts/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/logout' element={<Logout/>} />
      <Route exact path='/product/Product' element={<Product/>} />
      <Route exact path='/customer/Dash' element={<Dash/>} />
      <Route exact path='/registration' element={<Registration/>} />
      <Route exact path='/Product/RentingProduct' element={<RentingProduct/>} />
      <Route exact path='/Product/RentProduct' element={<RentProduct/>} />
      <Route exact path='/Orderlist/MyOrders' element={<Myorders/>} />
      <Route exact path='/Product/AddProduct' element={<AddProduct/>} />
      <Route exact path='/Customer/Editprofile' element={<Editprofile/>} />
      <Route exact path='/Customer/Forget_password' element={<Forget_password/>} />
      <Route exact path='/Components/axiosConfig' element={<axiosConfig/>} />
      </Routes>
     
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
