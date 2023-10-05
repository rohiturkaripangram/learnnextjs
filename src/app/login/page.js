"use client"
import Link from "next/link"
import {useRouter} from 'next/navigation'

const Login=()=>{
    const router=useRouter();
    return(
        <div>
        <h1 className="font-bold">Login page</h1>
        <Link href="/">Go to Home page</Link>
        <br/>
        <button onClick={()=>router.push("/login/loginstudent")}>Go to student login page</button>
        <br/>
        <button onClick={()=>router.push("/login/loginteacher")}>Go to Tecaher login page</button>
        </div>
    )
}

export default Login;