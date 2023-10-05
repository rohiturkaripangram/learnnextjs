import Link from "next/link";
export default function StudentList() {
  const data=[
    {
        name:'Rohit'
    }
    ,{
        name:'Aish',
    },{
        name:'Abhi',

    },{
       name:'Rahul'

    }
   ]
  return (
    <div>
      <h1>Student List</h1>
      <ul>

        {
          data.map(element=> <li>
            <Link href={`studentlist/${element.name}`}>{element.name}</Link>
          </li>)
        }
       

       
      </ul>
    </div>
  );
}
