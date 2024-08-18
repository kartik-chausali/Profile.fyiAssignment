"use client"
import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Create a context for the cart
// const[dummycart, setdummy] = useState(0)
async function getCart() {
   const response = await axios.get('https://profile-fyi-assignment-three.vercel.app/api/cart');
   return response.data;
}
const CartContext = createContext({ cart: 0, setCart: (value: number) => {} });

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState(0);
    useEffect(()=>{
        axios.get('https://profile-fyi-assignment-three.vercel.app/api/cart')
        .then(response => setCart(response.data))

    },[])
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use the Cart context
// export function useCart() {
//     return useContext(CartContext);
// }
export default CartContext