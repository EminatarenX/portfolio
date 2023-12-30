"use client"
import useApp from "@/hooks/useApp"

export default function Footer() {
  const { darkMode } = useApp()
  return (
    <footer
      className={` p-20 ${darkMode ? 'bg-slate-800': 'bg-gradient-to-br from-sky-300 to-sky-600'} text-white text-center`}

    >
      <p
        className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-sm`}>
        Emiliano Nataren Del Rivero 
      </p>
      <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-xs`}>
        Full Stack Developer 
      </p>

    </footer>
  )
}
