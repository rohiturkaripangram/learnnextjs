"use client";
import Link from "next/link";

const Login = () => {
  return (
    <div className='text-center'>
      <h1 className="font-bold  mt-6 text-2xl text-yellow-500 mb-6">Login page</h1>
      <Link href="/" className="border-solid border-2 border-indigo-600 p-2 rounded-lg cursor-pointer">Go to Home page</Link>
    </div>
  );
};

export default Login;
