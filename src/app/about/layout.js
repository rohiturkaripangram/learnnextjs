import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="list-none flex justify-center items-center gap-10 p-4 bg-slate-700 text-white">
        <li>
          <Link href="/about">main About page</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">Go to about college page</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">Go to about student page</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}
