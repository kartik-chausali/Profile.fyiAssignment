import { useParams } from "next/navigation";
import { NextResponse , NextRequest} from "next/server";
import {getCart, writeCart} from '../../../helper/helper'
import { Product } from "@/components/Products";



export function DELETE(req:NextRequest, {params}:{params: {id:string}}){
    const products = getCart();
    const id = parseInt(params.id);
   
    const newCart = products.filter((product: {product : Product, id:string}) => parseInt(product.id) !== id);
  
    if(newCart.length !== products.length){
        writeCart(newCart);
        return NextResponse.json({
            msg:"Item removed from cart"
        })
    }else{
        return NextResponse.json({
            msg:"Item not found in cart"
        })
    }
}