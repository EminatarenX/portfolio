"use client"
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Review } from "@/app/types/types";
import { serverURL } from "@/helpers";

interface AppProviderProps {
  children: React.ReactNode
}

type MensajeI = {
  id?: string,
  nombre: string,
  correo: string,
  telefono: string,
  mensaje: string,
  fecha?: string
}


const AppContext = createContext({
  darkMode: true,
  setDarkMode: (value: boolean) => {},
  reviews: [] as Review[],
  postReview: (review: Review) => {},
  alertaSuccess: false,
  getReviews: () => {},
  enviarMensaje: (mensaje: MensajeI) => {}
  
})

type AlertType = {
  titulo: string,
  mensaje: string,
  error: boolean
}

const  AppProvider = ({ children }: AppProviderProps) => {
  const [darkMode, setDarkMode] = useState(true)
  const [reviews, setReviews] = useState<Review[]>([])
  const [alertaSuccess, setAlertaSuccess] = useState(false)
  const [mensajesContacto, setMensajesContacto] = useState<MensajeI[]>([])

  const postReview = async (review: Review) => {

    const { nombre, comentario, calificacion } = review

    const nuevaReview = {
      query: `
        mutation crearReview($input: ReviewInput!) {
          crearReview(input: $input) {
            id
            fecha
            nombre
            comentario
            calificacion
          }
        }
      `,
      variables: {
        input: {
          nombre,
          comentario,
          calificacion
        }
      }
    };

    try {
        const { data } = await axios.post(serverURL, nuevaReview)
    
        let reviewObtenida = data.data.crearReview
        setReviews([...reviews, reviewObtenida])
        setAlertaSuccess(true)
        setTimeout(() => {
          setAlertaSuccess(false)
        }, 5000);
    } catch (error) {
      throw error
    }
  }

  const getReviews = async () => {
    const obtenerReviews = {
      query: `
      query obtenerReviews{
        obtenerReviews{
          id
          fecha
          nombre
          comentario
          calificacion
        }
      }
    `
    }

    try {
      const { data } = await axios.post(serverURL, obtenerReviews)
      
      let reviewsObtenidas = data.data.obtenerReviews
     
      setReviews(reviewsObtenidas)
    } catch (error) {
      throw error
    }
  }

  const enviarMensaje = async (datos: MensajeI) => {
    const { nombre, correo, telefono, mensaje } = datos

    const crearMensaje = {
      query: `
        mutation crearMensaje($input: MensajeInput!){
          crearMensaje(input: $input){
            id
            nombre
            correo
            telefono
            mensaje
            fecha
          }
        }
      `,
      variables: {
        input: {
          nombre,
          correo,
          telefono,
          mensaje
        }
      }
    }

    try {

      const { data } = await axios.post(serverURL, crearMensaje)
      const nuevoMensaje = data.data.crearMensaje
      setMensajesContacto([...mensajesContacto, nuevoMensaje])

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <AppContext.Provider 
    value={{ 
      darkMode,
      setDarkMode,
      reviews,
      postReview,
      alertaSuccess,
      getReviews,
      enviarMensaje
      
     }}>

      {children}
     </AppContext.Provider>
  )

} 

export { AppContext }

export default AppProvider