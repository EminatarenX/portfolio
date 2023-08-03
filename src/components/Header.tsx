"use client"
import Link from "next/link"
import { useState } from "react"
import useApp from "@/hooks/useApp"
export default function Header() {
  const [menu, setMenu] = useState(false)
  const { darkMode, setDarkMode } = useApp()

  return (
    <>
      <aside className={`lg:hidden z-10 text-right flex flex-col 
    h-screen w-[300px] fixed right-0 top-0 p-14 justify-around
    ${darkMode ? 'bg-gray-900 ' : 'bg-gradient-to-br from-sky-800 to-sky-700'}
      transition-all duration-700
      ${menu ? 'translate-x-0' : 'translate-x-full'}
    `}>
        <Link href={'/'}
          onClick={() => setMenu(false)}
          className="text-white font-bold text-2xl hover:text-sky-500 transition-colors"
        >
          Inicio
        </Link>

        <Link href={'/about'}
          onClick={() => setMenu(false)}
          className="text-white font-bold text-2xl hover:text-sky-500 transition-colors"
        >
          Sobre mi
        </Link>

        <Link href={'/contacto'}
          onClick={() => setMenu(false)}
          className="text-white font-bold text-2xl hover:text-sky-500 transition-colors"
        >
          Contacto
        </Link>
      </aside>
      <header className={` sticky top-0 flex p-5 justify-between ${darkMode ? 'bg-gray-800 ' : 'bg-gradient-to-br from-sky-100 to-sky-500'} `}>
        <h1 className="text-2xl text-white font-bold">EminatarenX</h1>



        <nav className="lg:flex gap-10 items-center hidden">
        <button className="text-white font-bold text-lg hover:text-sky-800 transition-colors"
        onClick={() => setDarkMode(!darkMode)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

      </button>
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

          <Link href={'/contacto'}
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
      <button className="lg:hidden z-20 fixed right-20 top-5 "
        onClick={() => setDarkMode(!darkMode)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

      </button>
    </>
  )
}
