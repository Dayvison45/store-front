import { useEffect } from 'react'
import axios from 'axios'
import './index.css'
import { useState } from 'react'



export default function Profile(){
const [e,sete]= useState([])


function excluir(e){
console.log('excluindo')

const token = sessionStorage.getItem('token')
    const name = sessionStorage.getItem('name') 
if(name && e.length>0){

  axios.post('https://store-dayvison.herokuapp.com/updatecart',{name:name,item:e,headers:{"Authorization":`Bearer ${token}`}})
  sessionStorage.setItem("cart",e)
  
  }}

const changepass = async(e)=>{
  e.preventDefault()
  await axios.post('https://store-dayvison.herokuapp.com/login')
}
  const name = sessionStorage.getItem('name')
 
  
useEffect(()=>{
  const token = sessionStorage.getItem('token')

    axios.get(`http://localhost:3001/getcart/${name}` ,{body:{name:name},headers:{
    'authorization': `Bearer ${token}` }}).then(response=>sete(response.data.cart))
     
  })
    return(<>
    <section className='bodyp'>

    <div className='profile'>
       <h1 className='nameP'>hello {name}</h1> 
        <section className='list'><div></div>

  <span>
    <p className='title-profile'>produtos no carrinho</p>
   {e.length>0?<ul className='listp'>
    {e.map((e)=><li className='cartli'><img width='50vh' src={e.backdrop} alt="foto" /><span  className>{e.name} <br />{e.value}</span><img className='trash' src='https://cdn-icons-png.flaticon.com/512/2603/2603105.png' id={e._id} onClick={(e)=>excluir(e.target.id)} alt='trash' width='30px' /></li>
)}
  
</ul>:'vazio'} 
  </span>

        </section>
      <button>editar a senha</button>
<form onSubmit={changepass} className='inputs'> <label className='labelp'>senha atual</label>
        <div className='passenter'>
        <input required type="text" className='currentpass' name="" id="" />
        </div>
        <label className='labelp'>nova senha</label>
        <div className='cpass'><input required className='currentpass' type="text" /></div>
        <label className='labelp'>confirme a senha</label>
        <div className='cpass'><input required className='currentpass' type="text" />
        </div>
        <input type='submit' value="Redefinir senha" />
    </form>
    </div>
       
    </section></>)
}
