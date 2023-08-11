"use client"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import useApp from "@/hooks/useApp"
import Mensaje from "@/components/Mensaje"
import { useEffect } from "react"
import { Auth } from "@/app/types/types"
export default function page() {

  const router = useRouter()
  const { auth, setAuth } = useAuth()
  const { mensajesContacto, getMensajes } = useApp()

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    setAuth({} as Auth)
    router.push('/')

  }

  useEffect(() => {
    if(!auth) router.push('/')
  },[auth])

  useEffect(() => {
    getMensajes()

  },[])

  return (
    
    <main className="flex flex-col mx-5 my-5">
      <button 
        className="hidden lg:block absolute right-10 top-20 bg-slate-900 text-slate-200 p-2 rounded shadow cursor-pointer hover:bg-slate-800"
        type="button" 
        onClick={cerrarSesion}>
        Cerrar Sesion
      </button>

      <section className="mt-5 ">
        <p>Hola {auth ? auth.nombre : '...'}</p>
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
