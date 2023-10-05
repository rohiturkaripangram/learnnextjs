'use client'
export default function ProductBtn({price}){
    return(
        <div>
              <button onClick={()=>alert(price)} className="border-solid border-2 border-indigo-400 p-1 rounded-lg cursor-pointer mb-4" >Check Price</button>
        </div>
    )
}