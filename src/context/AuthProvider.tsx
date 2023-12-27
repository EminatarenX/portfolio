"use client"

import { useEffect, createContext, useState } from 'react'
import axios from 'axios'
import { serverURL } from '@/helpers'
import { useRouter } from 'next/navigation'
import { Auth } from '@/app/types/types'
const AuthContext = createContext({
    login: (data: any) => {},
    mensaje: '',
    auth: {} as Auth,
    setAuth: (auth: Auth) => {}
})

type AuthProviderProps = {
    children: React.ReactNode
}

type AuthData = {
    usuario: string,
    password: string
}


interface ErrorResponse {
  response: {
    data: {
      msg: string;
    };
  };
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [mensaje, setMensaje] = useState('')
  const [auth, setAuth] = useState<Auth>({} as Auth)

    const login = async (dataUser: AuthData) => {
        const { usuario, password } = dataUser
        const autenticarUsuario = {
          query: `
            mutation autenticarUsuario($input: AutenticarInput!){
              autenticarUsuario(input: $input){
                token
              }
            }
          `,
          variables: {
            input: {
              nombre: usuario,
              password
            }
          }
        }

        try {

            const { data } = await axios.post(serverURL, autenticarUsuario)
            

            if(data.errors) {
              setMensaje(data.errors[0].message)
              setTimeout(() => {
                setMensaje('')
              }, 2300);
              return
            }
            const { token } = data.data.autenticarUsuario
            localStorage.setItem('token', token)

            setMensaje('')
            setTimeout(() => {
             window.location.reload()
            }, 1500);

        } catch (error) {
       
          if ((error as ErrorResponse).response?.data?.msg) {
            setMensaje((error as ErrorResponse).response.data.msg)
          }
          
        }
    }

    // useEffect(() => {
    //   const autenticar = async () => {

    //     const token = localStorage.getItem('token')
    //     if(!token) {
    //       return router.push('/')
    //     }
  
    //     const config = {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     }
  
    //     const obtenerUsuario = {
    //       query: `
    //         query obtenerUsuario{
    //           obtenerUsuario{
    //             id
    //             nombre
    //           }
    //         }
    //       `
          
    //     }
  
    //     const { data } = await axios.post(serverURL, obtenerUsuario, config)

    //     if(data.errors){
    //       router.push('/')
    //       setAuth({} as Auth)
          
    //       return
    //     }
        
    //     const usuarioObtenido = data.data.obtenerUsuario
    //     setAuth(usuarioObtenido)
    //     router.push('/admin')
    //   }
    //   autenticar()
      
    // },[])

    return (
        <AuthContext.Provider 

        value={{

            login,
            mensaje,
            auth,
            setAuth
        }}>

            {children}


        </AuthContext.Provider>
    )

}

export { AuthContext}
export default AuthProvider