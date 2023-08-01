"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menu, setMenu] = useState(false)


  return (
    <>
    <aside className={`lg:hidden z-10 text-right flex flex-col 
    h-screen w-[300px] fixed right-0 top-0 p-14 justify-around
     bg-sky-800
      transition-all
      ${menu ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <Link href={'/'}
        onClick={() => setMenu(false)}
          className="text-white font-bold text-lg hover:text-sky-500 transition-colors"
        >
          Inicio
        </Link>

        <Link href={'/about'}
          onClick={() => setMenu(false)}
          className="text-white font-bold text-lg hover:text-sky-500 transition-colors"
        >
          Sobre mi
        </Link>

        <Link href={'/'}
          onClick={() => setMenu(false)}
          className="text-white font-bold text-lg hover:text-sky-500 transition-colors"
        >
          Contacto
        </Link>
      </aside>
    <header className=" sticky top-0 flex p-5 justify-between bg-gradient-to-br from-sky-100 to-sky-500">
      <h1 className="text-2xl text-white font-bold">EminatarenX</h1>
      
      

      <nav className="lg:flex gap-10 items-center hidden">
        <Link href={'/'}
          className="text-white font-bold text-lg hover:text-sky-800 transition-colors"
        >
          Inicio
        </Link>

        <Link href={'/about'}
          className="text-white font-bold text-lg hover:text-sky-800 transition-colors"
        >
          Sobre mi
        </Link>

        <Link href={'/'}
          className="text-white font-bold text-lg hover:text-sky-800 transition-colors"
        >
          Contacto
        </Link>
      </nav>
    </header>
      <button className="lg:hidden z-20 fixed right-5 top-5 "
        onClick={() => setMenu(!menu)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>


      </button>
    </>
  )
}
