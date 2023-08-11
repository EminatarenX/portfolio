"use client"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import useApp from "@/hooks/useApp"
import Mensaje from "@/components/Mensaje"
import { useEffect } from "react"

export default function page() {

  const router = useRouter()
  const { auth } = useAuth()
  const { mensajesContacto, getMensajes } = useApp()

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

  useEffect(() => {
    getMensajes()

  },[])

  return (
    <main className="flex flex-col mx-5 my-5">
      <button 
        className="absolute right-10 top-20 bg-slate-900 text-slate-200 p-2 rounded shadow cursor-pointer hover:bg-slate-800"
        type="button" 
        onClick={cerrarSesion}>
        Cerrar Sesion
      </button>

      <section className="mt-5 ">
        <p>Hola {auth?.nombre}</p>
        <article className="mt-10 flex flex-col gap-5">
          <h1 className="text-slate-800 text-4xl font-bold">Mensajes</h1>
          <div className="flex flex-col gap-5">
            {mensajesContacto.length === 0 ? <h1>No hay mensajes por mostrar</h1> : (mensajesContacto?.map(mensaje => (
              <Mensaje 
                key={mensaje.id}
                {...mensaje}
              />)
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
