import { useEffect, useState } from 'react'

import axios from 'axios'
import './index.css'

export default function Login(){
const [data,setdata] = useState({})

const [pass,setpass] = useState('')
const [name,setname] = useState('')
const handleSub = async(e)=>{

 e.preventDefault()
 await axios.post('https://store-dayvison.herokuapp.com/login',{name:name,password:pass}).then((response)=>setdata(response))


}
useEffect((()=>{   if(data.status){ if(data.status ===200){
   sessionStorage.setItem('name', data.data.user.name);
   sessionStorage.setItem('token', data.data.token);
   sessionStorage.setItem('like', data.data.user.like);
   sessionStorage.setItem('cart', data.data.user.cart);
   window.location.replace('https://store-front-lac.vercel.app/home')

 }else{console.log(data.data) }}}),[data])

  



return(<section className='containerl'>
    <form onSubmit={handleSub} className="login">
        <h1 className='labell'>LOGIN</h1>
        <label className='labell'   htmlFor="name">NAME</label>
        <input className='input-log' onChange={(e)=>setname(e.target.value)} value={name} required type="text" name="name" />
        <label className='labell' htmlFor="password">PASSWORD</label>
        <input className='input-log' type="password" onChange={(e)=>setpass(e.target.value)} value={pass} required name="password" />
        <input className='loginSubmit'  type="submit" value="ENTRAR" />
        <a href='/subscribe'>Subscribe</a>
        </form>
    </section>)
}
