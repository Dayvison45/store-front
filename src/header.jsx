import { useContext, useState } from 'react'
import './header.css'
import { CartContext } from './CartContext'
import {Link} from 'react-router-dom'
const axios = require('axios')

export default function Header(){

const [viewcart,setViewcart] = useState(true)
const [cart,setcart,total] = useContext(CartContext) 



let tot = total.toString()


function excluir(e){

let filtered = cart.filter((element)=> element._id !== e)

  setcart(filtered)}
async function  goprofile(){
const name = sessionStorage.getItem('name')
const token = sessionStorage.getItem('token')

let code;
await axios.get(`https://store-dayvison.herokuapp.com/profile/${name}/Bearer ${token}`).then(response=>code = response.status)
if(code !== 200){
console.log('acesso negado')

}else{window.location.replace('https://store-dayvison.herokuapp.com/profile')}}



return(
<section className='header'>
    <span>
    <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
    <Link to="/login">Logar</Link>
    <Link to="/subscribe">Inscrever</Link>
      <li><button className="menu__item" onClick={goprofile}>Profile</button></li>
      <li><p className="menu__item">Home</p></li>
      <li><p className="menu__item">About</p></li>
      <li><p className="menu__item">Team</p></li>
      
    </ul>
  </div>
</span>
<h1 className="title">BlackSmith  </h1>

<span><div  style={viewcart===true?{'visibility':'hidden'}:{'visibility':'visible'}} className='cartview'><ul className='ulheader'>{cart.length>0?cart.map((e)=><li className='cartli'><img height='50vh' src={e.backdrop} alt="foto" /><span  className>{e.name} <br />{e.value}</span><img className='trash' src='https://cdn-icons-png.flaticon.com/512/2603/2603105.png' alt='trash' width='30px' id={e._id} onClick={(e)=>excluir(e.target.id)}/></li>):<p className='text-align:center'>Carrinho Vazio</p>}<div className='total'>{tot.substring(0,6)}</div></ul></div><div className='lengthcart'>{cart.length}</div><img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart" style={{'cursor':'pointer'}} onClick={()=>setViewcart(!viewcart)} height={"30px"} /></span>
<div style={viewcart===true?{'visibility':'hidden'}:{'visibility':'visible'}} onClick={()=>setViewcart(!viewcart)} className='background'></div>
</section>

)

}



