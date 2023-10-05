'use client'
import Link from "next/link";
export default function Student({params}) {
   console.log(params)
  return (
    <div>
      <h1>Student Details</h1>
      <p>student name:{params.student}</p>
    </div>
  );
}
