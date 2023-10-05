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
    <div>
      <h1>About</h1>
      <Link href="/">Go to Home page</Link>
      <br/>
      <Link href="/about/aboutcollege">Go to about college page</Link>

<br/>
<Link href="/about/aboutstudent">Go to about student page</Link>
<br/>
  <button onClick={()=>navigate("about/aboutcollege")}>College</button>
  <button onClick={()=>navigate("about/aboutstudent")}>Student</button>

    </div>
  );
};

export default About;
