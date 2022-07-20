import './App.css';
import { CartContext } from './CartContext';
import React,{ useEffect,useContext,useState } from 'react';
import axios from "axios"
 function Body() {
   
const [data,setdata] = useState([])
const [cart,setcart] = useContext(CartContext)

useEffect(()=>{const run = async () => {
  await fetch('http://localhost:3001/home').then((response)=>response.json()).then(response=>setdata(response))}
run()})
useEffect(()=>{
const token = sessionStorage.getItem('token')
const name = sessionStorage.getItem('name')


  axios.get(`http://localhost:3001/getcart/${name}` ,{body:{name:name},headers:{
  'authorization': `Bearer ${token}` }}).then(response=>setcart(response.data.cart))
  
},[])

  return (
 <section className='body'> {data.length>1?data.map((e)=> <div className="product-card">
  
   <div className="product-tumb">
     <img className='backdrop' src={e.backdrop} alt=""/>
   </div>
   <div className="product-details">
     <span className="product-catagory">Calçados,tenis</span>
     <h4>{e.name}</h4>
     <p className='descprod'>{e.desc}</p>
     <div className="product-bottom-details">
       <div className="product-price"><small >{(e.value*2)}</small>{e.value}   </div>
      
       <div className="product-links">
       
       </div>
     </div>
 <div className='compra'><button onClick={()=>{setcart([...cart,e])}}>carrinho</button></div>
   </div>
 </div>):"carregando"}</section>

  );
}
export default Body;
