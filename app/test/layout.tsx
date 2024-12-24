'use client';
import Link from 'next/link';
import {ReactNode} from "react";
import {useState} from "react";
import {usePathname} from "next/navigation";
import Header from '@/app/components/header'
export  default function TestLayout({children}: {children:React.ReactNode}) {
    const [count,setCount]=useState(0);
    const pathname = usePathname()
    console.log(pathname);
    return (
        <div>
            <Header></Header>

        </div>


    )

}