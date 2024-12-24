'use client';
import {ReactNode} from "react";
import {useState} from "react";
export  default function TestTemplate({children}: {children:ReactNode}) {
    const [count,setCount]=useState(0);

    return (
        <div className="border-2 border-dashed border-black p-4 mx-auto">
            <h2>Text Template</h2>
            <button className="bg-black text-white p-2 my-2 rounded-md"
                    onClick={()=>setCount(count + 1)}>Increment{count}</button>
            {children}
        </div>

    )

}