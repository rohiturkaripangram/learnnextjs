"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (routename) => {
    router.push(routename);
  };
  return (
    <div>
     
        
        <ul className='list-none flex justify-center items-center gap-10 p-4 bg-slate-700 text-white'>
          <li>
            <Link href="/login">Go to Login page</Link>
          </li>
          <li>
            {" "}
            <Link href="/about">Go to About page</Link>
          </li>
          <li>
            {" "}
            <Link href="/productlist">Go to product page</Link>
          </li>
        </ul>
      
    </div>
  );
}
