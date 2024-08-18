"use client"
import AlsoBought from "@/components/AlsoBought";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";
import ProductCard from "@/components/ProductCard"
import { Product } from "@/components/Products"
import axios from "axios"
import {  useEffect, useState } from "react"
import { TotalContextProvider } from "../TotalContext";

    // async function getCart(){
    //    const response = await axios.get('http://localhost:3000/api/product');
    //    return response.data;
    // }
export default function Cart(){
    // const products = await getCart();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        axios.get('https://profile-fyi-assignment-three.vercel.app/api/product')
        .then((response)=>setProducts(response.data))
       
    },[])

   useEffect(()=>{
    let total = 0;
    products.map((product:any)=>{
        total += product.price;
    })
    setIncreasedTotal(total)
   },[products])
    const[increasedTotal, setIncreasedTotal] = useState(1);
            return  <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
              <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    {
                        products.map((product:any)=>{
                            return <CartItem key={product.id} product={product} increasedTotal = {increasedTotal} setIncreasedTotal={setIncreasedTotal}/>
                        })
                    }
                <AlsoBought/>
                  </div>
               
                </div>    

          <CartTotal increasedTotal = {increasedTotal} setIncreasedTotal={setIncreasedTotal} />

              </div>
            </div>
          </section>
         
}
      


