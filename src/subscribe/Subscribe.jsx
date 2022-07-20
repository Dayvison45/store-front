import { useState } from 'react'
import './index.css'
import axios from 'axios'
 function Subscribe(){
const [pass,setpass] = useState('')
const [name,setname] = useState('')
const handleSub =(e)=>{
e.preventDefault()
axios.post('http://localhost:3001/subscribe',{name:name,password:pass}).then(response=>console.log(response))

}
    return(<>
<p className='color:white;'>erro aqui </p>
 <section className='containerl'>
    <form onSubmit={handleSub} className="login">
        <h1 className='labell'>SIGN</h1>
        
        <input className='input-sub' onChange={(e)=>setname(e.target.value)} value={name} placeholder='name' required type="text" name="nome" />
        
        <input className='input-sub' onChange={(e)=>setpass(e.target.value)} value={pass} placeholder='password' required type="password" name="password" />
      
        <input  className='loginSubmit' type="submit" value="SIGN" />
        <a href='/login'>Login</a>
        </form>
        
    </section>
    </>)
}
export default Subscribe