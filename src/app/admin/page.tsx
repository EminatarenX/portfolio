"use client"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
export default function page() {
  const router = useRouter()
  const { auth } = useAuth()
  const cerrarSesion = () => {
    localStorage.removeItem('token')
    
    router.push('/')
  }

  if(!auth) {
    
    return(
      <main className="h-screen flex py-32 justify-center  bg-slate-900">
        <h1 className="text-6xl text-white">Cargando...</h1>
      </main>
      
    )
  }

  return (
    <main className="flex flex-col">
      <button 
        className="absolute right-10 top-20 bg-slate-900 text-slate-200 p-2 rounded shadow cursor-pointer hover:bg-slate-800"
        type="button" 
        onClick={cerrarSesion}>
        Cerrar Sesion
      </button>

      <section className="mt-20">
        <p>Hola {auth?.nombre}</p>
      </section>
    </main>
  )
}
