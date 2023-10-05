import Link from "next/link";
import ProductBtn from "./productBtn"
async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
export default async function ProductonServerside() {
   let products=await productList();
   console.log(products)
  return (
    <div>
      <div className='text-center'>
      <h1 className='mb-4'>Product List</h1>
      <Link href="/" className="border-solid border-2 border-indigo-600 p-2 rounded-lg cursor-pointer">Go to Home page</Link>
      </div>
      {
        products.map(element=><li className="list-none">
            <h3> <b>Name:{element.title}</b></h3>
              <ProductBtn price={element.price}/>
        </li>)
      }
    </div>
  );
}
