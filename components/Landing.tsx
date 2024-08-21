
"use client"
import { RecoilRoot } from "recoil";
import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";


export default function Landing(){
  
    return<div>
        <RecoilRoot>
      <Header/>
      <Banner/>
      <Products  />
      </RecoilRoot>
    </div>
    
}