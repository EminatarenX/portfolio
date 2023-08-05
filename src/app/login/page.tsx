"use client"

import { useState } from 'react'
import useAuth from '@/hooks/useAuth'

export default function page() {
    const { login, mensaje } = useAuth()

    const [usuario, setUsuario] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleAdmin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([usuario, password].includes('')) return

        const data = {
            usuario,
            password
        }

        login(data)


    }
  return (
    <main className="flex py-32 justify-center  bg-slate-900">
        <form 
            onSubmit={handleAdmin}
            className="bg-slate-200 p-20 rounded flex flex-col gap-5">
            <label htmlFor="usuario"
                className="text-3xl font-bold"
            >Login</label>
            {mensaje.length > 0 && <p className="text-red-500">{mensaje}</p>}
            <div className="flex flex-col">
                <label htmlFor="usuario"
                    className="text-sm"
                >
                    usuario
                </label>
                <input type="text" name="usuario" id="usuario" 
                    className="p-2 rounded shadow focus:outline-slate-300"
                    onChange={e => setUsuario(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password"
                    className="text-sm"
                >Password</label>
                <input type="password" name="password" id="password" 
                    className="p-2 rounded shadow focus:outline-slate-300"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="Iniciar Sesion" 
              className='bg-slate-900 text-slate-200 p-2 rounded shadow cursor-pointer hover:bg-slate-800'
            />
        </form>
    </main>
  )
}