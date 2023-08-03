"use client"
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Review } from "@/app/types/types";


interface AppProviderProps {
  children: React.ReactNode
}


const AppContext = createContext({
  darkMode: true,
  setDarkMode: (value: boolean) => {},
  reviews: [] as Review[],
  postReview: (review: Review) => {},
  alertaSuccess: false,
  getReviews: () => {}
  
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


  const postReview = async (review: Review) => {
    try {
      const { data } = await axios.post('/api/review', review)
      setReviews([...reviews, data])
      setAlertaSuccess(true)
      setTimeout(() => {
        setAlertaSuccess(false)
      }, 5000);
    } catch (error) {
      throw error
    }
  }

  const getReviews = async () => {
    try {
      const { data } = await axios.get('/api/review')
      setReviews(data)
    } catch (error) {
      throw error
    }
  }

  useEffect(()=> {
    const getReviews = async () => {
      try {
        const { data } = await axios.get('/api/review')
        setReviews(data)
      } catch (error) {
        throw error
      }
    }
  },[])

  return (
    <AppContext.Provider 
    value={{ 
      darkMode,
      setDarkMode,
      reviews,
      postReview,
      alertaSuccess,
      getReviews
      
     }}>

      {children}
     </AppContext.Provider>
  )

} 

export { AppContext }

export default AppProvider