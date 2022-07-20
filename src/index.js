import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter, Routes,Route,} from "react-router-dom"
import Login from './login/Login'
import Subscribe from './subscribe/Subscribe'  
import Profile from './profile/Profile' 
import CartContextProvider from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<App/>} />
      <Route path="login" exact element={<Login/>} />
      <Route path="subscribe" exact element={<Subscribe/>} />
      <Route path="profile" exact element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  </CartContextProvider>
);

