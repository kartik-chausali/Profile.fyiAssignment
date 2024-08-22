"use client"
import AlsoBought from "@/components/AlsoBought";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";
import ProductCard from "@/components/ProductCard"
import { Product } from "@/components/Products"
import { cartTotal} from "@/store/atoms/cart";
import axios from "axios"
import { env } from "process";
import {  useEffect, useState } from "react"
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

    // async function getCart(){
    //    const response = await axios.get('http://localhost:3000/api/product');
    //    return response.data;
    // }
export default function Cart(){
    // const products = await getCart();
    const [products, setProducts] = useState<Product[]>([]);
    const setCartTotal = useSetRecoilState(cartTotal)
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`/api/product`);
                let total = 0;
                response.data.map((product:any)=>{
                    total += product.price;
                })
                setCartTotal(total);
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };

        fetchProducts();
       
    },[])

//    useEffect(()=>{
//     let total = 0;
//     products.map((product:any)=>{
//         total += product.price;
//     })
//     setIncreasedTotal(total)
//    },[products])
//     const[increasedTotal, setIncreasedTotal] = useState(1);

        // const [increasedTotal, setIncreasedTotal] = useRecoilState(cartTotal);

            return  <RecoilRoot>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
              <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    {
                        products.map((product:any)=>{
                            return <CartItem key={product.id} product={product} />
                        })
                    }
                <AlsoBought/>
                  </div>
               
                </div>    

          <CartTotal/>

              </div>
            </div>
          </section>
          </RecoilRoot>
}
      


