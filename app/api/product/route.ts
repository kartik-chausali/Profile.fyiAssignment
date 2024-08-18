import { NextRequest, NextResponse } from "next/server";
import {getCart, writeCart} from '../../helper/helper'



export async function POST(req:NextRequest){
    const body = await req.json();
    const products = getCart();
    const newProduct ={
        id: body.id,
        title: body.title,
        price : body.price,
        description:body.description,
        quantity:body.quantity,
        rating: body.rating,
        reviews:body.reviews,
        image:body.image
    }
    products.push(newProduct);
    writeCart(products);
    return NextResponse.json({
        msg:"added to cart successfully"
    })
}

export function GET(){
    const products = getCart();
    return NextResponse.json(products)
}

