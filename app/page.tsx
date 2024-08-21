
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Products from "@/components/Products";
import axios from "axios";
import Image from "next/image";
import {useRef} from 'react'
import { RecoilRoot } from "recoil";

export default function Home() {
  
  return (
    <div className="bg-gray-900">
    <Landing/>
    </div>
  );
}
