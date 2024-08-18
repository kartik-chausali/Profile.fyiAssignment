"use client"
import React, { useState } from "react";
import { createContext } from "vm";

 const TotalContext = createContext({total:0, setTotal:(val:number)=>{}})

export function TotalContextProvider({children}:{children:React.ReactNode}){
    const[total, setTotal] = useState(1);
    return <TotalContext.Provider value={{total, setTotal}}>
        {children}
    </TotalContext.Provider>
}

export default TotalContext;