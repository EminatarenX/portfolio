import { FormEvent } from "react";

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  darkMode: boolean;
  setNombre: (value: string) => void;
  setCorreo: (value: string) => void;
  setNumero: (value: string) => void;
  mensaje: string;
}

export default function FormularioContacto({
  handleSubmit, 
  darkMode, 
  setNombre, 
  setCorreo, 
  setNumero
  , mensaje
  } : Props) {



  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-center gap-5 px-5 lg:p-0"
  >
     {
          mensaje.includes('Por favor') && (
            <p className="text-red-500 text-center font-semibold animate-slide">{mensaje}</p>
          )
        }
    <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
      <label htmlFor="nombre" className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Nombre completo</label>

      <input 
        id="nombre" 
        type="text"
         placeholder="Emiliano Natare Del Rivero" 
         className={`p-3 rounded focus:outline-sky-500 font-semibold text-slate-700 w-[350px]`} 
          onChange={(e) => setNombre(e.target.value)}
         />
    </div>
    <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
      <label htmlFor="correo" className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Correo electronico</label>
      <input 
      id="correo" 
      type="email" 
      placeholder="usuario@correo.com" 
      className={`p-3 rounded focus:outline-sky-500 font-semibold text-slate-700  w-[350px]`} 
      onChange={(e) => setCorreo(e.target.value)}
      />
    </div>
    <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
      <label htmlFor="numero" className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Numero Telefonico</label>
      <input 
      id="numero" 
      type="text" 
      placeholder="opcional" 
      className={`p-3 rounded focus:outline-sky-500 font-semibold text-slate-700 w-[350px]`} 
      onChange={(e) => setNumero(e.target.value)}
      />
    </div>

    <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
      <label htmlFor="mensaje"
        className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Escribe un mensaje</label>
      <textarea className="rounded text-sky-900"
        name="mensaje"
        id="mensaje"
        cols={30}
        
      >

      </textarea>
    
    </div>



    <input type="submit" value="Enviar"
      className={`
        bg-sky-600 text-white font-bold py-3 px-4 rounded hover:bg-sky-400 transition-colors
      `} />
  </form>
  )
}
