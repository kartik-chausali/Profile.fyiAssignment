"use client"
import React from "react"
import {useState} from 'react'
import Header from "./Header";

export default function CartManager({children}:{
    children:React.ReactNode
}){

    const [cartValue, setCartValue] = useState(0);

    const addToCart = () => {
    console.log("function called");
    setCartValue(cartValue + 1);
  };

  //cartValue={cartvalue}
  return (
    <>
      <Header />
      {React.cloneElement(children as React.ReactElement, { addToCart })}
    </>
  )
}

