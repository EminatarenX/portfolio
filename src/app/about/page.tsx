import Imagenes from "@/components/Imagenes"
import EmiImg from '../../../public/emi.jpg'
import Image from "next/image"
import indexC from '../../../public/index-ec.jpg'
import matchmaster from '../../../public/matchmaster.jpg'
import github from '../../../public/git.png'

export default function page() {
  return (
    <main className="lg:px-20 flex flex-col bg-gradient-to-tr  from-sky-100 to-sky-500 ">
      <section className="flex flex-col lg:flex-row gap-5 mt-20 justify-evenly items-center animate-entrada">
        <article className="flex gap-5 flex-col px-5 lg:px-20">
          <h3 className="text-6xl font-bold text-left lg:text-center text-sky-950">
            Sobre <span className="text-blue-500">mi</span>
          </h3>
          <p className="text-left lg:text-center font-semibold text-slate-800 text-xl">
            Tengo 20 años y soy un desarrollador de software con experiencia en el desarrollo de aplicaciones web
            . Soy de Chiapas, México. Me gusta aprender cosas nuevas y compartir mis conocimientos.

          </p>

          <p className="text-left lg:text-center font-semibold text-slate-800 text-xl">
            Por otra parte tambien me gusta el deporte, en especial running,
            me gusta mucho la naturaleza y los animales; pasar el tiempo con mi familia y amigos. 
          </p>
          <h4 className="font-bold text-2xl text-sky-900 text-left lg:text-center">
            Estudios</h4>
          <p className="text-left lg:text-center font-semibold text-slate-800 text-xl">
            Estudie la preparatoria ( high school ) en Taylorsville High School en Utah, Estados Unidos,
            lo que me ha ayudado mucho a comunicarme en ingles tanto en la escuela como en el trabajo y amigos.
            Actualmente estudio la carrera de Ingenieria en Software en la Universidad Politecnica de Chiapas.
          </p>

        </article>

        <Image
          src={EmiImg}
          height={2000}
          width={2000}
          alt="Imaen-emi"
          className="rounded object-cover xl:w-[450px] shadow-xl"

        />

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 justify-around animate-entrada gap-10 mt-20 mx-4">
            <h3 className="text-6xl font-bold text-center lg:col-span-2 lg:text-center text-sky-950">
              Experiencia
            </h3>
        <article className="flex flex-col gap-5 ">
          <h3 className="text-2xl font-bold lg:text-center">
            Estudia<span className="text-blue-500">Confort</span>
            
          </h3>  
          <a
            className="text-sky-900 font-semibold text-sm hover:text-sky-700 lg:text-center"
          href="https://main.d25eiycej117li.amplifyapp.com/" target="_blank">Visitar</a>
          <p className="font-semibold text-slate-700">
            EstudiaConfort es una plataforma web que permite a los estudiantes de Chiapas
            encontrar un lugar donde vivir cerca de su universidad, y a los propietarios de
            de esta empresa les permite publicar sus cuartos disponibles para renta.
            
          </p>
          <Image
            height={2000}
            width={2000}
            alt="Imaen-confort"
            src={indexC}
          />

          <p>
            El administrador de la pagina puede agregar, editar y eliminar las publicaciones
            de los cuartos disponibles, asi como tambien puede agregar, editar y eliminar las
            habitaciones disponibles y consultar sus finanzas.
          </p>


    
          <p className="text-slate-600">
            <span className="font-semibold text-slate-700">Tecnologias usadas: </span>
            React vite, Tailwindcss, Context-api from React, React Router Dom, Nodejs, Express, Microsoft SQL server from AWS y AWS Amplify, Stripe, Nodecron, Bycript, Nodemailer, 
            Json Web Token, Cloudinary.

          </p>
          
        </article>

        <article className="flex flex-col gap-5 ">
          <h3 className="text-2xl lg:text-center font-bold text-slate-800">
            Match Master
          </h3>
          <a className="text-sky-900 font-semibold text-sm hover:text-sky-700 lg:text-center"
          href="https://matchmaster-game.netlify.app/" target="_blank">Visitar</a>

          <p className="font-semibold text-slate-700">
            Match Master es un juego de memoria, donde el jugador tiene que encontrar las parejas
            de cartas iguales, el juego tiene un contador de tiempo y un contador de movimientos.
            El juego es completamente Frontend, no se usa ninguna base de datos.
          </p>
          <Image
            height={2000}
            width={2000}
            alt="Imaen-match"
            src={matchmaster}
          />
          <p>
            El juego fue hecho para una clase de ingles donde se me contrato para hacer un juego
            que tuviera que ver con el vocabulario de la clase.

          </p>
          <p className="text-slate-600">
            <span className="font-semibold text-slate-700">Tecnologias usadas: </span>
            React vite, Tailwindcss, Context-api from React, React Router Dom, Netlify.
          </p>
          </article>

          <article className="flex flex-col gap-5 lg:col-span-2">
            <h3 className="text-center text-2xl font-bold text-slate-800">
              Github
            </h3>
            <a className="text-center text-sky-900 font-semibold text-sm hover:text-sky-700"
            href="https://github.com/EminatarenX"
            target="_blank">Visitar</a>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5">
              <p className="lg:text-4xl lg:w-[600px] lg:text-center">
                En mi cuenta de github puedes encontrar todos los proyectos que he hecho, tanto
                de la universidad como de proyectos personales. <br /> <br />
                <span
                  className="text-slate-600 text-sm font-semibold"
                >
                  Este sitio web fue hecho con Nextjs y Tailwindcss.
                </span>
                
              </p>
              
              <Image
                height={400}
                width={400}
                alt="Imaen-github"
                src={github}
              />
            </div>

          </article>

      </section>
      

      <section className="flex flex-col justify-around animate-entrada gap-10 mt-20">
       
        
        <article className="grid grid-cols-4 xl:grid-cols-6 gap-8 mx-4 items-center p-5 ">
          <Imagenes/>
        </article>
      </section>
    </main>
  )
}
