"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <div className='text-center'>
      <h1 className='mb-4'>Product List</h1>
      <Link href="/" className="border-solid border-2 border-indigo-600 p-2 rounded-lg cursor-pointer">Go to Home page</Link>
      </div>

      <ul className="flex justify-center items-center flex-wrap max-w-screen-2xl gap-6 mt-4">
        {productData.map((element) => (
          <div
            style={{ height: "400px" }}
            className="max-w-xs border border-indigo-600  "
          >
            <img className=" max-w-xs w-full" src={element.thumbnail} alt />
            <div>
              <p>{element.title}</p>

              <p>Price: {element.price}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
