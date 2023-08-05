"use client"

import { useEffect, createContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext({
    login: (data: any) => {},
    mensaje: '',
})

type AuthProviderProps = {
    children: React.ReactNode
}

type AuthData = {
    usuario: string,
    password: string
}

interface Auth {
  id: string
  nombre: string
}
interface ErrorResponse {
  response: {
    data: {
      msg: string;
    };
  };
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [mensaje, setMensaje] = useState('')
  const [auth, setAuth] = useState<Auth>({} as Auth)

    const login = async (dataUser: AuthData) => {
        try {

            const { data } = await axios.post('/api/auth', dataUser)
            const { nombre, id } = data
            setAuth({
              nombre,
              id
            })
            setMensaje('')

        } catch (error) {
          if ((error as ErrorResponse).response?.data?.msg) {
            setMensaje((error as ErrorResponse).response.data.msg)
          }
          
        }
    }

    return (
        <AuthContext.Provider 

        value={{

            login,
            mensaje,
        }}>

            {children}


        </AuthContext.Provider>
    )

}

export { AuthContext}
export default AuthProvider