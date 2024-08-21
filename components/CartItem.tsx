"use client"

import { use, useRef, useState } from "react"
import { Product } from "./Products";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartTotal } from "@/store/atoms/cart";

export default function CartItem({product}:any){
  console.log("cartItem re-rendered")
  const [increasedTotal, setIncreasedTotal] = useRecoilState(cartTotal);

    const quantityRef:any = useRef(1);
    const[price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const[products, setProducts] = useState(product);
    const[visible, setVisible] = useState(true);
    function handleDecrement(){
        quantityRef.current.value--;
        setQuantity(quantity-1);
        let num = price-product.price
        setPrice(num.toFixed(2));
        setIncreasedTotal(increasedTotal-product.price);
    }

    function handleIncrement(){
      quantityRef.current.value++;
      setQuantity(quantity+1);
      setPrice(quantityRef.current.value*product.price)
      setIncreasedTotal(increasedTotal+product.price);
    }

    async function handleRemove(){
        const respose = await axios.delete(`/api/product/${product.id}`)
        setIncreasedTotal(increasedTotal-product.price);
       setVisible(false);
    }

    return visible && <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20 dark:hidden" src={product.image} alt="imac image" />
        <img className="hidden h-25 w-20 dark:block" src={product.image} alt="imac image" />
      </a>

      <label className="sr-only">Choose quantity:</label>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button type="button" onClick={handleDecrement} id="decrement-button" data-input-counter-decrement="counter-input" className={quantity==1?" pointer-events-none":"inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"}>
            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
            </svg>
          </button>
          <input type="text" ref={quantityRef} id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={quantity} required />
          <button type="button" onClick={handleIncrement} id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">{price}</p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product.title}</a>

        <div className="flex items-center gap-4">
          <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>
            Add to Favorites
          </button>

          <button type="button" onClick={handleRemove} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
}