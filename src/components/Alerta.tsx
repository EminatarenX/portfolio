

export default function Alerta() {
  return (
    <div className='fixed h-screen w-full flex pt-20 justify-center  z-10'>
      <div
        className='mt-20 h-[400px] w-[350px] bg-white rounded-xl z-20 opacity-100 animate-alerta p-10 flex flex-col items-center border shadow-xl '>
        <h1 className='text-slate-700 text-5xl mt-10 font-bold text-center'>Ojo</h1>
        <p className='text-slate-400 mt-10 text-center'>Esta pagina esta en mantenimiento, puede que no funcione correctamente.</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e81b0" className="w-10 h-10 mt-10 animate-spin">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>

      </div>
    </div>
  )
}
