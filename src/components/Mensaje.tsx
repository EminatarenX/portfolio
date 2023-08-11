import { formatearFecha } from "@/helpers"

interface MensajeProps {
  id?: string,
  nombre?: string,
  correo: string,
  telefono: string,
  mensaje: string,
  fecha?: string

}

export default function Mensaje(mensajeRecibido : MensajeProps) {
  const { id, nombre, correo, telefono, mensaje, fecha} = mensajeRecibido
  return (
    <div className="bg-slate-200 p-10 flex gap-10 flex-col lg:flex-row">
      <div className="flex flex-col gap-10 justify-between">
        <div className="w-96">
        <p className="font-bold text-2xl">{nombre}</p>
        <p className=" font-normal text-sm">correo: <span className="text-slate-800 font-light">{correo}</span></p>
        <p className=" font-normal text-sm">tel: <span className="text-slate-800 font-light">{telefono}</span></p>
        </div>
        <p className="font-semibold text-slate-500 text-xs">{fecha !== undefined ? formatearFecha(fecha) : "Fecha no disponible"}</p>
      </div>
      <p>{mensaje}</p>
    </div>
  )
}
