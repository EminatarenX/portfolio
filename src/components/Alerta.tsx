
import Image from 'next/image'

export default function Alerta() {
  return (
    <div className='fixed h-screen w-full flex pt-20 justify-center  z-10'>
      <div
        className='mt-20 h-[400px] w-[350px] bg-white rounded-xl z-20 opacity-100 animate-alerta p-10 flex flex-col items-center border shadow-xl '>
        <h1 className='text-slate-700 text-5xl mt-10 font-bold text-center'>Contácteme!</h1>
        <p className='text-slate-400 mt-10 text-center'>
          Llena el formulario y te responderé lo más pronto posible
        </p>
        
        <Image
          className="scale-125"
          src={"/img/emoji.gif"}
          alt="emoji"
          width={200}
          height={200}
        />

      </div>
    </div>
  )
}
