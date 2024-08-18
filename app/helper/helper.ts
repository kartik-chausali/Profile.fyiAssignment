import fs from 'fs'
export function getCart(){
    const cart = fs.readFileSync('cart.json');
    return JSON.parse(cart.toString());
}

export function writeCart(product:any){
    fs.writeFileSync('cart.json', JSON.stringify(product, null, 2));
}