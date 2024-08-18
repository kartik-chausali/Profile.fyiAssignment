import { NextResponse } from "next/server";
import {getCart} from '../../helper/helper'
export function GET(){
    const cart = getCart();
    return NextResponse.json(cart.length)
}