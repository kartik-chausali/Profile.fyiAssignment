
import axios from "axios";
import { Dispatch, useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export interface Product{
    id:string,
    title:string, 
    price:string, 
    description:string, 
    image:string, 
    rating:{
        rate:number,
        count:number
    }
}
 function getProducts(){
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data;
//  }

 }
export default async function Products(){
    
    // const products = await getProducts();
    const[products, setProducst] = useState<Product[]>()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=> setProducst(response.data))
    },[])
    return <div className="grid grid-cols-3">
     
        {
            products?.map((product:any)=>{
               return  <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} image={product.image} price={product.price} rating={product.rating.rate} reviews={product.rating.count}  />
            })
        }
    </div>
}