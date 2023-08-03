import useApp from "@/hooks/useApp"
import { FormEvent } from "react";

interface Props {
  handleResenia: (e: FormEvent<HTMLFormElement>) => void;
  mensajeResenia: string;
  setResenia: (value: string) => void;
  setNombreResenia: (value: string) => void;
  resenia: string;
  nombreResenia: string;
}

export default function FormularioResenia({ 
  handleResenia, 
  mensajeResenia, 
  setResenia, 
  setNombreResenia, 
  resenia, 
  nombreResenia }: Props) {

  const { darkMode } = useApp()
  return (
    <form
      onSubmit={handleResenia}
      className="flex flex-col justify-center items-center gap-5 px-5 lg:p-0"
    >
      {
        mensajeResenia.includes('Por favor') && (
          <p className="text-red-500 text-center font-semibold">{mensajeResenia}</p>
        )
      }
      <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
        <label htmlFor="nombreResenia" className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Nombre completo</label>

        <input
          id="nombreResenia"
          type="text"
          placeholder="Mi nombre es..."
          className={`p-3 rounded focus:outline-sky-500 font-semibold text-slate-700 w-[350px]`}
          onChange={(e) => setNombreResenia(e.target.value)}
          value={nombreResenia}
        />
      </div>
      <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
        <label htmlFor="resenia" className={`text-xs ${darkMode ? 'text-white' : 'text-sky-950'}`}>Mi reseña</label>
        <textarea
          id="resenia"
          className={`p-3 rounded focus:outline-sky-500 font-semibold text-slate-700 w-[350px] `}
          onChange={(e) => setResenia(e.target.value)}
          value={resenia}
        ></textarea>
      </div>
      <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-sky-950'}`}>
        <label htmlFor="estrellas" className={`text-2xl text-center font-bold ${darkMode ? 'text-white' : 'text-sky-950'}`}>Califica con estrellas!</label>
        <div className="flex justify-center gap-2">
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F9C513" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F9C513" className="w-10 h-10 hover:scale-110 transition-all duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

          </button>
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 hover:scale-110 transition-all duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

          </button>
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 hover:scale-110 transition-all duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

          </button>
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 hover:scale-110 transition-all duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

          </button>
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 hover:scale-110 transition-all duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>


          </button>
        </div>
      </div>



      <input type="submit" value="Enviar"
        className={`
        bg-sky-600 w-full text-white font-bold py-3 px-4 rounded hover:bg-sky-400 transition-colors
      `} />
    </form>
  )
}
