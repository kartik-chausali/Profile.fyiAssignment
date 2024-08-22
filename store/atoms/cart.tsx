import axios from "axios";
import { atom, selector } from "recoil";

export const quantityAtom = atom({
    key:"quantityAtom",
    default:10
})

// export const cartTotalSelector = selector({
//     key:"cartTotalSelector",
//     get: async({get})=>{
//       const response = await axios.get('/api/product');
//       let total = 0;
//       response.data.map((product:any)=>{
//           total += product.price;
//       })
//       return total
//     }
// })

export const cartTotal = atom({
    key:"cartTotal",
    default:0
})