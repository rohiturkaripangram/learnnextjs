'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Layout({ children }) {
    const pathName=usePathname();
   
  return (
    <div>
       <ul className="list-none flex justify-center items-center gap-10 p-4 bg-slate-700 text-white">
            <li>
              <Link href="/login">Login Main</Link>
            </li>
            <li>
              {" "}
              <Link href="/login/loginstudent">Student Login</Link>
            </li>
    
            <li>
              {" "}
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
          </ul>
      
      {children}
    </div>
  );
}
