"use client"
import { useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";
import CartContext, { CartProvider } from "@/app/CartContext";

export default function Landing(){

  
    const [cart, setCart] = useState()
    return <CartProvider>
    <div>
      <Header/>
      <Banner/>
      <Products  />
    </div>
    </CartProvider>
}