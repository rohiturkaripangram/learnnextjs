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
      <h1>Product List</h1>
      {
        products.map(element=><li className="list-none">
            <h3> <b>Name:{element.title}</b></h3>
        </li>)
      }
    </div>
  );
}
