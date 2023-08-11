"use client"
import useApp from "@/hooks/useApp"
import { FormEvent } from "react"
import { useState, useEffect } from "react"
import FormularioContacto from "@/components/FormularioContacto"
import Alerta from "@/components/Alerta"
import FormularioResenia from "@/components/FormularioResenia"
import AlertaSuccess from "@/components/AlertaSuccess"

export default function page() {
  const { darkMode, postReview, alertaSuccess, enviarMensaje } = useApp()

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [numero, setNumero] = useState('')
  const [mensajeContacto, setMensajeContacto] = useState('')

  const [mensaje, setMensaje] = useState('')
  const [alerta, setAlerta] = useState(false)
  const [alertaSuccessContacto, setAlertaSuccessContacto] = useState(false)

  const [mensajeResenia, setMensajeResenia] = useState('')
  const [resenia, setResenia] = useState('Lo recomiendo, es muy bueno!')
  const [estrellas, setEstrellas] = useState(1)
  const [nombreResenia, setNombreResenia] = useState('')



  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if ([nombre, correo, mensajeContacto, numero].includes('')) return setMensaje('Por favor rellena todos los campos')
    if(numero.length < 10 || numero.length > 10) return setMensaje('Por favor ingresa un numero valido')

    setMensaje('')

    const data = {
      nombre,
      correo,
      telefono: numero,
      mensaje: mensajeContacto
    }

    enviarMensaje(data)
    setNombre('')
    setCorreo('')
    setNumero('')
    setMensaje('')
    setMensajeContacto('')
    setAlertaSuccessContacto(true)

    setTimeout(() => {
      setAlertaSuccessContacto(false)
    }, 5000);



  }

  const handleResenia = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if ([resenia, nombreResenia].includes('')) return setMensajeResenia('Por favor rellena todos los campos')
    if (estrellas === 1) return setMensajeResenia('Por favor selecciona una cantidad de estrellas mas alta :,(')
    setMensajeResenia('')

    const nuevaResenia = {
      nombre: nombreResenia,
      comentario: resenia,
      calificacion: estrellas
    }

    postReview(nuevaResenia)
    setNombreResenia('')
    setResenia('Lo recomiendo, es muy bueno!')
    setEstrellas(1)
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
      {alertaSuccessContacto && <AlertaSuccess titulo={'Mensaje enviado!'} mensaje={'Gracias por tu mensaje, te responderé lo mas pronto posible'} />}

      {alerta && <Alerta />}

      {
        alertaSuccess && <AlertaSuccess titulo={'Reseña enviada!'} mensaje={'Gracias por tu reseña, nos ayuda a mejorar'} />
      }


      <main className={`pt-10 lg:p-40 flex flex-col ${darkMode ? 'bg-slate-800' : 'bg-gradient-to-tr  from-sky-100 to-sky-500'}`}>

        <section className="flex flex-col lg:flex-row justify-around items-center  animate-entrada gap-10">
          <h1 className={`text-5xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'} lg:w-[600px]`}>
            Puedes enviar un correo con tu nombre en el siguiente <span className={`${darkMode ? 'text-sky-500' : 'text-sky-600'}`}>Formulario</span>
          </h1>

          <FormularioContacto
            handleSubmit={handleSubmit}
            darkMode={darkMode}
            setNombre={setNombre}
            setCorreo={setCorreo}
            setNumero={setNumero}
            setMensajeContacto={setMensajeContacto}
            mensaje={mensaje}
            nombre={nombre}
            correo={correo}
            numero={numero}
            mensajeContacto={mensajeContacto}
          />
        </section>

        <section
          className="flex flex-col  justify-around items-center  animate-entrada gap-10 mt-32"
        >
          <h1 className={`text-5xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'} lg:w-[600px]`}>

            O puedes dejar una reseña sobre mi aquí ={'>'}

          </h1>
          <span className={`text-5xl font-bold ${darkMode ? 'text-sky-500' : 'text-sky-600'}`}>Reseña</span>
          <FormularioResenia
            handleResenia={handleResenia}
            mensajeResenia={mensajeResenia}
            setResenia={setResenia}
            setNombreResenia={setNombreResenia}
            resenia={resenia}
            nombreResenia={nombreResenia}
            estrellas={estrellas}
            setEstrellas={setEstrellas}
          />
        </section>


      </main>
    </>
  )
}
