import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios"; 
export const CartContext=createContext()

export default function CartContextProvider({children}){

    
const [cart,setcart] = useState([])
const [total,settotal] = useState([])
useEffect(()=>{

    const token = sessionStorage.getItem('token')
    const name = sessionStorage.getItem('name') 
    if(name && cart.length>0){

axios.post('https://store-dayvison.herokuapp.com/updatecart',{name:name,item:cart,headers:{"Authorization":`Bearer ${token}`}})
sessionStorage.setItem("cart",cart)

}
},[cart])

useEffect(()=>{
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].value;
    }
    settotal(sum)


},[cart])


return(<CartContext.Provider value={[cart,setcart,total]}>{children}</CartContext.Provider>)}
