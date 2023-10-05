'use client'


import styles from "./page.module.css";
import Link from "next/link"
import {useRouter} from 'next/navigation'

export default function Home() {
  const router=useRouter();
  const navigate=(routename)=>{
    router.push(routename)
  }
  return (
    <div>
      <main >
        <h1>Basic Routing </h1>
        <Link href="/login">Go to Login page</Link> <br/>
        <Link href="/about">Go to About page</Link>
        <br/>
        <br/>
        <button onClick={()=>navigate('login')}>
          Go to Login page
        </button>
        <br/>
        <button onClick={()=>navigate('about')}>
          Go to About page
        </button>
      </main>
    </div>
  );
}


