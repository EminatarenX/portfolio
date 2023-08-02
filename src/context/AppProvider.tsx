"use client"
import { createContext, useState } from "react";

const AppContext = createContext({
  darkMode: true,
  setDarkMode: (value: boolean) => {}
})

interface AppProviderProps {
  children: React.ReactNode
}

const  AppProvider = ({ children }: AppProviderProps) => {
  const [darkMode, setDarkMode] = useState(true)

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