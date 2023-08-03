"use client"
import { createContext, useState, useEffect } from "react";

import axios from "axios";

const AppContext = createContext({
  darkMode: true,
  setDarkMode: (value: boolean) => {}
})

interface AppProviderProps {
  children: React.ReactNode
}

const  AppProvider = ({ children }: AppProviderProps) => {
  const [darkMode, setDarkMode] = useState(true)
  const [visitas, setVisitas] = useState('')




  useEffect(()=> {
    const getVisitas = async () => {
      try {
        const { data } = await axios.get('/api/visitas')
        setVisitas(data)
      } catch (error) {
        console.log(error)
      }
    }
    const postVisitas = async () => {
      try {
       await axios.post('/api/visitas', {})
        
      } catch (error) {
        console.log(error)
      }
    }
    getVisitas()
    postVisitas()
  },[])

  return (
    <AppContext.Provider 
    value={{ 
      darkMode,
      setDarkMode
     }}>

      {children}
     </AppContext.Provider>
  )

} 

export { AppContext }

export default AppProvider