import CartContext from"../app/CartContext"
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";



export default  function Header(){
   
    // const [cart, setCart] = useState(0);
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/api/cart')
    //     .then(response => setCart(response.data))
    // },[])

    const {cart} = useContext(CartContext)
    console.log("logging cart", cart);
    return  <div className="border-b-2 bg-slate-400 h-20 flex items-center justify-between">
            <div className="ml-2">
                <h1 className="font-bold text-black text-xl">Ecommerce</h1>
            </div>
            
            <div className=" flex justify-center items-center mr-4">

            <Link href={`/cart`} prefetch={false}>
              <button type="button" className="relative inline-flex  items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart}</div>
    </button>
    </Link>

    </div>
       
    </div>
   
    
}