'use client';
import Link from 'next/link';
import {ReactNode} from "react";
import {useState} from "react";
import {usePathname} from "next/navigation";
export  default function Header() {
    const [count,setCount]=useState(0);
    const pathname = usePathname()
    const linkData = [{
        name:'Performance',href:'/test/performance'
    },{
        name:'Reliability',href:'/test/reliability'
    },{
        name:'Scale',href:'/test/scale'
    },
    ]
    console.log(pathname);
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between gap-4 font-bold text-lg mb-4 text-purple-500 container mx-auto">
                <Link href="/test">Home</Link>
                <div className="space-x-4" >
                    {linkData.map((link)=>(
                        <Link href={link.href} key={link.name}>{link.name}</Link>
                    )
                    )}
                </div>
            </div>
        </div>


    )

}