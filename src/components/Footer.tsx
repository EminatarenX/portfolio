"use client"
import useApp from "@/hooks/useApp"
import Link from "next/link"

export default function Footer() {
  const { darkMode } = useApp()
  return (
    <footer
      className={` p-20 ${darkMode ? 'bg-slate-800': 'bg-gradient-to-br from-sky-100 to-sky-500'} text-white text-center`}

    >
      <Link href={'/login'} 
        className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-sm`}>
        Emiliano Nataren Del Rivero 
      </Link>
      <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-xs`}>
        Full Stack Developer 
      </p>

    </footer>
  )
}
