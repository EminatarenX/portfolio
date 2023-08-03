interface AlertaProps {
  titulo: string,
  mensaje: string
}


export default function AlertaSuccess({ titulo, mensaje }: AlertaProps) {

  return (
    <div className='fixed h-screen w-full flex pt-20 justify-center  z-10'>
      <div
        className='mt-20 h-[400px] w-[350px] bg-white rounded-xl z-20 opacity-100 animate-alerta p-10 flex flex-col items-center border shadow-xl '>
        <h1 className='text-slate-700 text-5xl mt-10 font-bold text-center'>{titulo}</h1>
        <p className='text-slate-400 mt-10 text-center'>
          {mensaje}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-20 h-20 animate-bounce mt-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
    </div>
  )
}
