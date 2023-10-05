'use client'

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"

const About = () => {
    const router=useRouter();
    const navigate=(routername)=>{
        router.push(routername)
    }
  return (
    <div className='text-center'>
     <h1 className="font-bold  mt-6 text-2xl text-yellow-500 mb-6">This is About page</h1>
     <Link href="/" className="border-solid border-2 border-indigo-600 p-2 rounded-lg cursor-pointer">Go to HomePage</Link>
      
      


    </div>
  );
};

export default About;
