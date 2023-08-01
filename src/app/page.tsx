import Image from "next/image"
import EmiInicio from '@/img/emi-developer.jpg'
import github from '@/img/git.png'
import instagram from '@/img/instagram.png'
export default function Home() {
  return (
    <main className="pt-10 lg:p-40 fixed flex h-screen w-full flex-col bg-gradient-to-tr  from-sky-100 to-sky-500">
      <section className="flex flex-col xl:flex-row justify-around items-center animate-entrada gap-10">
        <article className="flex flex-col">
          

            <h1 className="text-6xl font-bold text-center">
              Hola, soy <span className="text-blue-500">Eminataren</span>
            </h1>
            <h2 className="text-4xl font-bold text-center">
              Full Stack Developer 
            </h2>

            <div className="lg:flex justify-evenly mt-5 hidden ">
              <a href="https://github.com/EminatarenX" target="_blank">
              <Image
                src={github}
                alt="github"
                height={50}
                width={50}

              />
              </a>
              <a href="https://www.instagram.com/eminataren/" target="_blank">
              <Image
                src={instagram}
                alt="instagram"
                height={50}
                width={50}

              />
              </a>
            </div>          

        </article>
        
        <Image 
         src={EmiInicio}
          height={2000} 
          width={2000} 
          alt="Imaen-emi" 
          className="rounded-full object-cover xl:w-[450px]"  
        />
      </section>


    </main>
  )
}
