import { Review } from "@/app/types/types"
import { formatearFecha } from "@/helpers"
import Image from "next/image";
import useApp from "@/hooks/useApp";

export default function Review(review: Review) {
  const { darkMode } = useApp()
  const { nombre, comentario, calificacion, fecha } = review
  

  return (
    <div
      className={`flex flex-col gap-10 justify-between min-w-[350px] xl:min-w-[500px]  
      ${darkMode ? 'bg-gradient-to-t from-gray-900 to-gray-950' :
          'bg-gradient-to-t from-sky-200 to-sky-400'} rounded shadow-xl p-10 animate-delay-entrada
    
    `}>
      <div className="flex flex-col gap-2">
        <h1
          className={`text-3xl font-bold ${darkMode ? 'text-gray-300' : 'text-sky-800'}`}
        >{nombre}</h1>
       

        {
          calificacion === 1 ? (
            // <>
            // <p>★</p>
            <Image
              width={10}
              height={10}
              alt="star"
              src={"/img/PowerStar.webp"}
            />

          ) :
            calificacion === 2 ? (
              // <p>★★</p>
              <div className="flex gap-5">
              <Image
                width={20}
                height={20}
                alt="star"
                src={"/img/PowerStar.webp"}
              />
              <Image
                width={20}
                height={20}
                alt="/img/PowerStar.webp"
                src={"/img/PowerStar.webp"}
              />
              
            </div>
            )
              : calificacion === 3 ? (
                // <p>★★★</p>
                <div className="flex gap-5">
                <Image
                  width={20}
                  height={20}
                  alt="/img/PowerStar.webp"
                  src={"/img/PowerStar.webp"}
                />
                <Image
                  width={20}
                  height={20}
                  alt="/img/PowerStar.webp"
                  src={"/img/PowerStar.webp"}
                />
                <Image
                  width={20}
                  height={20}
                  alt="/img/PowerStar.webp"
                  src={"/img/PowerStar.webp"}
                />
             
              </div>
              )
                : calificacion === 4 ? (
                  // <p>★★★★</p>
                  <div className="flex gap-5">
                  <Image
                    width={20}
                    height={20}
                    alt="/img/PowerStar.webp"
                    src={"/img/PowerStar.webp"}
                  />
                  <Image
                    width={20}
                    height={20}
                    alt="/img/PowerStar.webp"
                    src={"/img/PowerStar.webp"}
                  />
                  <Image
                    width={20}
                    height={20}
                    alt="/img/PowerStar.webp"
                    src={"/img/PowerStar.webp"}
                  />
                  <Image
                    width={20}
                    height={20}
                    alt="/img/PowerStar.webp"
                    src={"/img/PowerStar.webp"}
                  />
            
                </div>
                )
                  : (
                    // <p>★★★★★</p>
                    <div className="flex gap-5">
                      <Image
                        width={20}
                        height={20}
                        alt="/img/PowerStar.webp"
                        src={"/img/PowerStar.webp"}
                      />
                      <Image
                        width={20}
                        height={20}
                        alt="/img/PowerStar.webp"
                        src={"/img/PowerStar.webp"}
                      />
                      <Image
                        width={20}
                        height={20}
                        alt="/img/PowerStar.webp"
                        src={"/img/PowerStar.webp"}
                      />
                      <Image
                        width={20}
                        height={20}
                        alt="/img/PowerStar.webp"
                        src={"/img/PowerStar.webp"}
                      />
                      <Image
                        width={20}
                        height={20}
                        alt="/img/PowerStar.webp"
                        src={"/img/PowerStar.webp"}
                      />
                    </div>
                  )

        }
         <p className={`${darkMode ? 'text-gray-400' : 'text-sky-800'} text-justify`}>{comentario}</p>
      </div>
      {/* <p>{calificacion}</p> */}
      <div>

        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-sky-600'}`}>{fecha !== undefined ? formatearFecha(fecha) : "Fecha no disponible"}</p>
      </div>

    </div>
  )
}
