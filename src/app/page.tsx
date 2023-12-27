"use client"
import Image from "next/image"
import useApp from "@/hooks/useApp"
import Imagenes from "@/components/Imagenes"
import { useState } from "react"

export default function Home( ){
  const { darkMode, reviews } = useApp()
  const [finish, setFinish] = useState<boolean>(false)
  

  return (
    <main className={`p-20 flex-col ${darkMode ? 'bg-slate-800': 'bg-gradient-to-tr  from-sky-100 to-sky-500'} `}>
      <section className="flex flex-col xl:flex-row justify-around items-center animate-entrada gap-10 p-10 mb-32">
        <article className="flex flex-col">
          

            <h1 className={`text-6xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'} `}>
              Hola, soy <span className={`${darkMode ? 'text-sky-500' : 'text-gray-100'}`}>Eminataren</span>
            </h1>
            <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'}`}>
              Full Stack Developer 
            </h2>

            <div className="lg:flex justify-evenly mt-5 hidden ">
              <a href="https://github.com/EminatarenX" target="_blank">
              <Image
                src={"/img/git.png"}
                alt="github"
                height={50}
                onLoad={() => setFinish(true)}
                width={50}
                className={`${darkMode ? 'invert' : ''} animate-entrada`}
              />
              </a>
              <a href="https://www.instagram.com/eminataren/" target="_blank">
              <Image
                src={"/img/instagram.png"}
                alt="instagram"
                height={50}
                width={50}
                className="animate-entrada"
              />
              </a>
            </div>          

        </article>
        
        { !finish ? (
          <div className="border-b-2 border-slate-300 animate-spin xl:h-[450px] xl:w-[450px] rounded-full">

          </div>
        ) : 
          <Image 
          src={"/img/emi-developer.jpg"}
           height={600} 
           width={600} 
           alt="Imaen-emi" 
           className="rounded-full object-cover xl:w-[450px] animate-entrada"  
         />
        }
      </section>

      {/* <main id="about" className={`lg:px-20 flex flex-col ${darkMode ? 'bg-slate-800': 'bg-gradient-to-tr  from-sky-100 to-sky-500'} `}> */}
      <section className="flex flex-col xl:flex-row gap-5 mt-20 justify-evenly items-center  view">
        <article className="flex gap-5 flex-col px-5 lg:px-20 animate-entrada">
          <h3 className={`text-6xl font-bold text-left lg:text-center ${darkMode ? 'text-white': 'text-sky-950'}`}>
            Sobre <span className={`${darkMode ? 'text-sky-500': 'text-sky-600'}`}>mi</span>
          </h3>
          <p className={`text-left lg:text-center font-semibold ${darkMode ? 'text-slate-300': 'text-slate-800'} text-xl `}>
            Tengo 20 años y soy un desarrollador de software con experiencia en el desarrollo de aplicaciones web
            . Soy de Chiapas, México. Me gusta aprender cosas nuevas y compartir mis conocimientos.

          </p>

          <p className={`text-left lg:text-center font-semibold ${darkMode ? 'text-slate-300': 'text-slate-800'} text-xl `}>
            Por otra parte también me gusta el deporte, en especial running,
            me gusta mucho la naturaleza y los animales; pasar el tiempo con mi familia y amigos. 
          </p>
          <h4 className={`font-bold text-2xl ${darkMode ? 'text-white': 'text-sky-950'} text-left lg:text-center`}>
            Estudios</h4>
          <p className={`text-left lg:text-center font-semibold ${darkMode ? 'text-slate-300': 'text-slate-800'} text-xl `}>
            Estudie la preparatoria ( high school ) en Taylorsville High School en Utah, Estados Unidos,
            lo que me ha ayudado mucho a comunicarme en ingles tanto en la escuela como en el trabajo y amigos.
            Actualmente estudio la carrera de Ingeniería en Software en la Universidad Politécnica de Chiapas.
          </p>

        </article>

        {
          !finish ? (
            <div className="bg-slate-700 w-full xl:w-[1000px] h-[500px] rounded-2xl animate-entrada">

            </div>
          ) : 
          <Image
          src={"/img/emi.jpg"}
          height={800}
          width={800}
          alt="Imaen-emi"
          className="rounded object-cover xl:w-[450px] shadow-xl animate-delay-entrada "
          onLoad={() => setFinish(true)}

        />
          
        }

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 justify-around animate-entrada gap-10 mt-20 mx-4 view pt-32">
            <h3 className={`text-6xl font-bold  lg:col-span-2 lg:text-center ${darkMode ? 'text-sky-600' : 'text-sky-950'}`}>
              Experiencia
            </h3>
        <article className="flex flex-col gap-5 ">
          <h3 className={`text-2xl font-bold lg:text-center ${darkMode ? 'text-slate-200': 'text-blue-950'}`}>
            Estudia<span className={!darkMode ? 'text-sky-600' : 'text-sky-800'}>Confort</span>
            
          </h3>  
          <a
            className="text-sky-900 font-semibold text-sm hover:text-sky-500 lg:text-center transition-colors"
          href="https://main.d25eiycej117li.amplifyapp.com/" target="_blank">Visitar</a>
          <p className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            EstudiaConfort es una plataforma web que permite a los estudiantes de Chiapas
            encontrar un lugar donde vivir cerca de su universidad, y a los propietarios de
            de esta empresa les permite publicar sus cuartos disponibles para renta.
            
          </p>
          <Image
            height={2000}
            width={2000}
            alt="Imaen-confort"
            src={"/img/index-ec.jpg"}
          />

          <p className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            El administrador de la pagina puede agregar, editar y eliminar las publicaciones
            de los cuartos disponibles, asi como también puede agregar, editar y eliminar las
            habitaciones disponibles y consultar sus finanzas.
          </p>


    
          <p className={`${darkMode ? "text-slate-500": "text-slate-700"}`}>
            <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Tecnologías usadas: </span>
            React vite, Tailwindcss, Context-api from React, React Router Dom, Nodejs, Express, Microsoft SQL server from AWS y AWS Amplify, Stripe, Nodecron, Bycript, Nodemailer, 
            Json Web Token, Cloudinary.

          </p>
          
        </article>

        <article className="flex flex-col gap-5">
          <h3 className={`text-2xl lg:text-center font-bold ${darkMode ? 'text-blue-100' : 'text-slate-700'}`}>
            Match Master
          </h3>
          <a className="text-sky-900 font-semibold text-sm hover:text-sky-500 lg:text-center transition-colors"
          href="https://matchmaster-game.netlify.app/" target="_blank">Visitar</a>

          <p className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Match Master es un juego de memoria, donde el jugador tiene que encontrar las parejas
            de cartas iguales, el juego tiene un contador de tiempo y un contador de movimientos.
            El juego es completamente Frontend, no se usa ninguna base de datos.
          </p>
          <Image
            height={2000}
            width={2000}
            alt="Imaen-match"
            src={"/img/matchmaster.jpg"}
          />
          <p className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            El juego fue hecho para una clase de ingles donde se me contrato para hacer un juego
            que tuviera que ver con el vocabulario de la clase.

          </p>
          <p className={`${darkMode ? "text-slate-500": "text-slate-700"}`}>
            <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Tecnologías usadas: </span>
            React vite, Tailwindcss, Context-api from React, React Router Dom, Netlify.
          </p>
          </article>

          <article className="flex flex-col gap-5 lg:col-span-2 view mt-40">
            <h3 className={`text-center text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              GitHub
            </h3>
            <a className="text-center text-sky-900 font-semibold text-sm hover:text-sky-500"
            href="https://github.com/EminatarenX"
            target="_blank">Visitar</a>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5">
              <p className={`lg:text-4xl lg:w-[600px] lg:text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                En mi cuenta de github puedes encontrar todos los proyectos que he hecho, tanto
                de la universidad como de proyectos personales. <br /> <br />
                <span
                  className="text-slate-500 text-sm font-semibold"
                >
                  Este sitio web fue hecho con Nextjs v13, Tailwindcss, Typescript, Prisma, MySQL, Apollo Server y GraphQL.
                </span>
                
              </p>
              
              <Image
                height={400}
                width={400}
                alt="Imaen-github"
                src={"/img/git.png"}
                className={`rounded object-cover animate-floating ${darkMode ? 'invert' : ''}`}

              />
            </div>

          </article>

      </section>
      

      <section className="flex flex-col justify-around animate-entrada gap-10 mt-20">
       
        
        <article className="grid grid-cols-4 xl:grid-cols-6 gap-8 mx-4 items-center p-5 ">
          <Imagenes/>
        </article>
      </section>
    {/* </main> */}

    

    </main>
  )
}

