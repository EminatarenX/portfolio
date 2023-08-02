"use client"
import useApp from "@/hooks/useApp"
import { FormEvent } from "react"
import { useState, useEffect } from "react"
import FormularioContacto from "@/components/FormularioContacto"
import Alerta from "@/components/Alerta"

export default function page() {
  const { darkMode } = useApp()

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [numero, setNumero] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [alerta, setAlerta] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    if([nombre, correo].includes('')) return setMensaje('Por favor rellena todos los campos')
    setMensaje('')

    const data = {
      nombre,
      correo,
      numero
    }

  }

  useEffect(() => {
    setAlerta(true);
    const timeoutId = setTimeout(() => {
      setAlerta(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);
  

  return (
    <>
    {alerta && <Alerta />}
      <main className={`pt-10 lg:p-40 flex flex-col ${darkMode ? 'bg-slate-800' : 'bg-gradient-to-tr  from-sky-100 to-sky-500'}`}>

        <section className="flex flex-col lg:flex-row justify-around items-center  animate-entrada gap-10">
          <h1 className={`text-5xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'} lg:w-[600px]`}>
            Puedes enviar un correo con tu nombre en el siguiente <span className={`${darkMode ? 'text-sky-500' : 'text-gray-100'}`}>Formulario</span>
          </h1>
        
          <FormularioContacto
            handleSubmit={handleSubmit}
            darkMode={darkMode}
            setNombre={setNombre}
            setCorreo={setCorreo}
            setNumero={setNumero}
            mensaje={mensaje}
          />
        </section>
      </main>
    </>
  )
}
