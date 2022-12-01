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
import EffectHookCheck from './Components/EffectHookCheck';
import APIProducts from './Components/APIProducts';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Dash from  './Customer/Dash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Firstpage/>
      <Routes>

      <Route exact path='/profile' element={<Profile />} />
      <Route exact path='/contact' element={<Contact />} /> 
      <Route exact path='/product:id' element={<ProductDetail/>} />
      <Route exact path='/effect' element={<EffectHookCheck/>} />
      <Route exact path='/ProductDetail' element={<ProductDetail/>} />
      <Route exact path='/apiproducts' element={<APIProducts/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/logout' element={<Logout/>} />
      <Route exact path='/logout' element={<Logout/>} />
      <Route exact path='customer/Dash' element={<Dash/>} />
      </Routes>
     
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
